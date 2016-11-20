import React from 'react';
import {connect} from 'react-redux';
import {fetchPokemons, fetchMorePokemons} from '../store/actions/PokeListAction';
import PokeItem from './PokeItem';
import InfiniteScroll from 'react-infinite-scroll-component';

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
      pokemons : []
    };
  }
  componentWillMount(){
    // this.props.dispatch(fetchPokemons());
    this.setState({
      pokemons : Pokemons.results
    });
  }
  loadMore(){
    // this.props.dispatch(fetchMorePokemons(this.props.nextUrl));
  }
	render() {
    // var pokemons = this.props.pokemons;
    var pokemons = this.state.pokemons;

    var filteredPokemons = pokemons;

    filteredPokemons = filteredPokemons.map(function(item, index){
      return (
        <PokeItem 
          key = {index}
          data = {item}
          filter = {this.props.filter} />
      );
    }.bind(this));

		return (
			<InfiniteScroll
          next={this.loadMore.bind(this)}
          hasMore={true}
          loader={<div className="loader">Loading ...</div>}>
        {filteredPokemons}
      </InfiniteScroll>
		)
	}
}

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