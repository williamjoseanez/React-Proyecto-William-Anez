import ItemList from "./ItemList";

const ItemListContainer = (saludo) => {
  
  return (
    <div>
      <h2 className="center"> Hola, traigo las props {saludo.saludo}</h2>
    
      <ItemList />
      </div>);
};

export default ItemListContainer;
