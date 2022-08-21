<script>
  import { createEventDispatcher } from "svelte";
  let dispatch = createEventDispatcher(); 
  let keterangan = [];
  let age;
  let name;
  let kelas;

  
  const handleSubmit = () => {
    const person ={
      name,
      age,
      kelas,
      keterangan,
      id : Date.now()
    }
    dispatch('addPerson', person);
  };
</script>

<form on:submit|preventDefault={handleSubmit}>
  <h3>Tambah Absensi Siswa</h3>
  <input type="text" placeholder="Name" bind:value={name} />
  <label
    >Kelas :
    <select bind:value={kelas}>
      <option value="2A">1</option>
      <option value="2B">2</option>
      <option value="3C">3</option>
     
    </select>
  </label>
  <input type="text" placeholder="Kelas" bind:value={kelas} />
  <input type="number" placeholder="Age" bind:value={age} />
  <h5>Kehadiran</h5>
  <input type="checkbox" bind:group={keterangan} value="Absen" /> Absen <br />
  <input type="checkbox" bind:group={keterangan} value="Sakit" /> Sakit <br />
  <input type="checkbox" bind:group={keterangan} value="Ijin" /> Ijin <br />
  <button>Add Person </button>
</form>

<style></style>
