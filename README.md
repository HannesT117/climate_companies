# Climate Companies

## Getting Started

First, add a `.env` file with the following key. `api-host` is a placeholder, so don't forget to adjust it.

```txt
CLIMATE_API=<api-host>/api/v1
```

To get a production build, run the following:

```bash
yarn
yarn build
yarn start
```

To start the development server, use

```bash
yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Setup

- Setup with `create-next-app`.
- [_Chakra_](https://chakra-ui.com/): Easy to use (and accessible) component library which can be extended with an own theme. Could be abstracted in an ui package (which is not quite the case right now).
- [_NextJS_](https://nextjs.org/): Since the data is completely static, the current app could be generated statically. NextJS also provides the possibility to build only some pages at first so that the build process doesn't take several hours. Also, mixing the current apporach with server-side / clident-side rendered pages (for example for personalization) is still achievable very easily.

## Architecture

### Structure

Since this is a very basic app, there is not much to it for the time being. Currently, there are three important folders for now:

- _ui_: UI components which can be used in our app. Ideally, this would be the only place we have to define styling.
- _pages_: The actual pages (and api) of the app. This is convention of NextJS.
- _lib_: This folders contains code regarding the business logic. When writing code which can only be used on server or client (for example when utilizing `window`, `next/router`, `node/fs`, or database related things), you could thing about adding dedicated folders for `/server` and `/client`.

### State Handling

For now, there's no specific state handling in place (other than using the `ChakraProvider`). Since the pages are static, this is not yet necessary. For smaller / medium sized apps, using react's context in different modules of the app / in `_app.tsx` for global state should be sufficient.

### Components

Since Chakra already provides basic components, implementing our own library using atomic design wouldn't make too much sense. Instead, focusing on writing molecules and organisms (to stay in the naming) which can be reused on several occasions. Since there's no design master yet and it's therefore hard to tell which parts of the app can be grouped / split into components, iterating over the component structure could be necessary. The same holds true for spacing which isn't unified currently. Adding tokens (for example using multiples of 8px) could help keeping the UI consice.

## Caveats API

- Missing pagination: All companies are potentially fetched quite often
- Missing detail view: To display the information about one company, all companies have to be fetched

## Known Issues

- Due to the API, it takes a long time to render a new page. While the first few pages (both overview and detail) are generated statically, the later ones are built incrementally. If the system were like this in production, another approach would be better (e.g. building more pages statically, showing a loading animation, adding a bff which polls data from the API).
- The current display of company logos could violate their CI.
- Since all API fields are currently defined, the typing assumes that this will stay that way.
- Security Headers are missing and should be added in an own `next.config.js`.
- Testing libraries are added but not in use.
