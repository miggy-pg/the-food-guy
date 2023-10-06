import Header from "../components/Common/Header";
import { CategoryList } from "../components/Management/CategoryList";
import Pizza from "../components/Common/Pizza";
export default function HomePage() {
  //   const pizzas = pizzaData;
  //   const numPizzas = pizzas.Vegetarian.length; // By checking the array length, we can determine if there are any pizzas

  return (
    <div>
      <div>
        <div>
          <Header />
          <div>
            <CategoryList />
            <div>
              <Pizza />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
