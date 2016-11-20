import React from 'react';
import {Link} from 'react-router';

export default class MainLayout extends React.Component {
	render(){

		// show back button to Home if not in home page
		var showBackButton = function(){
			if(this.props.location.pathname != "/"){
				return (
					<Link to="/" className="back-btn">
						<span className="glyphicon glyphicon-chevron-left"></span>
					</Link>
				)
			}
		}.bind(this);
		
		return (
			<div className="col-md-6 col-md-offset-3 main-layout">
				<header className="header">
						{showBackButton()}
						<h1> PokeDex </h1>	
				</header>
				<div className="component-container">
					<div className="">
						{this.props.children}
					</div>
				</div>
			</div>
		)
	}
}