export default function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.Vegetarian.length; // By checking the array length, we can determine if there are any pizzas

  return (
    <>
      {/* We have the option to do it this way, passing the props in each attribute. However, we will try to pass the entire props in an object */}
      {/* {pizzaData.Vegetarian.map((pizza) => (
        <Pizza
          name={pizza.name}
          photo={pizza.photo}
          menu_description={pizza.menu_description}
          price={pizza.price}
          toppings={pizza.toppings.map((toppings) => `${toppings.name}, `)}
        />
      ))} */}

      {/* We will pass the props as an object using the `map` array function */}
      {numPizzas > 0 ? ( // We are conditionally rendering the pizzas using ternary operator, else we should not render it. The condition follows: if numPizzas greater than 0, run/display first value 'pizzaData.Vegetarian.map...' else run/display 'We're still working on...'
        pizzaData.Vegetarian.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} /> // Since we are passing the pizza object, we should access the pizza in the Pizza component via attribute name 'pizzaObj'
        ))
      ) : (
        <p>We are still working on our menu. Please come back later.</p>
      )}
    </>
  );
}
