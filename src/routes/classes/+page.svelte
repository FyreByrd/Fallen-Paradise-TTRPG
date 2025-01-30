<script>
    import Card from '$lib/components/Card.svelte';
    import Post from '$lib/components/Post.svelte';
    /** @type {{data: any}} */
    let { data } = $props();
</script>

<Post {data}>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {#each data.members as m}
            <Card item={m} />
        {/each}
    </div>
</Post>
