# Climate Companies

## Getting Started

First, add a `.env` file with the following key: "CLIMATE_API=\<ApiHost\>/api/v1"

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
- _Chakra_: Easy to use (and accessible) component library which can be extended with an own theme. Could be abstracted in an ui package (which is not quite the case right now).
- _NextJS_: Since the data is completely static, the current app could be generated statically. NextJS also provides the possibility to build only some pages at first so that the build process doesn't take several hours. Also, mixing the current apporach with server-side / clident-side rendered pages (for example for personalization) is still achievable very easily.

## Caveats API

- Missing pagination: All companies are potentially fetched quite often
- Missing detail view: To display the information about one company, all companies have to be fetched

## Known Issues

- Due to the API, it takes a long time to render a new page. While the first few pages (both overview and detail) are generated statically, the later are built incrementally. If the system were this slow in production, another approach would be better (e.g. building more pages statically, showing a loading animation, adding a bff which polls data from the API).
- The current display of company logos could violate their CI.
- Since all API fields are currently defined, the typing assumes that this will stay that way.
- Security Headers are missing and should be added in an own `next.config.js`.
- Testing libraries are added but not in use.
