import Header from "../components/Common/Header";
import Pizza from "../components/Common/Pizza";
import { getMenu } from "../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";
import FoodCategory from "../components/Management/FoodCategoryList";
import PizzaList from "../components/Management/PizzaList";
export default function HomePage() {
  const categories = ["Breakfast", "Lunch", "Dinner"];
  const food = useLoaderData();
  console.log("food: ", food);
  //   const pizzas = pizzaData;
  //   const numPizzas = pizzas.Vegetarian.length; // By checking the array length, we can determine if there are any pizzas

  return (
    <>
      <Header />
      <FoodCategory categories={categories} />
      <PizzaList>
        {food.map((item) => (
          <Pizza
            key={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
          />
        ))}
      </PizzaList>
    </>
  );
}

export async function loader() {
  const food = await getMenu();
  return food;
}
