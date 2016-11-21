# PokeDex
A React Redux Project using [pokeapi.co](www.pokeapi.co) to browse Pokemons. CORS is bypassed with [cors.io](cors.io). Infinite scroll implemented using (react infinite scroll component)(https://www.npmjs.com/package/react-infinite-scroll-component).
> there's still glitch for infinite scroll when there is no new pokemon loaded

### Installation
You can run this project locally
1. Clone or Download this repository
2. Assuming you already have node and npm installed, install this project dependencies:
	```sh
	$ npm install
	```
3. If all dependencies installed without error, run this command
	```sh
	$ npm run start
	```
4. You should be able to see this application [localhost:8080](http://localhost:8080)

### Unit Testing
Unit testing is done by [Enzyme](https://github.com/airbnb/enzyme) and [Mocha](https://www.npmjs.com/package/mocha) for Shallow Rendering and [redux-mock-store](https://github.com/arnaudbenard/redux-mock-store) to test Redux part of this project.

Assuming you already install this project, run this command:
```sh
$ npm run test
```

License
----

ISC