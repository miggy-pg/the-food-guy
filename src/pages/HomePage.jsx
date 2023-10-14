import Header from "../components/Common/Header";
import Pizza from "../components/Common/Pizza";
import { getMenu } from "../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";
import FoodCategory from "../components/Management/FoodCategoryList";
import PizzaList from "../components/Management/PizzaList";

export default function HomePage() {
  const categories = ["Breakfast", "Lunch", "Dinner"];
  const food = useLoaderData();

  return (
    <>
      <Header />
      <FoodCategory categories={categories} />
      <PizzaList>
        {food.map((item) => (
          <Pizza
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            type="menu"
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
