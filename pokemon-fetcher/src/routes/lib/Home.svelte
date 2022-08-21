<script>
    let pokemon = "";
    let showPokemon = fetchPokemon();

    async function fetchPokemon(pokemon ="altaria"){
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        let { name, sprites } = await response.json();
        let artwork = sprites.other["official-artwork"]["front_default"];
        return { name, artwork};
    }

    function handleSubmit(){
        showPokemon = fetchPokemon(pokemon);
    }
</script>

<h1>Pokemon Fetcher</h1>
<form on:submit|preventDefault={handleSubmit}>
    <input type="text" bind:value={pokemon} >
</form>

{#await showPokemon}
    <p>fetching pokemon...</p>
{:then pokemon}
    <img src={pokemon.artwork} alt="{pokemon.name}">
{:catch error}
    <p>Invalid pokemon name {error}</p>


{/await}