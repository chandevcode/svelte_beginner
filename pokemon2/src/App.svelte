<script>
  import PokeList from "./PokeList.svelte";
  import PokeDetails from "./PokeDetails.svelte";

  const promise = getPokemons();
  let selectedPokemon = null;

  async function getPokemons() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
    const json = await res.json();

    return json.result;
  }

  const selectPokemon = ({ detail }) => {
    selectedPokemon = detail;
  };
</script>
<svelte:head>
	  <title>Pokédex</title>
</svelte:head>
<h1>Pokedex</h1>
<div>
	{#await promise}
  	Chargement du Pokédex...
	{:then pokemons}
		<PokeList pokemons={pokemons} on:selectPokemon={selectPokemon}  />
		{#if selectedPokemon}
			<PokeDetails pokemon={selectedPokemon} />
		{:else}
			Pokemon tidak ada
		{/if}
	{:catch error}
  	terdapat error : {error.message}
	{/await}
</div>
<style>
  h1 {
    text-align: center;
  }
  div {
    display: flex;
    text-align: center;
  }
</style>
