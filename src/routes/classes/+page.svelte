<script>
    export let data;
</script>

<h1>Classes</h1>

<p>This will eventually contain information about the different player classes in the TTRPG.</p>

{#each data.classes as c}
    <p>{c.meta.title}</p>
{/each}