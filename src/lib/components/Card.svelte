<script>
    export let item;
</script>


<div class="bg-base-100 shadow-xl p-10 item">
    <a href="{item.path}">
        <h2>{item.meta.title}</h2>
    </a>
    {#if item.meta.flavor}
    <p>
        <em class="excerpt">{item.meta.flavor.slice(0, 100)}</em>
        <em class="full hidden">{item.meta.flavor}</em>
    </p>
    {/if}
</div>

<style>
    .item:hover .excerpt {
        display: none;
    }
    .item:hover .full {
        display: inline;
    }
</style>