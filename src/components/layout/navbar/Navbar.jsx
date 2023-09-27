import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className={"containerNavbar"}>
      <h4>EL Tambito</h4>
      <img  className="logo" src="https://scontent.fepa4-1.fna.fbcdn.net/v/t39.30808-6/302004326_531313052327753_3196753369039544404_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=5mrOMOM8nHIAX-fzRoQ&_nc_ht=scontent.fepa4-1.fna&oh=00_AfDlwysDal8Tt3jVSb23Me5Z8CNyPd1IEPEL3UO0ehCY-g&oe=651800FF" alt="el tamito" />
      <ul className="categories">
        <li>Ofertas</li>
        <li>Promocioness</li>
        <li>Fiambres</li>
        <li>Almacen</li>
        <li>Bebidas</li>
      </ul>
      <CartWidget />
    </div>
  );
};
