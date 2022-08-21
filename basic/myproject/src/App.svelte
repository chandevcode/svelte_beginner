<script>
  import Modal from "./Modal.svelte";
  import AddPersonForm from "./AddPersonForm.svelte";
  // let firstName = "Putu";
  // let lastName = "Chandra";
  // let favkelas = "2b";
  // let keterangan = [];
  let showModal = false;

  const toggleModal = () => {
    showModal = !showModal;
  };
  let people = [
    {
      name: "Diah Lestari",
      age: "21",
      kelas: "1",
    
      id: 1,
    },
    {
      name: "Desi Putra",
      age: "22",
      kelas: "2",
     
      id: 2,
    },
    {
      name: "Monika Desi",
      age: "20",
      kelas: "3",

      id: 3,
    },
  ];

  const handleClick = (id) => {
    //delete person from people
    people = people.filter((person) => person.id != id);
  };
  const addPerson = (e) => {
  
    const person = e.detail;
    people = [person, ...people];
    showModal = false;
  };
</script>

<Modal {showModal} on:click={toggleModal}>
  <AddPersonForm on:addPerson={addPerson} />
</Modal>

<main>
  <button on:click={toggleModal}>Add New People !</button>
 
  {#each people as person}
    <div>
      <h4>Name is {person.name}</h4>
      <p>{person.age} years old</p>
      <p>Kelas {person.kelas}, keterangan : {person.keterangan}</p>
      <button
        on:click={() => {
          handleClick(person.id);
        }}>delete</button
      >
    </div>
  {/each}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  /* h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	} */

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
