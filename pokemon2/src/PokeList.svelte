<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	
	export let pokemons = []
	
	const handlePokemonClick = (pokemon) => {
		dispatch('selectPokemon', pokemon)
	}
</script>

<ul>
	{#each pokemons as pokemon}
	<li>
		<button on:click="{() => handlePokemonClick(pokemon)}" >
			{pokemon.name}
		</button>
	</li>
	{/each}
</ul>