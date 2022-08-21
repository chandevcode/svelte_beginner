<script>
  import ListPoll from "./components/ListPoll.svelte";
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import Tabs from "./shared/Tabs.svelte";
  import CreateFormPoll from "./components/CreateFormPoll.svelte";

  //tabs
  let items = ["Current Polls", "Add new Poll"];
  let activeItem = "Current Polls";
  const tabChange = (e) => {
    activeItem = e.detail;
  };
  //polls

  const handleAdd = (e) => {
    activeItem = "Current Polls";
  };
</script>

<main class="container mx-auto py-auto px-5 ">
  <Header />
  <Tabs {activeItem} {items} on:tabChange={tabChange} />
  {#if activeItem === "Current Polls"}
    <ListPoll />
  {:else if activeItem === "Add new Poll"}
    <CreateFormPoll on:add={handleAdd} />
  {/if}
  <Footer />
</main>

<style>
</style>
