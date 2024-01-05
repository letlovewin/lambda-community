<script>
    let redirect = function(/** @type {string} */ l) {
        location.href = l;
    }
</script>

<svelte:head>
    <title>Lambda</title>
</svelte:head>

<div class="container vh-100 d-flex justify-content-center align-items-center" style="width:100%;height:100%;">
    <div class="container">
        <div class="container align-items-center text-center p-2 my-auto">
            <img src={'icon.png'} alt="Greek letter lambda in pink" style="width:200px;height:200px;"/>
            <h1>Lambda</h1>
            <p>Social media geared toward local queer communities</p>
            <div class="row">
                <div class="col"><button class="btn btn-lg btn-primary rounded-pill" on:click={() => redirect("/signup")}>Create a new account</button></div>
            </div>
            <br/>
            <div class="row">
                <div class="col"><button class="btn btn-lg btn-secondary rounded-pill" on:click={() => redirect("/signin")}>Sign in</button></div>
            </div>
        </div>
    </div>
</div>
    

