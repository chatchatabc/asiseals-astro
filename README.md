# **[Asiseals Website](https://asiseals.pages.dev)**

Welcome to this project repository of Asiseals! Here lies the documentation and definitions that you'll need to understand the project development.

# **Table of Contents**

- [**Asiseals Website**](#asiseals-website)
- [**Table of Contents**](#table-of-contents)
- [**Tech Stack**](#tech-stack)
  - [**Main**](#main)
  - [**Other**](#other)
  - [**Content Management**](#content-management)
  - [**Optimization**](#optimization)
  - [**SEO Technologies**](#seo-technologies)
  - [**Testing**](#testing)
- [**🚀 Project Directories**](#-project-directories)
  - [**Directory Definitions**](#directory-definitions)
- [📦 **Content Management**](#-content-management)
  - [**Product List**](#product-list)
  - [**Product Information**](#product-information)
  - [**Product Categories**](#product-categories)
  - [**FAQs**](#faqs)
  - [**News**](#news)
  - [**Company History**](#company-history)
- [**SEO Configuration**](#seo-configuration)
  - [**Things to look out for**](#things-to-look-out-for)
  - [**Default Values**](#default-values)
  - [**Page properties of other pages**](#page-properties-of-other-pages)
  - [**Sitemap and Web Crawler**](#sitemap-and-web-crawler)
- [**Web / Project Benchmark**](#web--project-benchmark)
  - [**Configurations**](#configurations)
    - [**Device Type**](#device-type)
- [🧞 **Commands**](#-commands)
- [👀 Want to learn more?](#-want-to-learn-more)

# **Tech Stack**

The project utilizes various technologies that would make the development process much easier and faster to developed! These technologies are deemed to be important in order to achieve the goals and best results for this website.

## **Main**

- Astro: https://docs.astro.build/en/getting-started/
- TailwindCSS: https://docs.astro.build/en/guides/integrations-guide/tailwind/ | https://tailwindcss.com/docs/installation
- Svelte: https://docs.astro.build/en/guides/integrations-guide/svelte/ | https://svelte.dev/docs

## **Other**

- FuseJS: https://fusejs.io/
- SwiperJS: https://swiperjs.com/swiper-api

## **Content Management**

- Astro Content Collections: https://docs.astro.build/en/guides/content-collections/
- MDX: https://docs.astro.build/en/guides/integrations-guide/mdx/ | https://mdxjs.com/docs/
- Zod: https://zod.dev/

## **Optimization**

- Astro-compress: https://github.com/astro-community/astro-compress#readme
- Astro-imagetools: https://github.com/RafidMuhymin/astro-imagetools#readme

## **SEO Technologies**

- Astro-robots-txt: https://github.com/alextim/astro-lib/tree/main/packages/astro-robots-txt#readme
- Sitemap: https://docs.astro.build/en/guides/integrations-guide/sitemap/

## **Testing**

- Unlighthouse: https://unlighthouse.dev/

# **🚀 Project Directories**

The development project consists a lot of files in order to make the whole website. Each files are been stored appropriately in different directories, so that it would be easily understand the purpose of the file based on the directories name. Therefore, understanding the directory names would make it easier to browse through in this project.

```
/
├── data/
|   └── ...
├── public/
|   ├── files/
|   |   └── ...
|   └── images/
|       └── ...
├── src/
|   ├── components/
|   |   └── ...
|   ├── content/
|   |   └── ...
|   ├── helpers/
|   |   └── ...
|   ├── layouts/
|   |   └── ...
|   ├── pages/
|   |   └── ...
|   └── styles/
|       └── ...
└── ...
```

## **Directory Definitions**

- data/
  - This directory holds all JSON data that are useful to store information for the website.
- public/
  - This directory holds all files, images, etc. that are accessible to the public or to the users of the website.
- src/
  - This directory holds all files that are related to the development of the website, such as the components, html documents, css styles, etc.
- src/components/
  - This directory holds all of the specialized or reusable components that are being used to develop the website.
- src/content/
  - This directory holds all of markdown files that are being used to store robust information for the website.
- src/helpers/
  - This directory holds all of the helper functions that are useful in making the project.
- src/layouts/
  - This directory holds all of the layout files and is responsible for consistent layout of the web page.
- src/pages/
  - This directory holds all of the website pages and is also responsible for the url paths for each content of the website.
- src/styles/
  - This directory holds all files that are related to the styling of the website.

# 📦 **Content Management**

This section will show how would you be able to add or manage the contents of the website.

## **Product List**

If you want to add a product to the product list, just [open](./data/products.json) `./data/products.json` and add an entry in the `contents` array.

```json
// ./data/products.json
{
  "contents": [
    {
      "name": "Type 202",
      "pageDescription": null,
      "pageTitle": "Pump Seals Elastomer Bellows Seal Type 202",
      "pageKeywords": null,
      "summary": "Lorem Ipsum",
      "imageUrl": "/images/products/type-202.webp",
      "slug": "type-202",
      "category": "pump-seals",
      "subCategory": "elastomer-bellow-seals",
      "images": [
        {
          "name": "Type 202",
          "url": "/images/products/type-202.webp"
        },
        {
          "name": "Type 202",
          "url": "/images/products/type-202-1.webp"
        }
      ],
      "industry": []
    }
    // And so on ...
  ]
}
```

> **(IMPORTANT!)**
>
> Make sure that the `slug` property in the data entry should be unique, so that there would be no overlapping in other product web pages.

## **Product Information**

After adding the product in the product list, the product's page will be generated, but it still lack some information. So, in order to add some information about the product, go to the `/src/content/product-information` [directory](./src/content/product-information/) and create a directory and named it based from the product's slug.

> **(IMPORTANT!)**
>
> `details.md` or `details.mdx` are reserved for the product details information, so if you want to add the details of the product, you should name the markdown file as `details`. Aside from `details` file, any other files will be used in another section of the product's details.

## **Product Categories**

`pageTitle`, `pageDescription` and `pageKeywords` (the first 3 properties) is being used by the `products page` for it's own SEO. `contents` on the other hand is where the rest of the individual products are listed with their own properties include `pageTitle`, `pageDescription` and `pageKeywords`.

```
{
  "pageTitle": "Products | Advantage Seal",
  "pageDescription": "Products - Quality seals by Advantage Seal",
  "pageKeywords": "Products, Advantage Seal, Item Catalogue",
  "contents":[...]
}
```

> Product categories are not listed on this file for their respective properties. Go to `product-categories.json` to edit them as each category has their own respective page and properties before displaying respective items to the users.

## **FAQs**

If you want to add more questions for the FAQs page, you can go to `./src/content/faqs/` [directory](./src/content/faqs/) and just make another markdown file with a formatter of `name` and `order`.

- `name`: The question itself (ex. What is life?).
- `order`: The order of showing the question in the webpage. (ex. 1)

## **News**

If you want to add more news to the website, you can go to `./src/content/news/` [directory](./src/content/news/) and make another markdown file with a formatter of `name`, `type`, `imageUrl`, `summary`, `author`, `date`, `origin`, `pageTitle`, `pageDescription`, and `pageKeywords`.

- `name`: Title of the news (ex. Best Products).
- `type`: Type of the news (ex. blogs).
- `imageUrl`: Path/URL of the image banner (ex. /images/news/1.jpg).
- `summary`: A brief summary for the news (ex. Lorem Ipsum).
- `author`: Name of the author (ex. Juan Dela Cruz).
- `date`: Date when the post is published (ex. 2023-05-08).
- `origin`: Where the news originated (ex. site)
- `pageTitle`: Page title of the news website.
- `pageDescription`: Page description of the news website.
- `pageKeywords`: Page keywords of the news website.

## **Company History**

If you want to add more company histories to the website, you can [open](./data/company-history.json) `./data/company-history.json` and add more entry in the `contents` property. The entry is structured like an `object` data, and have three properties called `name`, `image`, and `summary`.

```json
// ./data/company-history.json
{
  "contents": [
    {
      "name": "Test",
      "image": "/images/company-history/1.jpg",
      "summary": "Lorem Ipsum"
    }
    // And so on ...
  ]
}
```

# **SEO Configuration**

Need some filling up some of the details as some of the products are too technical or some of them don't have details that I could use as basis for SEO.

## **Things to look out for**

We are mainly going to look for 3 specific things on most of the files we're going to be working on

```
...
"pageTitle": "Products | Advantage Seal"
"pageDescription": "Products - Quality seals by Advantage Seal",
"pageKeywords": "Products, Advantage Seal, Item Catalogue",
...

```

1. Page Title - A string of text that is visible to the user on their browser tab. Generally should what's the user's current page.
2. Page Description - A string of text but only visible to the search engine. A short description of the current page is all about.
3. Page Keywords - A string of multiple texts separated by a comma only visible to web crawlers. Keywords of the content on the page. Don't put too much.

## **Default Values**

When `pageTitle`, `pageDescription` and `pageKeywords` are left as `null` it's going to use the default properties set on `site-info.json` still within the data folder.

```
{
  "title": "Advantage Seal | The Seal of Quality",
  "description": "Quality seals by Advantage Seal",
  "keywords": "Advantage Seal",
  "author": "ChatChatABC Philippines Inc."
}
```

> site-info.json is being used as a default for not only for the products and each individual items but for the entire project. Mindful with the edits.

## **Page properties of other pages**

Pages such as `About us` or `Company History` also have `pageTitle`, `pageDescription` and `pageKeywords` properties. Here are the names of the files you can edit:

`Default Values` is the reference file that is going to be used as default for each property that has not been set

```
1. site-info.json
```

`whitelist` List of files per page basis :

```
1. about-us.json
2. brochures.json
3. case-studies.json
4. contacts.json
5. cross-reference-chart.json
6. downloads.json
7. factory-tour.json
8. faqs.json
9. industries.json
```

`blacklist` List of files that does not contain mentioned properties

```
1. footer.json
2. headquarters.json
3. navbar.json
```

> Videos page has been temporarily removed temporarily and all the details has been transferred to a temporary file `[Removed]videos.json`.

## **Rich Preview/Link Preview**

> `Rich Preview/Link Preview` is for when users share a page link to direct/private messages in messaging apps it would preview a small snippet. Refer samples in `linkPreview` folder on what it would look like.

lookout for `ogTitle`, `ogImage` and `ogDescription` in each of the pages page-properties(the same activity like in SEO) to modify them. The default property-values are set in `site-info.json`

## **Sitemap and Web Crawler**

The `sitemap.xml` and `robots.txt` are both automatically generated during build time. The only thing you should be concerned about is the build configuration that is found in `./astro.config.mjs` [file](./astro.config.mjs).

You need to make sure that the value of the `site` object property is set to the website's url, if not then the generated `sitemap.xml` and `robots.txt` will be incorrect.

```ts
export default defineConfig({
  site: "https://asiseal.com",
  // ... other configs
});
```

# **Web / Project Benchmark**

If you need to test out the project's overall benchmark, you can run `npm run lh` to start the Unlighthouse to test your website with Google's Lighthouse system.

## **Configurations**

Before executing `npm run lh` in your project's terminal, you should first need to check the configurations saved in `./unlighthouse.config.ts` [file](./unlighthouse.config.ts). Make sure that the value of the `site` object property should be the project website's domain url.

```ts
// ... imports
export default defineConfig({
  site: "asiseal.com", // can also be https://asiseal.com
  // ... other configs
});
```

### **Device Type**

You can also change what kind of device will be used during the benchmarking, you can only choose between `mobile` or `desktop`.

```ts
// ... imports
export default defineConfig({
  scanner: {
    device: "desktop",
  },
  // ... other configs
});
```

# 🧞 **Commands**

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |
| `npm run lh`           | Run Unlighthouse to benchmark the project        |

# 👀 Want to learn more?

Feel free to contact [BoJoNVi](https://github.com/BoJoNVi) or [IceCloud12](https://github.com/icecloud12) if you have any questions and clarifications about this project.
