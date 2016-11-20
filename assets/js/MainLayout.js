import React from 'react';


export default class MainLayout extends React.Component {
	render(){
		return (
			<div>
				<header className="header">
					<div className="container">
						<h1> PokeDex </h1>
					</div>
				</header>
				<div className="component-container">
					<div className="container">
						{this.props.children}
					</div>
				</div>
			</div>
		)
	}
}