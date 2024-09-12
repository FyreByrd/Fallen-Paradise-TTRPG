<script>
    import "tailwindcss/tailwind.css";
    import Header from '$lib/components/Header.svelte';
    import Footer from "$lib/components/Footer.svelte";
    import { afterUpdate } from "svelte";
    import mermaid from "mermaid";

    mermaid.initialize({ 
        theme: 'neutral', 
        startOnLoad: false 
    });

    afterUpdate(async () => {
        const nodes = document.querySelectorAll("pre.language-mermaid");
        nodes.forEach((pre) => {
            pre.classList.replace("language-mermaid", "mermaid");
            pre.querySelectorAll("code.language-mermaid").forEach((code) => {
                code.querySelectorAll("span.token").forEach((s) => {
                    s.childNodes.forEach((c) => {
                        code.insertBefore(c, s);
                    })
                    code.removeChild(s);
                });
                pre.innerHTML = code.innerHTML;
            })
        });
        if (nodes.length) {
            try {
                await mermaid.run();
                nodes.forEach((n) => {
                    Array.from(n.getElementsByTagName("svg")).forEach((svg) => {
                        svg.removeAttribute("width");
                    });
                })
            }
            catch (e) {
                console.log(e);
            }
        }
    });
</script>

<Header />

<main class="prose p-5 dark:prose-invert w-full m-auto max-w-none">
    <slot />
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