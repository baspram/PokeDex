import React from 'react';
import {connect} from 'react-redux';
import {fetchType} from '../store/actions/PokeTypeAction';

import PokeFilterModal from './PokeFilterModal';

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
    this.props.dispatch(fetchType());    
  }
  changeFilter(typeName){
    this.props.handleChangeFilter(typeName);
    this.toggleFilter();
  }
  toggleFilter(){
    if(this.props.fetched){
      var show = !this.state.showFilter;
      this.setState({
        showFilter: show
      });
    }
  }
  render() {
    // var types = this.props.types;
    var toggleIcon = function(){
      if(this.props.fetched){
        if(this.state.showFilter){
          return (<span className="glyphicon glyphicon-triangle-top"></span>)
        }
        return (<span className="glyphicon glyphicon-triangle-bottom"></span>)  
      }
    }.bind(this);
    var showFilterModal = function(){
      if(this.state.showFilter && this.props.fetched){
        return (
          <PokeFilterModal 
            types = {this.props.types} 
            handleChangeFilter = {this.changeFilter.bind(this)}/>
        )
      }
    }.bind(this);
    return (
      <div className="filter"  onClick={this.toggleFilter.bind(this)}>
        <h1> {this.props.filter} Pokemons  </h1>
        {toggleIcon()}
        {showFilterModal()}
      </div>
    )
  }
}