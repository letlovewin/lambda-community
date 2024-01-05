<script>
    import "./global.css"
    import { onMount } from 'svelte';

    onMount(() => {
        // Add the data-bs-theme attribute to the body element
        document.body.setAttribute('data-bs-theme', 'dark');
    });
</script>

<slot></slot>