import expect from 'expect';
import PokeListReducer from '../../store/reducers/PokeListReducer';


describe('<PokeListReducer />', () => {
	it('return initial state', () => {
		expect(
			PokeListReducer(undefined, {})
		).toEqual({
			count: "", 
			pokemons : [],
			nextUrl: "", 
			fetching : false, 
			fetched : false, 
			error : false 
		})
	})

	it('fetching pokemons data for list', () => {
		expect(
			PokeListReducer(undefined, {
				type: "FETCH_POKEMONS"
			})
		).toEqual({
			count: "", 
			pokemons : [],
			nextUrl: "", 
			fetching : true, 
			fetched : false, 
			error : false 
		})
	})

	it('pokemons data fetched', () => {
		expect(
			PokeListReducer(undefined, {
				type: "FETCH_POKEMONS_COMPLETE",
				value: {
					pokemons: successResponse.results, 
					count: successResponse.count,
					nextUrl: successResponse.next
				}
			})
		).toEqual({
			pokemons: successResponse.results, 
			count: successResponse.count,
			nextUrl: successResponse.next,
			fetching : false, 
			fetched : true, 
			error : false 
		})
	})

	it('more pokemons data fetched', () => {
		expect(
			PokeListReducer({
				pokemons: successResponse.results, 
				count: successResponse.count,
				nextUrl: successResponse.next,
				fetching : false, 
				fetched : true, 
				error : false 
			}, {
					type: "FETCH_MORE_POKEMONS_COMPLETE",
					value: {
						pokemons: moreSuccessResponse.results, 
						nextUrl: moreSuccessResponse.next
					}
			})
		).toEqual({
			pokemons: successResponse.results.concat(moreSuccessResponse.results), 
			count: successResponse.count,
			nextUrl: moreSuccessResponse.next,
			fetching : false, 
			fetched : true, 
			error : false 
		})
	})

});

const successResponse = {"count":811,"previous":null,"results":[{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/1\/","name":"bulbasaur"},{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/2\/","name":"ivysaur"},{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/3\/","name":"venusaur"},{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/4\/","name":"charmander"},{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/5\/","name":"charmeleon"},{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/6\/","name":"charizard"},{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/7\/","name":"squirtle"},{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/8\/","name":"wartortle"},{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/9\/","name":"blastoise"},{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/10\/","name":"caterpie"},{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/11\/","name":"metapod"},{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/12\/","name":"butterfree"},{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/13\/","name":"weedle"},{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/14\/","name":"kakuna"},{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/15\/","name":"beedrill"},{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/16\/","name":"pidgey"},{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/17\/","name":"pidgeotto"},{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/18\/","name":"pidgeot"},{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/19\/","name":"rattata"},{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/20\/","name":"raticate"}],"next":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/?limit=20&offset=20"}
const moreSuccessResponse = {"count":811,"previous":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/?limit=20","results":[{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/21\/","name":"spearow"},{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/22\/","name":"fearow"},{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/23\/","name":"ekans"},{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/24\/","name":"arbok"},{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/25\/","name":"pikachu"},{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/26\/","name":"raichu"},{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/27\/","name":"sandshrew"},{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/28\/","name":"sandslash"},{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/29\/","name":"nidoran-f"},{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/30\/","name":"nidorina"},{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/31\/","name":"nidoqueen"},{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/32\/","name":"nidoran-m"},{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/33\/","name":"nidorino"},{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/34\/","name":"nidoking"},{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/35\/","name":"clefairy"},{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/36\/","name":"clefable"},{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/37\/","name":"vulpix"},{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/38\/","name":"ninetales"},{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/39\/","name":"jigglypuff"},{"url":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/40\/","name":"wigglytuff"}],"next":"http:\/\/pokeapi.co\/api\/v2\/pokemon\/?limit=20&offset=40"}