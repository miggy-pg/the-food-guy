import Header from "../components/Common/Header";
import { CategoryList } from "../components/Management/CategoryList";
import Pizza from "../components/Common/Pizza";
import { getMenu } from "../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";
export default function HomePage() {
  const food = useLoaderData();
  console.log("food: ", food);
  //   const pizzas = pizzaData;
  //   const numPizzas = pizzas.Vegetarian.length; // By checking the array length, we can determine if there are any pizzas

  return (
    <>
      <Header />
      <div>
        <CategoryList />
        <Pizza />
      </div>
    </>
  );
}

export async function loader() {
  const food = await getMenu();
  return food;
}
