<script lang="ts">
  import { onMount } from "svelte";
  import productsJson from "@data/products.json";
  import { utilSlugToText } from "src/helpers/commonUtils";

  export let filterValue: string | null, filterType: string | null;

  let searchValue = "";

  $: filteredProducts = productsJson.contents
    .filter((product) => {
      if (searchValue === "") {
        return true;
      } else if (searchValue) {
        return (
          product.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          product.summary.toLowerCase().includes(searchValue.toLowerCase()) ||
          utilSlugToText(product.category).includes(
            searchValue.toLowerCase()
          ) ||
          utilSlugToText(product.subCategory).includes(
            searchValue.toLowerCase()
          ) ||
          product.industry
            .map((entry) => utilSlugToText(entry))
            .includes(searchValue.toLowerCase())
        );
      }

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
    })
    .sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });

  onMount(() => {
    // Get search params from url
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get("key");
    if (searchParam) {
      searchValue = searchParam;
    }
  });
</script>

<ul class="grid grid-cols-4">
  {#each filteredProducts as product}
    <li class="p-2">
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
              <h3 class="text-center text-2xl font-bold text-[#3B71A1]">
                {product.name}
              </h3>
            </a>
          </header>
          <p class="mt-4 text-xl text-center">{product.summary}</p>
        </figcaption>
      </figure>
    </li>
  {/each}
</ul>
