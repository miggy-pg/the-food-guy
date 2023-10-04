export default function Pizza({ pizzaObj }) {
  // So we can access the props using the attribute name in line 50. That is 'pizzaObj'. By using the keyword 'pizzaObj', we are able to access the data.
  return (
    <div className="food-menu-container container">
      <div className="food-menu-item">
        <div className={`food-img ${pizzaObj.soldOut ? "gray-img" : ""}`}>
          <img src={pizzaObj.photo} alt="{name}" />
        </div>
        <div className="food-description">
          <h2>{pizzaObj.name}</h2>
          <p className="food-price">
            {pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}
          </p>
          <p>{pizzaObj.menu_description}</p>
          <h4>
            <strong>Toppings:</strong>{" "}
            {pizzaObj.toppings.map((toppings) => `${toppings.name}, `)}
          </h4>
        </div>
      </div>
    </div>
  );
}
