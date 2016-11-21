import React from 'react';
import _ from 'lodash';

export default class PokeSingleItem extends React.Component {
	checkType(value){ // check type of a value
		if (typeof(value) == 'string'){
			return "String";
		} else {
			if ((value) instanceof Array){
				return "Array";
			}
			if ((value) instanceof Object){
				return "Object";
			}
		}
		return "Undefined";
	}
	handleObjectType(value){
		var object = _.map(value, function(value, key){
			return (
				<li key = {key}> 
					{key} : {this.getValue(value)}
				</li>
			)
		}.bind(this));
		return (
			<ul>
				{object}
			</ul>
		);
	}
	handleArrayType(value){
		if(value.length > 1){ // if more than 1 then print as list
			var array = _.map(value, function(item, index){
				return (
					<li key = {index}>
						{this.getValue(item)}
					</li>
				)
			}.bind(this));
			return (
				<ul>
					{array}
				</ul>
			);
		} else { // if just one print as div
			return (
				<div>
					{this.getValue(value[0])}
				</div>
			)
		}
		
	}
	getValue(value){ // to produce list from pokemon value using recursive approach
		
		// get value type
		var objectType = this.checkType(value);
		switch(objectType){
			case "Object" : { // if value is object print key : value
				return this.handleObjectType(value);
				break;
			}
			case "Array" : { // if array the print value for each item
				return this.handleArrayType(value);
				break;
			}
			default : { // for String or Boolean, just print
				if(value){
					return value.toString();	
				}
				return null;
			}
		}
	}
	render() {
		var pokeData = this.props.data;

		// list for information in pokemon data
		var tableRow = _.map(pokeData, function(value, key){
			return (
				<tr key={key}>
					<th> {key} </th>
					<td> {this.getValue(value)} </td>
				</tr>
			)
		}.bind(this));

		return (
			<section className="poke-single">
				<div className="poke-single-image">
					<img src={pokeData.sprites.front_default}></img>
				</div>
				<h1> {pokeData.name} </h1>
				<table className="table">
					<thead>
						<tr> 
							<th> Information </th>
							<th> Detail </th>
						</tr>
					</thead>
					<tbody>
						{tableRow}
					</tbody>
				</table>
			</section>
		)
	}
}

