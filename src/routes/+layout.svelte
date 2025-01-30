<script>
    import "tailwindcss/tailwind.css";
    import Header from '$lib/components/Header.svelte';
    import Footer from "$lib/components/Footer.svelte";
    /** @type {{children?: import('svelte').Snippet}} */
    let { children } = $props();
</script>

<Header />

<main class="prose p-5 dark:prose-invert w-full m-auto max-w-none">
    {@render children?.()}
</main>

<Footer />

<style lang=postcss>
    main {
        min-height: 80vh;
    }
    main :global(table) {
        margin: auto;
        @apply w-full;
    }
    @media screen(md) {
        main :global(table) {
            @apply max-w-fit;
        }
    }
</style>