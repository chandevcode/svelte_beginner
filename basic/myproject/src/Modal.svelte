<script>
  export let showModal = false;
  export let isPromo = true;
</script>

{#if showModal}
  <div class="backdrop" class:promo={isPromo} on:click|self>
    <div class="modal">
     <slot></slot>
    </div>
  </div>
{/if}

<style>
  .backdrop {
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(0, 0, 0, 0.7);
  }
  .modal {
    text-align: center;
    padding: 10px;
    max-width: 400px;
    margin: 10% auto;
    background: white;
    border-radius: 20px;
  }
  .promo .modal {
    background: white;
    
    font-weight: bold;
    color: black;
  }
</style>
