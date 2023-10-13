import Header from "../components/Common/Header";
import Pizza from "../components/Common/Pizza";
import { getMenu } from "../services/apiRestaurant";
import { Link, useLoaderData } from "react-router-dom";
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
          <Link key={item.id} to={`/menu/${item.id}`}>
            <Pizza
              name={item.name}
              description={item.description}
              price={item.price}
              type="menu"
            />
          </Link>
        ))}
      </PizzaList>
    </>
  );
}

export async function loader() {
  const food = await getMenu();
  return food;
}
