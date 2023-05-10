<script lang="ts">
  import { onMount } from "svelte";
  import productsJson from "@data/products.json";
  import Fuse from "fuse.js";

  export let filterValue: string | null, filterType: string | null;

  let loading = true;

  let searchValue = "";

  $: filteredProducts = productsJson.contents.filter((product) => {
    if (filterValue && filterType) {
      if (filterType === "all") {
        return true;
      } else if (filterType === "category") {
        return product.category
          .toLowerCase()
          .includes(filterValue.toLowerCase());
      } else if (filterType === "sub-category") {
        return product.subCategory
          .toLowerCase()
          .includes(filterValue.toLowerCase());
      } else if (filterType === "industry") {
        return product.industry.includes(filterValue.toLowerCase());
      }
    }
    return true;
  });

  $: if (searchValue) {
    const fuse = new Fuse(filteredProducts, {
      keys: ["name", "summary", "category", "subCategory", "industry"],
    });

    filteredProducts = fuse.search(searchValue).map((entry) => entry.item);
  }

  onMount(() => {
    // Get search params from url
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get("key");
    if (searchParam) {
      searchValue = searchParam;
    }

    loading = false;
  });
</script>

{#if loading}
  <div>
    <div class="loader" />
    <p class="text-2xl text-center mt-8">Searching...</p>
  </div>
{/if}
<ul class={`flex flex-wrap ${loading ? "hidden" : ""}`}>
  {#each filteredProducts as product}
    <li class="p-2 flex w-1/2 md:w-1/3 lg:w-1/4">
      <figure class="group bg-gray-200">
        <div class="relative p-1">
          <a
            href="/products/{product.category}/{product.subCategory}/{product.slug}"
          >
            <img src={product.imageUrl} alt={product.name} />
          </a>
          <div
            class="h-[0.1rem] w-full bg-[#3B71A1] absolute top-0 duration-300 left-0 scale-x-0 group-hover:scale-x-100"
          />
        </div>

        <figcaption class="p-2">
          <header>
            <a
              class="block"
              href="/products/{product.category}/{product.subCategory}/{product.slug}"
            >
              <h2
                class="text-center font-bold text-[#3B71A1] text-lg md:text-xl lg:text-2xl"
              >
                {product.name}
              </h2>
            </a>
          </header>
          <p class="mt-4 text-center line-clamp-4 md:text-lg">
            {product.summary}
          </p>
        </figcaption>
      </figure>
    </li>
  {/each}
</ul>
