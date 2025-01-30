<script>
    /** @type {{data: any, children?: import('svelte').Snippet}} */
    let { data, children } = $props();
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
    <data.content />
    {@render children?.()}
    <hr>
    <p>
        Updated: {(new Date(data.modified)).toLocaleString()}
    </p>
</article>