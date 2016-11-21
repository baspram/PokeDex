import React from 'react';
import {Link} from 'react-router';

export default class PokeItemContent extends React.Component {
	render(){
		return (
			<div className="col-md-4 poke-item">
				<Link to={"pokemon/"+this.props.name}> 
					<div className="poke-item-container">
						<div className="poke-item-image">
							<img src={this.props.imgSrc}>
							</img>
						</div>
						<h1> {this.props.name} </h1>
					</div>
				</Link>
			</div>
		)
	}
}