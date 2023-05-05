# Asiseals Website

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

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

## 👀 Want to learn more?

Feel free to contact [BoJoNVi](https://github.com/BoJoNVi) (me) through DingTalk or visit me at the workplace to have a thorough discussion about this project.

## Known Bugs

There's a bug in [inquiry.astro file](./src/pages/products/%5Bcategory%5D/%5BsubCategory%5D/%5Bproduct%5D/inquire.astro) during build time of Astro (`npm run build` || `astro build`). The cause of this bug is that the pathname in build time is not the same as the pathname during `npm run dev` or `astro dev`. Sample of this problem:

```js
// npm run build
console.log(pathname); // "/products/.../inquire/inquire"

// npm run dev
console.log(pathname); // "/products/.../inquire"
```

## SEO

Need some filling up some of the details as some of the products are too technical.

On 'products.json file'

the first three lines are for the page itself. The ones seen within "contents" are for each individual product.

```
"pageTitle": "Products | Advantage Seal"
"pageDescription": "Products - Quality seals by Advantage Seal",
"pageKeywords": "Products, Advantage Seal, Item Catalogue",
```

"pageTitle" is just a string of text. Note that this is visible to the user on their Tab Menu. <br/>
"pageDescription" a string of text. Short(preferably) description of: (1) what the page is about or (2) what the page wants to convey. [Search engine visible only]<br/>
"pageKeywords" a string of short texts separated by a comma for each item. Short words that would describe the content. Don't put too much [search engine visibility only]<br/>

<hr/>
The rest of the files inside the data folder also has these properties. Check if it is in to your liking especially the pageTitle since it's visible to the user. SEO is marketing effort, maybe ask marketing team for approval.

```note
some files are excluded:
  1. footer.json
  2. nav-bar.json
  3. removedVideoResourceTemp.json (video page has been temporarily removed since it would decrease it's relevance if search engine sees this blank)
special mention:
  1. site-info.json (these would be the default values for the SEO tags pages that would require them is currently set blank)
```
