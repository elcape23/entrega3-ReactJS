import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {items.map((item) => (
        <Item
          id={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default ItemList;
