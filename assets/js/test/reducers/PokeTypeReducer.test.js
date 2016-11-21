import expect from 'expect';
import PokeTypeReducer from '../../store/reducers/PokeTypeReducer';


describe('<PokeTypeReducer />', () => {
	it('return initial state', () => {
		expect(
			PokeTypeReducer(undefined, {})
		).toEqual({
			types : [], 
			fetching : false, 
			fetched : false, 
			error : false 
		})
	})

	it('fetching type', () => {
		expect(
			PokeTypeReducer(undefined, {
				type: "FETCH_TYPE"
			})
		).toEqual({
			types : [], 
			fetching : true, 
			fetched : false, 
			error : false 
		})
	})

	it('type fetched', () => {
		expect(
			PokeTypeReducer(undefined, {
				type: "FETCH_TYPE_COMPLETE",
				value: typesSuccessResponse.results
			})
		).toEqual({
			types : typesSuccessResponse.results, 
			fetching : false, 
			fetched : true, 
			error : false 
		})
	})


});

const typesSuccessResponse = {"count":20,"previous":null,"results":[{"url":"http:\/\/pokeapi.co\/api\/v2\/type\/1\/","name":"normal"},{"url":"http:\/\/pokeapi.co\/api\/v2\/type\/2\/","name":"fighting"},{"url":"http:\/\/pokeapi.co\/api\/v2\/type\/3\/","name":"flying"},{"url":"http:\/\/pokeapi.co\/api\/v2\/type\/4\/","name":"poison"},{"url":"http:\/\/pokeapi.co\/api\/v2\/type\/5\/","name":"ground"},{"url":"http:\/\/pokeapi.co\/api\/v2\/type\/6\/","name":"rock"},{"url":"http:\/\/pokeapi.co\/api\/v2\/type\/7\/","name":"bug"},{"url":"http:\/\/pokeapi.co\/api\/v2\/type\/8\/","name":"ghost"},{"url":"http:\/\/pokeapi.co\/api\/v2\/type\/9\/","name":"steel"},{"url":"http:\/\/pokeapi.co\/api\/v2\/type\/10\/","name":"fire"},{"url":"http:\/\/pokeapi.co\/api\/v2\/type\/11\/","name":"water"},{"url":"http:\/\/pokeapi.co\/api\/v2\/type\/12\/","name":"grass"},{"url":"http:\/\/pokeapi.co\/api\/v2\/type\/13\/","name":"electric"},{"url":"http:\/\/pokeapi.co\/api\/v2\/type\/14\/","name":"psychic"},{"url":"http:\/\/pokeapi.co\/api\/v2\/type\/15\/","name":"ice"},{"url":"http:\/\/pokeapi.co\/api\/v2\/type\/16\/","name":"dragon"},{"url":"http:\/\/pokeapi.co\/api\/v2\/type\/17\/","name":"dark"},{"url":"http:\/\/pokeapi.co\/api\/v2\/type\/18\/","name":"fairy"},{"url":"http:\/\/pokeapi.co\/api\/v2\/type\/10001\/","name":"unknown"},{"url":"http:\/\/pokeapi.co\/api\/v2\/type\/10002\/","name":"shadow"}],"next":null}