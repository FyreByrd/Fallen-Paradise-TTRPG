<script>
    export let data;
</script>

<article>
    <h1>{data.title}</h1>
    <p>
        Created: {(new Date(data.created)).toLocaleDateString()}<br>
        Updated: {(new Date(data.modified)).toLocaleString()}
    </p>
    <hr>
    {#if data.flavor}
    <p><em>{data.flavor}</em></p>
    {/if}
    <svelte:component this={data.content} />
    <slot></slot>
    <hr>
    <p>
        Updated: {(new Date(data.modified)).toLocaleString()}
    </p>
</article>