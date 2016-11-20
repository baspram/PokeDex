import React from 'react';
import {connect} from 'react-redux';
import {fetchType} from '../store/actions/PokeTypeAction';

@connect(function(store){
	return {
		types: store.PokeTypeReducer.types,
		fetching: store.PokeTypeReducer.fetching,
		fetched: store.PokeTypeReducer.fetched,
		error: store.PokeTypeReducer.error,
	}
})
export default class PokeFilter extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			showFilter : false
		}
	}
	componentWillMount(){
		var types = PokeTypes;
		
		// this.props.dispatch(fetchType());

		this.setState({
			types : types.results
		})
	}
	changeFilter(e){
		console.log("change filter to: " + e.target.id);
		this.props.handleChangeFilter(e.target.id);
		this.toggleFilter();
	}
	toggleFilter(){
		var show = !this.state.showFilter;
		this.setState({
			showFilter: show
		});
	}
	render() {
		// var types = this.props.types;
		var types = this.state.types;
		var typeList = types.map(function(item, index){
			return (
				<li className="btn btn-block"
				id = {item.name}
				key = {index}
				onClick = {this.changeFilter.bind(this)}>
					{item.name}
				</li>
			)
		}.bind(this));
		var showFilter = function(){
			if(this.state.showFilter){
				return (
					<div className="filter-container">
						<ul>
							<li className="btn btn-block "
								id = "all"
								onClick = {this.changeFilter.bind(this)}>
								all
							</li>
							{typeList}
						</ul>
					</div>
				)
			}
		}.bind(this);
		return (
			<div className="filter">
				<h1> {this.props.filter} Pokemons  </h1>
				<button className="btn filter-btn" onClick={this.toggleFilter.bind(this)}>
					Filter
					<span className="glyphicon glyphicon-filter"></span>
				</button>
				{showFilter()}
			</div>
		)
	}
}



var PokeTypes = {
  "count": 20,
  "previous": null,
  "results": [
    {
      "url": "http://pokeapi.co/api/v2/type/1/",
      "name": "normal"
    },
    {
      "url": "http://pokeapi.co/api/v2/type/2/",
      "name": "fighting"
    },
    {
      "url": "http://pokeapi.co/api/v2/type/3/",
      "name": "flying"
    },
    {
      "url": "http://pokeapi.co/api/v2/type/4/",
      "name": "poison"
    },
    {
      "url": "http://pokeapi.co/api/v2/type/5/",
      "name": "ground"
    },
    {
      "url": "http://pokeapi.co/api/v2/type/6/",
      "name": "rock"
    },
    {
      "url": "http://pokeapi.co/api/v2/type/7/",
      "name": "bug"
    },
    {
      "url": "http://pokeapi.co/api/v2/type/8/",
      "name": "ghost"
    },
    {
      "url": "http://pokeapi.co/api/v2/type/9/",
      "name": "steel"
    },
    {
      "url": "http://pokeapi.co/api/v2/type/10/",
      "name": "fire"
    },
    {
      "url": "http://pokeapi.co/api/v2/type/11/",
      "name": "water"
    },
    {
      "url": "http://pokeapi.co/api/v2/type/12/",
      "name": "grass"
    },
    {
      "url": "http://pokeapi.co/api/v2/type/13/",
      "name": "electric"
    },
    {
      "url": "http://pokeapi.co/api/v2/type/14/",
      "name": "psychic"
    },
    {
      "url": "http://pokeapi.co/api/v2/type/15/",
      "name": "ice"
    },
    {
      "url": "http://pokeapi.co/api/v2/type/16/",
      "name": "dragon"
    },
    {
      "url": "http://pokeapi.co/api/v2/type/17/",
      "name": "dark"
    },
    {
      "url": "http://pokeapi.co/api/v2/type/18/",
      "name": "fairy"
    },
    {
      "url": "http://pokeapi.co/api/v2/type/10001/",
      "name": "unknown"
    },
    {
      "url": "http://pokeapi.co/api/v2/type/10002/",
      "name": "shadow"
    }
  ],
  "next": null
};