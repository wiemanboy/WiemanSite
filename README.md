# Personal Website

This is my personal website, built with [SvelteKit](https://kit.svelte.dev/).

## Development

### Setup

First install the dependencies:

```bash
npm i
```

Then rou are ready to start the development server:

```bash
npm run dev
```

### Formatting

This project uses [Prettier](https://prettier.io/) and [Eslint](https://eslint.org/) for code formatting. You
can `npm run format` and `npm run lint` to format and lint the code.

It is recommended to configure your editor to run these commands on save.
For webstorm, you can configure this in `Settings > Tools > Actions on save`.

## Project structure

```markdown
├── locales `Locales json for i18n`  
│─┬ src  
│ ├── components `Reusable components`  
│ ├─┬ lib `Used for easy access with $lib/`  
│ │ ├── network `Network related code (like fetching data)`  
│ │ ├── data `Repository pattern for accessing and manipulating data`  
│ │ ├── dtos  
│ │ ├── enums  
│ │ └── types.ts `Shared types for DI`  
│ ├── params `Parameter matching for use with slugs in routes`  
│ └── routes `Pages and layouts`  
├── .env.example  
├── prettier.config.js  
├── .eslint.config.ts  
├── inversify.config.ts `Used for DI bindings`  
├── playwright.config.ts  
├── svelte.config.js  
├── tailwind.config.ts `Color definitions`  
├── tsconfig.json  
└── vite.config.ts
```

---

### Environment variables

Environment variables are defined in a `.env` file. You can find an example in `.env.example`.

---

### Components

Reusable components are stored in the `components` directory.

#### HtmlAttributes

To allow for type completion when using HTML attributes on custom components the following pattern can be used:

```sveltehtml

<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";

	interface $$Props extends HTMLAttributes<HTMLDivElement> {
		customProp1: string;
		customProp2: number;
	}

	export let customProp1: $$Props["customProp1"];
	export let customProp2: $$Props["customProp2"];
</script>

<div {...$$restProps} {customProp1} {customProp2}>
	<slot />
</div>
```

Here we extend `HTMLAttributes<HTMLDivElement>` on the `$$Props` to tell our component that it can accept
HtmlAttributes, any custom props will also need to be defined in the `$$Props` interface.  
(NOTE: The eslint config includes an exception to the no-var-unused rule, so $$Props doesn't need to be used in the
script.)

---

### Styling

This project uses [Tailwind CSS](https://tailwindcss.com/) for styling. You can find the configuration
in `tailwind.config.js`, this is where all the colors are defined. If custom styles are needed I recommend using scss
instead of css.

#### Dark mode

To enable dark mode for a component use the matching `*-themed` class defined in `app.scss`.

---

### Locales

This project uses [svelte-i18n](https://www.npmjs.com/package/svelte-i18n) for internationalization. You can find the
locales in the `locales` directory.

#### Usage

To use a translation in a component simply import the `t` function from `svelte-i18n` and use it like this:

```sveltehtml

<script lang="ts">
	import { t } from "svelte-i18n";

	const tBase = "page.something."
</script>

<div>{$t(tBase + "key")}</div>
```

Here the `tBase` variable is used to define a base path for the translations. This is useful for keeping translation
keys short and readable.

---

### Dependency injection

This project makes use of dependency injection with the help of [InversifyJS](https://www.npmjs.com/package/inversify).

#### Binding

Before we can use a service we need to bind it to a type in the `inversify.config.ts` file.

First define a type in the `types.ts` file:

```ts
const types = {
	classType: Symbol.for("ClassType"),
};
```

Then bind the type to an implementation in the `inversify.config.ts` file:

```ts
container.bind(types.classType).to(ClassImplementation);
```

#### Usage

```ts
const class = container.get<Class>(types.classType);
```

---

### Data fetching

For interacting with API data the application uses a repository pattern. This is to allow for easy mocking of data in
tests. Repositories are defined in the `lib/data` directory and use the aforementioned DI.

#### Structure

When creating a new repository, it should extend the `BaseRepository` class and implement an interface:

```ts
interface ExampleRepository {
	getExample(): Promise<ExampleDto>;
}
```

It is recommended to use a DTO (Data Transfer Object) for the data returned from the API. A standard implementation of
the repository would look like this:

```ts
class FetchExampleRepository extends BaseRepository implements ExampleRepository {
	async getExample(): Promise<ExampleDto> {
		const result = await this.fetcher.get<ExampleDto>("/example");
		return result.json();
	}
}
```

Here the BaseRepository provides a `fetcher` property that can be used to make network requests.  
After the repository is created, it should be bound and used like described in the [DI section](#dependency-injection).

---

### Icons

This project uses [unplugin icons](https://github.com/unplugin/unplugin-icons) for getting different icons. Unplugin
icons uses [Iconify](https://iconify.design/) for getting the icons. If you need to find a specific icon look in
the [icon sets](https://icon-sets.iconify.design/).

---

## Testing

This project uses [vitest](https://vitest.dev/) for unit testing and [Playwright](https://playwright.dev/) for
end-to-end testing. You can run the tests with `npm run test`, Or use `npm run test:unit` and `npm run test:integration`
to run the tests separately. Vitest supports coverage reports, to generate a coverage report
use `npm run test:coverage`. Coverage reports will be placed in `test-results/coverage`.

Tests are located in the tests folder, when creating a new test file it should have the same directory structure in
tests as the file you are testing in src. All test files should end with `.test.ts` and integration tests (using
Playwright) should end with `.integration.test.ts`.

## Building

To create a production version of the app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.
