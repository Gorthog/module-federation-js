import { mount as productMount } from "products/ProductsIndex";
import { mount as cartMount } from "cart/CartShow";

const productRoot = document.querySelector("#my-products");
productMount(productRoot);

const cartRoot = document.querySelector("#my-cart");
cartMount(cartRoot);

console.log("container");
