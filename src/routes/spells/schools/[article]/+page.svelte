<script>
    import Post from '$lib/components/Post.svelte';
    /** @type {{data: any}} */
    let { data } = $props();
</script>

<Post {data}>
    {#snippet prefix()}
    <i><b>Element(s)</b>: {data.rest.elements.join(' + ')}</i>
    {/snippet}
</Post>
