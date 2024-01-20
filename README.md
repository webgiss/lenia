This is a [Next.js](https://nextjs.org/) project template to be bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This project is a template for a Next.js project with the following features:
- javascript (not typescript)
- [React](https://reactjs.org/) as the main framework
- [Redux](https://redux.js.org/) / [Redux Toolkit](https://redux-toolkit.js.org/) as the state manager
- [Semantic UI React](https://react.semantic-ui.com/) as the UI framework
- Static generation of pages, with SPA
- Can then evolve to dynamic generation and multiple pages by fully using Next.js features
- Hygen templates to create new slices and components

## Getting Started

Run the following command to create a new project with this Starter:

```
yarn create next-app [project-name] -e https://github.com/gissehel/next-react-redux-js-spa-static-semantic-ui
# or
npx create-next-app [project-name] -e https://github.com/gissehel/next-react-redux-js-spa-static-semantic-ui
# or 
pnpx create-next-app [project-name] -e https://github.com/gissehel/next-react-redux-js-spa-static-semantic-ui
# or
bun create next-app [project-name] -e https://github.com/gissehel/next-react-redux-js-spa-static-semantic-ui
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Dev

### Create a new slice (redux)

```
[yarn|npm run|pnpm|bun] hygen slice new [--name slice-name]
```

Creates a new slice in `src/app/slices/` with the following files:

- `src/app/slices/[slice-name]/index.js` : The entry point for all slice related exports
- `src/app/slices/[slice-name]/slice.js` : The slice itself
- `src/app/slices/[slice-name]/selectors.js` : The selectors
- `src/app/slices/[slice-name]/thunks.js` : The thunks (async actions)

### Create a new component

```
[yarn|npm run|pnpm|bun] hygen comp new [--name component-name]
```

Creates a new component in `src/app/components/` with the following files:

- `src/app/components/[component-name]/index.js` : The entry point for all component related exports
- `src/app/components/[component-name]/[component-name]Component.js` : The pur component itself (stateless component, no redux)
- `src/app/components/[component-name]/[component-name]Container.js` : The container (component connected to redux)
- `src/app/components/[component-name]/[component-name].module.css` : The component styles

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
