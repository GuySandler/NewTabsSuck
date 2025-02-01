<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

{@render children()}

<style>
    :root {
        box-sizing:border-box;
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-style: normal;
    }
</style>