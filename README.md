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

> Videos page has been temporarily removed temporarily and all the details has  been transferred to a temporary file `[Removed]videos.json`. 