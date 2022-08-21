<script>
    // import { onMount,onDestroy } from "svelte";
    import { fade, slide, scale } from "svelte/transition";
    import { flip } from "svelte/animate";
    import PollStore from "../store/pollStore";
    import DetailPoll from "./DetailPoll.svelte";
    // export let polls=[];
    // const unsub = PollStore.subscribe( data => {
    //     polls = data;
    //     console.log(data);
    // });
    
    // onDestroy(() => {
    //     console.log("onDestroy");
    //     unsub();
    // });
    
</script>

<div class="poll-list">
    {#each $PollStore as poll(poll.id)}
        <div class="card" in:fade out:scale|local animate:flip={{duration: 500}} > 
       <DetailPoll {poll} /> 

        </div>
        
    {/each}
</div>
<style>
    .poll-list{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }
</style>