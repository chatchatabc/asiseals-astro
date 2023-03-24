<script lang="ts">
  import productsJson from "@data/products.json";

  export let filterValue: string, filterType: string;

  $: filteredProducts = productsJson.contents
    .sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    })
    .filter((product) => {
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
        return product.subCategory
          .toLowerCase()
          .includes(filterValue.toLowerCase());
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
