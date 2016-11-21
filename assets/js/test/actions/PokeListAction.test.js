import configureMockStore from 'redux-mock-store'
import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import expect from 'expect';
import nock from 'nock';
import {fetchPokemons, fetchMorePokemons} from '../../store/actions/PokeListAction';

const middlewares = [thunk, promise()];
const mockStore = configureMockStore(middlewares);

describe('<PokeListAction />', () => {
	
	afterEach(() => {
    nock.cleanAll()
  })

	it('FETCH_POKEMONS_COMPLETE when FETCH_POKEMONS done', () => {
	  
		nock('https://crossorigin.me/')
      .get('/http://pokeapi.co/api/v2/pokemon?limit=20')
      .reply(200, successResponse)

 		const expectedActions = [
 			{type: "FETCH_POKEMONS"},
 			{type: "FETCH_POKEMONS_COMPLETE", value: {
 					pokemons : successResponse.results,
 					count : successResponse.count,
 					nextUrl : successResponse.next 
 				}
 			}
 		];

 		const store = mockStore([]);

 		return store.dispatch(fetchPokemons(20)).then(() => {
 				expect(store.getActions()).toEqual(expectedActions);
 			})

	});

	it('FETCH_MORE_POKEMONS_COMPLETE done', () => {
	  
		nock('https://crossorigin.me/')
      .get('/http://pokeapi.co/api/v2/pokemon?limit=20&offset=20')
      .reply(200, successResponse)
successResponse
 		const expectedActions = [
 			{type: "FETCH_MORE_POKEMONS_COMPLETE", value: {
 					pokemons : successResponse.results,
 					nextUrl : successResponse.next 
 				}
 			}
 		];

 		const store = mockStore([]);

 		return store.dispatch(fetchMorePokemons('http://pokeapi.co/api/v2/pokemon?limit=20&offset=20')).then(() => {
 				expect(store.getActions()).toEqual(expectedActions);
 			})

	});

});

const successResponse = {"count":811,"previous":null,"results":[{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/1\/","name":"bulbasaur"},{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/2\/","name":"ivysaur"},{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/3\/","name":"venusaur"},{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/4\/","name":"charmander"},{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/5\/","name":"charmeleon"},{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/6\/","name":"charizard"},{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/7\/","name":"squirtle"},{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/8\/","name":"wartortle"},{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/9\/","name":"blastoise"},{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/10\/","name":"caterpie"},{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/11\/","name":"metapod"},{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/12\/","name":"butterfree"},{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/13\/","name":"weedle"},{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/14\/","name":"kakuna"},{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/15\/","name":"beedrill"},{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/16\/","name":"pidgey"},{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/17\/","name":"pidgeotto"},{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/18\/","name":"pidgeot"},{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/19\/","name":"rattata"},{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/20\/","name":"raticate"}],"next":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/?limit=20&offset=20"}