import React from 'react';

export default class PokeFilterModal extends React.Component {
	changeFilter(e){
		this.props.handleChangeFilter(e.target.id);
	}
	render(){
		var types = this.props.types;
		var typeList = types.map(function(item, index){
			return (
				<li className="filter-item"
					id = {item.name}
					key = {index}
					onClick = {this.changeFilter.bind(this)}>
					{item.name}
				</li>
			)
		}.bind(this));
		return (
			<div className="filter-modal">
				<h1>Choose Filter</h1>
				<div className="filter-container">
					<ul>
						<li className="filter-item"
							id = "all"
							onClick = {this.changeFilter.bind(this)}>
							all
						</li>
						{typeList}
					</ul>
				</div>
			</div>
		)
	}
}