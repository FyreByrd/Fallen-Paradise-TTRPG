<script>
    import "tailwindcss/tailwind.css";
    import Header from '$lib/components/Header.svelte';
    import Footer from "$lib/components/Footer.svelte";
</script>

<Header />

<main class="prose p-5 dark:prose-invert">
    <slot />
</main>

<Footer />