<script>
    import { browser } from '$app/environment';
    import { goto } from '$app/navigation';
    import { getAuth } from 'firebase/auth'
    /** @type {import('./$types').PageData}*/
    export let data;
    let app = data.context.app;
    let auth = getAuth(app);
    auth.onAuthStateChanged((user) => {
        if(user){

        } else {
            if(browser){
                goto('/signin')
            }
        }
    })
    function logOut() {
        auth.signOut()
    }
</script>

<button class="btn btn-outline-primary rounded-pill mt-2 ms-2" on:click={logOut}>Sign out</button>