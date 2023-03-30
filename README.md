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
