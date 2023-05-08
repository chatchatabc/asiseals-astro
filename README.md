# [Asiseals Website](https://asiseals.pages.dev)

Welcome to this project repository of Asiseals! Here lies the documentation and definitions that you'll need to understand the project development.

## **Table of Contents**

- [Tech Stack](#tech-stack)
- [Project Structure](#🚀-project-structure)
- [Commands](#🧞-commands)
- [SEO](#seo)

## **Tech Stack**

The project utilizes various technologies that would make the development process much easier and faster to developed! These technologies are deemed to be important in order to achieve the goals and best results for this website.

### Main

- Astro: https://docs.astro.build/en/getting-started/
- TailwindCSS: https://docs.astro.build/en/guides/integrations-guide/tailwind/ | https://tailwindcss.com/docs/installation
- Svelte: https://docs.astro.build/en/guides/integrations-guide/svelte/ | https://svelte.dev/docs

### Other

- FuseJS: https://fusejs.io/
- SwiperJS: https://swiperjs.com/swiper-api

### Content Management

- Astro Content Collections: https://docs.astro.build/en/guides/content-collections/
- MDX: https://docs.astro.build/en/guides/integrations-guide/mdx/ | https://mdxjs.com/docs/
- Zod: https://zod.dev/

### Optimization

- Astro-compress: https://github.com/astro-community/astro-compress#readme
- Astro-imagetools: https://github.com/RafidMuhymin/astro-imagetools#readme

### SEO

- Astro-robots-txt: https://github.com/alextim/astro-lib/tree/main/packages/astro-robots-txt#readme
- Sitemap: https://docs.astro.build/en/guides/integrations-guide/sitemap/

## **🚀 Project Directories**

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

### Directory Definitions

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

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

## SEO

Need some filling up some of the details as some of the products are too technical or some of them don't have details that I could use as basis for SEO.

### Things to look out for

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

### Products

The products page details and the list of all the items are contained inside `products.json`. File is found at :

```
[Project Folder]
├──...
├── data/
|   └─ products.json
└── ...
```

#### File Structure

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

#### Default Values

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

<hr/>

### Page properties of other pages

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

## 👀 Want to learn more?

Feel free to contact [BoJoNVi](https://github.com/BoJoNVi) or [IceCloud12](https://github.com/icecloud12) if you have any questions and clarifications about this project.
