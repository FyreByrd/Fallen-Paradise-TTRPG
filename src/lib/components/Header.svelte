<script lang="ts">
    import { beforeNavigate } from "$app/navigation";
    let ccDrop: HTMLDetailsElement;

    beforeNavigate(() => {
        ccDrop.open = false;
    })
</script>

<header>
	<nav class="navbar bg-base-300">
        <div class="flex-1">
            <a href="/">Fallen Paradise TTRPG</a>
        </div>
        <div class="flex-none">
            <ul class="menu menu-horizontal px-1">
                <li>
                    <details bind:this={ccDrop}>
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
                    <a href="/about">About</a>
                </li>
            </ul>
        </div>
	</nav>
</header>