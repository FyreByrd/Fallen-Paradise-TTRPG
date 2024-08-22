<script lang="ts">
    import { beforeNavigate } from "$app/navigation";

    beforeNavigate(() => {
        Array.from(
            document.getElementById("menus")!
                .getElementsByTagName("details")
            ).forEach((d: HTMLDetailsElement) => d.open = false);
    })
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
                    <li>
                        <details name="menu">
                            <summary>Rules</summary>
                            <ul class="p-2">
                                <li>
                                    <a href="/rules/stats">Character Stats</a>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details name="menu">
                            <summary>Character Creation</summary>
                            <ul class="p-2">
                                <li>
                                    <a href="/classes">Classes</a>
                                </li>
                                <li>
                                    <a href="/ancestries">Ancestries</a>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details name="menu">
                            <summary>Setting</summary>
                            <ul class="p-2">
                                <li>
                                    <a href="/setting/elements">The Elements</a>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
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
                    <li>
                        <details name="menu">
                            <summary>Rules</summary>
                            <ul class="bg-base-200 rounded-t-none p-2">
                                <li>
                                    <a href="/rules/stats">Character Stats</a>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details name="menu">
                            <summary>Character Creation</summary>
                            <ul class="bg-base-200 rounded-t-none p-2">
                                <li>
                                    <a href="/classes">Classes</a>
                                </li>
                                <li>
                                    <a href="/ancestries">Ancestries</a>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details name="menu">
                            <summary>Setting</summary>
                            <ul class="bg-base-200 rounded-t-none p-2">
                                <li>
                                    <a href="/setting/elements">The Elements</a>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                </ul>
            </div>
        </div>
	</nav>
</header>