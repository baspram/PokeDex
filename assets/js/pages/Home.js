import React from 'react';

import axios from 'axios';

import PokeFilter from '../components/PokeFilter';
import PokeList from '../components/PokeList';

export default class Home extends React.Component {
	constructor(props, context){
		super(props, context);
		this.state = {
			filter : "all"
		};
	}
  changeFilter(typeName){
    this.setState({
      filter : typeName
    });
  }
	render() {
		return (
			<div>
				<PokeFilter
          filter = {this.state.filter}
          handleChangeFilter = {this.changeFilter.bind(this)} />
				<PokeList
          filter = {this.state.filter} />
			</div>
		)
	}
}
