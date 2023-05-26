# Front-end Project

![React](https://img.shields.io/badge/React-v.18-blue)
![Redux toolkit](https://img.shields.io/badge/RTK-v.1-purple)
![TypeScript](https://img.shields.io/badge/TypeScript-v.4-green)
![SASS](https://img.shields.io/badge/SASS-v.1-hotpink)
![MUI](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)

This project requires implementation of TypeScript and SASS.

## Requirement

1. Use the API endpoint [https://fakeapi.platzi.com/](https://fakeapi.platzi.com/) to create an e-commerce website. Read the documentation and learn how to use the different endpoints.
2. Create at lease 4 pages (can be more if you want): Home page, product page,
   profile page (only available if user logins), and cart page (cart could be a page or a modal)
3. Create Redux store for following features:
   - product reducer: get all products, find a single products, sort products by
     categories, sort products by price. Create, update and delete a product (enable update & delete features only for admin of the webapp. For example, you can check if user is your admin account before let them delete product)
   - user reducer: Register and Login
   - cart reducer: add product to cart, remove products, update products's quantity in cart
4. When adding routers to your application, programatically set certain routes to be private. For example, route to user profile page should not be accessible if user has not logged in.
5. Deploy the application and rewrite README file.

## Bonus

1. Use context API to switch theme
2. Implement unit testing for the reducers

## Instruction to start the project

In the project directory, you can run:

### `npm install`

Install all the dependencies

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Project Structure

```
📦
├─ .gitignore
├─ README.md
├─ package.json
├─ public
│  ├─ favicon.ico
│  ├─ images
│  │  ├─ camera.jpg
│  │  └─ camera.png
│  ├─ index.html
│  ├─ logo192.png
│  ├─ logo512.png
│  ├─ manifest.json
│  ├─ robots.txt
│  └─ svgs
│     ├─ Airbnb.svg
│     ├─ AliExpress.svg
│     ├─ Amazon.svg
│     ├─ Google.svg
│     ├─ PayPal.svg
│     ├─ bags-1999.svg
│     └─ quality.svg
├─ src
│  ├─ App.tsx
│  ├─ components
│  │  ├─ Benefits.tsx
│  │  ├─ Footer.tsx
│  │  ├─ Hero.tsx
│  │  ├─ Menus.tsx
│  │  ├─ Navbar.tsx
│  │  ├─ ProductCard.tsx
│  │  ├─ Slider.tsx
│  │  └─ Trusted.tsx
│  ├─ hooks
│  │  ├─ useAppDispatch.ts
│  │  ├─ useAppSelector.ts
│  │  └─ useDebounce.tsx
│  ├─ index.css
│  ├─ index.tsx
│  ├─ layout
│  │  ├─ AdminRoot.tsx
│  │  └─ Root.tsx
│  ├─ pages
│  │  ├─ Admin.tsx
│  │  ├─ Cart.tsx
│  │  ├─ CreateProduct.tsx
│  │  ├─ EditProduct.tsx
│  │  ├─ Favorite.tsx
│  │  ├─ Home.tsx
│  │  ├─ Login.tsx
│  │  ├─ NotFound.tsx
│  │  ├─ Product.tsx
│  │  ├─ Profile.tsx
│  │  ├─ Signup.tsx
│  │  └─ SingleProduct.tsx
│  ├─ react-app-env.d.ts
│  ├─ redux
│  │  ├─ reducers
│  │  │  ├─ cartReducers.ts
│  │  │  ├─ categoryReducers.ts
│  │  │  ├─ favoriteReducers.ts
│  │  │  ├─ productReducers.ts
│  │  │  └─ userReducer.ts
│  │  └─ store.ts
│  ├─ reportWebVitals.ts
│  ├─ setupTests.ts
│  ├─ styles
│  │  ├─ _account.scss
│  │  ├─ _admin.scss
│  │  ├─ _benefits.scss
│  │  ├─ _card.scss
│  │  ├─ _cart.scss
│  │  ├─ _footer.scss
│  │  ├─ _hero.scss
│  │  ├─ _product.scss
│  │  ├─ _singleproduct.scss
│  │  ├─ _trusted.scss
│  │  └─ index.scss
│  ├─ types
│  │  ├─ Products.ts
│  │  └─ User.ts
│  └─ utils
│     └─ fetch.ts
└─ tsconfig.json
```

## Live Project Link

[Click here](https://frontend-project-omega.vercel.app/)

## Getting Started

- Clone the repository from [Github](https://github.com/EbizimohAbodei/fs15_frontend-project)
- Install VS Code Live Server extension to run the project
