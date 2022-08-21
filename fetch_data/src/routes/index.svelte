<script>
    //fetch image internet
    // const fetchImage = (async () => {
    //     const response = await fetch('https://dog.ceo/api/breeds/image/random')
    //     return await response.json()
    // })() 
let foo = ''
let bar = ''
let result = null

async function doPost(){
    const res= await fetch('https://httpbin.org/post', {
        method: 'POST',
        body: JSON.stringify({
            foo,bar
        })
    })
    foo = ''
    bar = ''
    const json = await res.json()
    result = JSON.stringify(json)
}
</script>
<h1>Latihan Post</h1>
<label for=""> Nama Depan</label>
<input type="text" bind:value={foo}>
<label for=""> Nama Belakang</label>
<input type="text" bind:value={bar}>
<button type="button" on:click={doPost}>Post Button</button>
<p>
    Result:
</p>
<pre>
    {result}
</pre>

<!-- fetch image -->
<!-- {#await fetchImage}
    <p>...waiting</p>
    {:then data}

 <img src={data.message} alt="Dog image">
 {:catch error}
 <p>An error occured!</p>
{/await} -->



