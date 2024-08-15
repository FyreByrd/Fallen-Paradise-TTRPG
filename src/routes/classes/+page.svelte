<script>
    export let data;
</script>

<h1>Classes</h1>

<p>This will eventually contain information about the different player classes in the TTRPG.</p>

{#each data.classes as c}
    <div class="card bg-base-100 w-96 shadow-xl">
        <div class="card-body">
        <a href="{c.path}">
            <h2 class="card-title">{c.meta.title}</h2>
        </a>
        </div>
    </div>
{/each}