import { getUserInfo } from "../localStorage";

const Header = {
    render: ()=>{
        const {name} = getUserInfo();
        return`
        <div class="brand">
            <a href="/">Electro</a>
        </div>
        <div>
            ${ name ? `<a href="/#/profile">${name}</a>` : `<a href="/#/signin">sign-in</a>`}
            
            <a href="/#/cart">Cart</a>
        </div>;
        ` 
    },
    after_render: () =>{

    }
}
export default Header;