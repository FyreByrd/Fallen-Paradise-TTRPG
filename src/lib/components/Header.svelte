<script lang="ts">
    import { beforeNavigate } from "$app/navigation";

    beforeNavigate(() => {
        Array.from(
            document.getElementById("menus")!
                .getElementsByTagName("details")
            ).forEach((d: HTMLDetailsElement) => d.open = false);
    })

    const routes = [
        {
            title: "Rules",
            root: "/rules",
            children: [
                {
                    title: "Overview",
                    route: "/index"
                },
                {
                    title: "Character Stats",
                    route: "/stats"
                }
            ]
        },
        {
            title: "Character Creation",
            root: "",
            children: [
                {
                    title: "Ancestries",
                    route: "/ancestries"
                },
                {
                    title: "Classes",
                    route: "/classes"
                }
            ]
        },
        {
            title: "Setting",
            root: "/setting",
            children: [
                {
                    title: "Overview",
                    route: "/index"
                },
                {
                    title: "The Elements",
                    route: "/elements"
                }
            ]
        },
        {
            title: "About",
            route: "/about"
        }
    ];
</script>

<header>
	<nav class="navbar bg-base-300">
        <div class="lg:hidden">
            <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                <ul
                    tabindex="0"
                    class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                    {#each routes as opt}
                    <li>
                        {#if opt.children}
                        <details name="menu">
                            <summary>{opt.title}</summary>
                            <ul class="p-2">
                                {#each opt.children as child}
                                <li>
                                    <a href={opt.root + child.route}>{child.title}</a>
                                </li>
                                {/each}
                            </ul>
                        </details>
                        {:else}
                        <a href={opt.route}>{opt.title}</a>
                        {/if}
                    </li>
                    {/each}
                </ul>
            </div>
            <a href="/">Fallen Paradise TTRPG</a>
        </div>
        <div class="hidden lg:contents">
            <div class="flex-1">
                <a href="/">Fallen Paradise TTRPG</a>
            </div>
            <div class="flex-none" id="menus">
                <ul class="menu menu-horizontal px-1">
                    {#each routes as opt}
                    <li>
                        {#if opt.children}
                        <details name="menu">
                            <summary>{opt.title}</summary>
                            <ul class="bg-base-200 rounded-t-none p-2">
                                {#each opt.children as child}
                                <li>
                                    <a href={opt.root + child.route}>{child.title}</a>
                                </li>
                                {/each}
                            </ul>
                        </details>
                        {:else}
                        <a href={opt.route}>{opt.title}</a>
                        {/if}
                    </li>
                    {/each}
                </ul>
            </div>
        </div>
	</nav>
</header>