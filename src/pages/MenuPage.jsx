import Header from "../components/Common/Header";
import Pizza from "../components/Common/Pizza";
import { getMenu } from "../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";
import FoodCategory from "../components/Management/FoodCategoryList";
import PizzaList from "../components/Management/PizzaList";

export default function MenuPage() {
  const categories = ["Breakfast", "Lunch", "Dinner"];
  const food = useLoaderData();

  return (
    <div className="grid h-full w-full bg-section-background bg-center bg-repeat-y">
      <Header />
      <FoodCategory categories={categories} />
      <PizzaList>
        {food.map((item) => (
          <Pizza
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            description={item.description}
            price={item.price}
            type="menu"
          />
        ))}
      </PizzaList>
    </div>
  );
}

export async function loader() {
  const food = await getMenu();
  return food;
}
