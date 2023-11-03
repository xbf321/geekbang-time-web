# 防极客时间站点

基于 Nuxt3 / Tailwindcss / Postgresql


## Setup

```bash
# npm
npm install

# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:7050`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.


## 定义 API

首先，在 server/api/ 目录新建 **product-chapters.get.ts**

```
export default defineEventHandler((event) => {
  const { chapters } = productChapters;
  return chapters.map((chapter) => {
    const { title, id } = chapter;
    return {
      title,
      id,
    };
  });
});

```
然后在 **页面** 或 **组件**中直接调用

```
<script setup>
  const { data } = await useFetch('/api/product-chapters');
</script>
```
