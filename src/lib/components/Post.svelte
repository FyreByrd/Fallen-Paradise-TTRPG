<script>
    export let data;
</script>

<article>
    <h1>{data.title}</h1>
    <p>Created: {data.created}<br>Last Updated: {data.modified}</p>
    <hr>
    <svelte:component this={data.content} />
    <slot></slot>
    <p>Last Updated: {data.modified}</p>
</article>