<script>
	export let pokemon
	let promise
	$: promise = getPokemon(pokemon.url)
	
	async function getPokemon(url) {
		const res = await fetch(pokemon.url);
		return await res.json();
	}
</script>

<div>
  {#await promise}
    Chargement de {pokemon.name}…
  {:then pokemonDetails}
    <h2>{pokemonDetails.name}</h2>
    <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
  {:catch error}
    Une erreur s'est produite : {error.message}
  {/await}
</div>