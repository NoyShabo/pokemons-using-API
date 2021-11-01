window.onload = init;
var gPokemons = [];

function init() {
    connectToPkemonsServer('https://pokeapi.co/api/v2/pokemon', getPokimonsDetails);
}

function getPokimonsDetails(pokemons) {
    pokemons.results.map(pokemon => {
        connectToPkemonsServer(pokemon.url, pokemonInside => {
            const currPok = ` <div>
                                <h3>${pokemon.name}</h3>
                                <h5>weight:${pokemonInside.weight} </h5>
                                <img src="${pokemonInside.sprites.other.home.front_default}" alt="${pokemon.name}">
                            </div>`;
            gPokemons.push(currPok);
            if (gPokemons.length === pokemons.results.length) renderPokemons();
        });
    })
}


function renderPokemons() {
    document.querySelector('.pokemonsList').innerHTML = gPokemons.join('');
}