<script>
    import "../app.css"
</script>
<nav>
    <a href="/">Home</a>
    <a href="/about">About</a>

</nav>
<slot />
<style>
     nav{
        display: flex;
        gap: 2rem;
        padding: 2rem;
    }
</style>