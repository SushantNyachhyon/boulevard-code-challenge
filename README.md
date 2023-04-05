# Boulevard Code Challenge

![reactjs](https://img.shields.io/badge/Reactjs-282C34?style=for-the-badge&logo=react)&nbsp;![typescript](https://img.shields.io/badge/Typescript-282C34?style=for-the-badge&logo=typescript)
Using Unsplash API, displays the Images as per the user query.

# Contents

* [Global Requisites](#global-requisites)
* [Install, Configure & Run](#install-configure--run)

### Global Requirement

* node (>= 19.0.0)
* typescript (>= 4.9.4)

### Install, Configure & Run

```bash
# Clone the repo.
git clone https://github.com/SushantNyachhyon/boulevard-code-challenge.git

# cd into the cloned project folder.
cd boulevard-code-challenge;

# Install NPM dependencies.
# using npm
npm install
# or using pnpm
pnpm install

# Edit your DotEnv file.
# copy the example Env file.
cp .env.example .env
# replace VITE_UNSPLASH_ACCESS_KEY and VITE_UNSPLASH_SECRET_KEY
# with your application key generated from Unsplash
# follow the guides at https://unsplash.com/documentation#public-actions

# Run the app
npm run dev;
# or using pnpm
pnpm run dev
```

### Available Scripts
```bash
# run the dev server
# using npm
npm run dev
# or using pnpm
pnpm run dev
```
```bash
# build the application
# using npm
npm run build
# or using pnpm
pnpm run build
```
```bash
# run unit test
# using npm
npm run test
# or using pnpm
pnpm run test
```
