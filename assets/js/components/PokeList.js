import React from 'react';
import {connect} from 'react-redux';
import {fetchPokemons, fetchMorePokemons} from '../store/actions/PokeListAction';
import InfiniteScroll from 'react-infinite-scroll-component';

import PokeItem from './PokeItem';
import BigLoader from './BigLoader';

@connect(function(store){
  return {
    pokemons: store.PokeListReducer.pokemons,
    count: store.PokeListReducer.count,
    nextUrl: store.PokeListReducer.nextUrl,
    fetching: store.PokeTypeReducer.fetching,
    fetched: store.PokeTypeReducer.fetched,
    error: store.PokeTypeReducer.error,
  }
})
export default class PokeList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hasMore : true // for infinite scroll
    };
  }
  componentWillMount(){
    // fetch data for first access
    if(!this.props.pokemons.length){
      this.props.dispatch(fetchPokemons(this.props.perPage));
    }
  }
  loadMore(){
    var nextUrl  = this.props.nextUrl;

    // replace limit parameter for specific filter 
    if(this.props.filter != 'all'){
      nextUrl = nextUrl.replace(('limit=' + this.props.perPage), ('limit=' + this.props.perFilteredPage));
    }  else {
      nextUrl = nextUrl.replace(('limit=' + this.props.perFilteredPage), ('limit=' + this.props.perPage));
    }

    // fetch more data if not fetching
    if(!this.props.fetching){
      this.props.dispatch(fetchMorePokemons(nextUrl));  
    }
    
    // just to make sure inital count is fetched before changing state
    if(this.props.count > 0){
      this.setState({
        hasMore : (this.props.pokemons.length < this.props.count)
      });
    }
  }
  render() {
    var pokemons = this.props.pokemons;
    var filteredPokemons = pokemons;

    // loader for infinite scroll
    var loader = (
      <div className="col-md-12 loader">
        <BigLoader />
      </div>
    );

    // make pokemon list to show
    filteredPokemons = filteredPokemons.map(function(item, index){
      return (
        <PokeItem 
          key = {index}
          data = {item}
          filter = {this.props.filter} />
      );
    }.bind(this));

    return (
      <section className="poke-list">
        <InfiniteScroll
            next={this.loadMore.bind(this)}
            hasMore={this.state.hasMore}
            loader={loader}>
          {filteredPokemons}
        </InfiniteScroll>
      </section>
    )
  }
}

PokeList.defaultProps = {
  perPage: 20, // normal sum for fetching data of 'all' type
  perFilteredPage: 100 // sum for fetching data of type beside 'all' to increase change more pokemon fetched
};