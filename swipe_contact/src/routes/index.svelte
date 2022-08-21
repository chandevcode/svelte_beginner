<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import { contacts } from '$lib/contacts';
	import { spring } from 'svelte/motion';
	import { mySlide } from '$lib/mySlide';
	import { slide } from 'svelte/transition';
	import { itrash, isave } from '$lib/Hicons';
	import SvgIcons from '$lib/SvgIcons.svelte';

	let coords = spring({ x: 0, y: 0 }, { stiffness: 0.05, damping: 0.5 });
	let selected;
	let current;
	let contacts_array=[];
	let w;
	
	onMount(() => {
		 contacts_array = contacts
	});
	
	function handleSlideStart() {
		coords.stiffness = coords.damping = 1; 
	}

	function handleSlideMove(event) {
		coords.update($coords => ({
			x: $coords.x + event.detail.dx,
			y: $coords.y + event.detail.dy
		}));
	}

	function handleSlideEnd(event) {
		coords.stiffness = 0.05;
		coords.damping = 0.5;
		coords.set({ x: 0, y: 0 });
	}
	
	function deleteContact(id){
		coords.set({ x: 0, y: 0 },{hard:true});
		contacts_array = contacts_array.filter(item => item.id !== Number(id));	
	}
	
	$: side = ($coords.x >= (w/2)*1) ? "left" : "right";
	$: side === 'left'? deleteContact(current) : '';
	//$: console.log(w)
	
</script>
	<h1 style="text-align: center;">
		Contacts
	</h1>
	{#each contacts_array as contact, index (contact)}
	<div class="list-item" out:slide="{{duration:500}}">
		<SvgIcons d={itrash} side="left"/>
		<SvgIcons d={isave} side="right"/>
		<div class="contact" 
				 bind:offsetWidth = {w}
				 use:mySlide
				 on:slidestart={()=>{selected=index; current=contact.id; handleSlideStart; }}
				 on:slidemove={handleSlideMove}
				 on:slideend={handleSlideEnd}
				 style="transform: translate3d({selected===index?$coords.x:0}px, 0, 0)">
			<img src={contact.imageUrl} alt={index}>			
			<div>
				<div class="name">
					{contact.name}
				</div>
				<div class="mail">
					{contact.mail}
				</div>
			</div>
		</div>
	</div>
	{/each}
<div class="help">
	<img src="https://t4.ftcdn.net/jpg/02/89/36/35/360_F_289363539_VdTXcZrbaLv9wjgFFg84UiFEWOBBqWyC.jpg" alt="">
	<div>
		swipe an item to delete
	</div>
</div>

<style>
	:global(body){
		 overflow-x: hidden;
	}
	.list-item {
		position: relative;
		display:flex;
		background: linear-gradient(90deg, rgba(249,7,7,1) 23%, rgba(0,255,59,1) 100%);
		width:100%;
		height:70px;
		margin:0.25rem;
		user-select: none;
		pointer-events: auto;
	}
	
	.contact {
		position:absolute;
		cursor: -webkit-grab;
		display:flex;
		align-items: center;
		width:100%;
		height:100%;
		background-color: #e2e8f0;
	}
	.contact:active {
		cursor:grabbing;
	}
	.contact > * {
    pointer-events: none;
  }

	img {
		display:block;
		width: 3rem;
		height: 3rem;
		border-radius: 100%;
		object-fit: cover;
		margin: 0.5rem;
	}
	.name {
		font-weight: 700;
	}
	.mail {
		color: #718096;
	}
	.help {
		margin: 3rem auto;
	}

</style>