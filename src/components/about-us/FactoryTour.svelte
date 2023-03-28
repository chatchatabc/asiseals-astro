<script lang="ts">
  import factoryTourJson from "@data/factory-tour.json";

  let selected: string | null = null;

  $: console.log(selected);

  $: filteredList = factoryTourJson.contents.filter((item) => {
    if (selected === null) {
      return true;
    } else if (selected) {
      return item.type === selected;
    }
  });

  function handleSelect(value: string) {
    if (selected === value) {
      selected = null;
    } else {
      selected = value;
    }
  }
</script>

<section class="max-w-7xl mx-auto px-4 lg:px-8">
  <header class="flex justify-center py-8 space-x-2 md:space-x-8">
    <button
      on:click={() => handleSelect("test-center")}
      class={`py-2 text-lg ${
        selected !== "test-center"
          ? "bg-primary text-onPrimary"
          : "bg-white border border-primary text-primary"
      } px-4 lg:px-8`}
    >
      Test Center &gt;
    </button>
    <button
      on:click={() => handleSelect("production-equipment")}
      class={`py-2 text-lg ${
        selected !== "production-equipment"
          ? "bg-primary text-onPrimary"
          : "bg-white border border-primary text-primary"
      } px-4 lg:px-8`}
    >
      Production Equipments &gt;
    </button>
  </header>

  <section class="pb-16">
    <ul class="flex flex-wrap">
      {#each filteredList as factory (factory.imageUrl)}
        <li class="p-2 w-1/2 md:w-1/3 lg:w-1/4">
          <figure class="relative">
            <div>
              <img src={factory.imageUrl} alt={factory.name} />
            </div>
            <figcaption
              class="absolute bg-black bg-opacity-30 text-onPrimary py-2 text-xl text-center w-full bottom-0"
            >
              <p>{factory.name}</p>
            </figcaption>
          </figure>
        </li>
      {/each}
    </ul>
  </section>
</section>
