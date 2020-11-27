import HomeScreen from "./srceens/HomeScreen.js";
import productScreen from "./srceens/productScreen.js";
import { hideLoading, parseRequestUrl, showLoading } from "./utils.js";
import Error404Screen from "./srceens/Error404Screen.js";
import CartScreen from "./srceens/CartScreen.js";
import SigninScreen from "./srceens/SigninScreen.js";
import Header from "./components/Header.js"
import RegisterScreen from "./srceens/RegisterScreen.js";
import ProfileScreen from "./srceens/ProfileScreen.js";
import ShippingScreen from "./srceens/ShippingScreen.js";
import PaymentScreen from "./srceens/PaymentScreen.js";
import PlaceOrderScreen from "./srceens/PlaceOrderScreen.js";
import OrderScreen from "./srceens/OrderScreen.js";
const routes = {
    "/": HomeScreen,
    "/product/:id": productScreen,
    "/order/:id": OrderScreen,
    "/cart/:id": CartScreen,
    "/cart": CartScreen,
    "/signin": SigninScreen,
    "/register": RegisterScreen,
    "/profile": ProfileScreen,
    "/shipping": ShippingScreen,
    "/payment": PaymentScreen,
    "/placeorder": PlaceOrderScreen     
}
const router = async () =>{
    showLoading();
    const request = parseRequestUrl();
    const parseUrl = (request.resource ? `/${request.resource}`: '/') + (request.id ? '/:id' : '') +
    (request.verb ? `/${request.verb}`:'');
    const screen =  routes[parseUrl] ? routes[parseUrl] : Error404Screen;
    const header = document.getElementById('header-container');
    header.innerHTML = await Header.render();
    await Header.after_render();
    const main = document.getElementById("main-container");
    main.innerHTML = await screen.render(); 
    if(screen.after_render) await screen.after_render();
    hideLoading();
};
window.addEventListener("load", router);
window.addEventListener("hashchange", router);