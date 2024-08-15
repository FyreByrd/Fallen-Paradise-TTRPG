<script>
    export let data;
</script>

<article>
    <h1>{data.title}</h1>
    <p>Last Updated: {data.date}</p>
    <svelte:component this={data.content} />
</article>

{#each data.members as m}
    <div class="card bg-base-100 w-96 shadow-xl">
        <div class="card-body">
        <a href="{m.path}">
            <h2 class="card-title">{m.meta.title}</h2>
        </a>
        </div>
    </div>
{/each}