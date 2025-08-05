<script lang="ts">
  import Card from "$lib/components/Card.svelte";
  import Post from "$lib/components/Post.svelte";
  interface Props {
    data: {
      members: { meta: Record<string, unknown> }[];
    };
  }
  let { data }: Props = $props();
</script>

{#snippet types(school)}
<i><b>{school.meta.elements.join(' + ')}</b></i>
{/snippet}

<Post {data}>
  <h2>Natural Schools</h2>
  <p>
    Druids and Rangers are limited to these schools. I may also limit Clerics to
    these schools, but I haven't yet figured out how Clerics are supposed to
    work. The below diagram illustrates the relationships between the natural
    schools.
  </p>
  <img alt="A really cool diagram" src="/natural-schools.png" />
  <p>The schools, as well as sample capabilities are as follows.</p>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each data.members.filter((m) => m.meta.schoolType === "natural") as m}
      <Card item={m} extra={types} />
    {/each}
  </div>

  <h2>Class-Specific Schools</h2>
  <p>These schools are limited to specific classes.</p>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each data.members.filter((m) => m.meta.schoolType === "class") as m}
      <Card item={m} extra={types} />
    {/each}
  </div>

  <h2>Arcane Schools</h2>
  <p>
    These schools describe magic that is an unusual application or combination
    of magical energy.
  </p>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each data.members.filter((m) => m.meta.schoolType === "arcane") as m}
      <Card item={m} extra={types} />
    {/each}
  </div>
</Post>
