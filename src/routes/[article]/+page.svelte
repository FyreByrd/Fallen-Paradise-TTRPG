<script>
    import Post from '$lib/components/Post.svelte';
    /** @type {{data: any}} */
    let { data } = $props();
</script>

<Post {data} />
