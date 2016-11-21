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

    // fetch more data
    this.props.dispatch(fetchMorePokemons(nextUrl));
    
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

var Pokemons = {
  "count": 811,
  "previous": null,
  "results": [
    {
      "url": "http://pokeapi.co/api/v2/pokemon/1/",
      "name": "bulbasaur"
    },
    {
      "url": "http://pokeapi.co/api/v2/pokemon/2/",
      "name": "ivysaur"
    },
    {
      "url": "http://pokeapi.co/api/v2/pokemon/3/",
      "name": "venusaur"
    },
    {
      "url": "http://pokeapi.co/api/v2/pokemon/4/",
      "name": "charmander"
    },
    {
      "url": "http://pokeapi.co/api/v2/pokemon/5/",
      "name": "charmeleon"
    },
    {
      "url": "http://pokeapi.co/api/v2/pokemon/6/",
      "name": "charizard"
    },
    {
      "url": "http://pokeapi.co/api/v2/pokemon/7/",
      "name": "squirtle"
    },
    {
      "url": "http://pokeapi.co/api/v2/pokemon/8/",
      "name": "wartortle"
    },
    {
      "url": "http://pokeapi.co/api/v2/pokemon/9/",
      "name": "blastoise"
    },
    {
      "url": "http://pokeapi.co/api/v2/pokemon/10/",
      "name": "caterpie"
    },
    {
      "url": "http://pokeapi.co/api/v2/pokemon/11/",
      "name": "metapod"
    },
    {
      "url": "http://pokeapi.co/api/v2/pokemon/12/",
      "name": "butterfree"
    },
    {
      "url": "http://pokeapi.co/api/v2/pokemon/13/",
      "name": "weedle"
    },
    {
      "url": "http://pokeapi.co/api/v2/pokemon/14/",
      "name": "kakuna"
    },
    {
      "url": "http://pokeapi.co/api/v2/pokemon/15/",
      "name": "beedrill"
    },
    {
      "url": "http://pokeapi.co/api/v2/pokemon/16/",
      "name": "pidgey"
    },
    {
      "url": "http://pokeapi.co/api/v2/pokemon/17/",
      "name": "pidgeotto"
    },
    {
      "url": "http://pokeapi.co/api/v2/pokemon/18/",
      "name": "pidgeot"
    },
    {
      "url": "http://pokeapi.co/api/v2/pokemon/19/",
      "name": "rattata"
    },
    {
      "url": "http://pokeapi.co/api/v2/pokemon/20/",
      "name": "raticate"
    }
  ],
  "next": "http://pokeapi.co/api/v2/pokemon/?limit=20&offset=20"
};

var Pokemons2 = {
  "count": 811,
  "previous": "http://pokeapi.co/api/v2/pokemon/?limit=20",
  "results": [
    {
      "url": "http://pokeapi.co/api/v2/pokemon/21/",
      "name": "spearow"
    },
    {
      "url": "http://pokeapi.co/api/v2/pokemon/22/",
      "name": "fearow"
    },
    {
      "url": "http://pokeapi.co/api/v2/pokemon/23/",
      "name": "ekans"
    },
    {
      "url": "http://pokeapi.co/api/v2/pokemon/24/",
      "name": "arbok"
    }
  ],
  "next": "http://pokeapi.co/api/v2/pokemon/?limit=20&offset=40"
};