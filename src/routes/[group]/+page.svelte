<script>
    export let data;
</script>

<article>
    <h1>{data.title}</h1>
    <p>Last Updated: {data.date}</p>
    <svelte:component this={data.content} />
</article>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each data.members as m}
        <div class="bg-base-100 shadow-xl p-10">
            <a href="{m.path}">
                <h2>{m.meta.title}</h2>
            </a>
        </div>
    {/each}
</div>