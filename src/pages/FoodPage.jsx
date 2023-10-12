import { useLoaderData } from "react-router-dom";
import Button from "../components/Common/Button/Button";
import Container from "../components/Common/Container";
import { getOrder } from "../services/apiRestaurant";

export default function FoodPage() {
  console.log(useLoaderData());

  return (
    <Container>
      <div className="grid w-full "></div>
      <div className="w-full bg-red-500">
        {/* <Pizza
          name={"Test"}
          description={"Test"}
          price={140}
          className={"mx-auto w-4/5"}
          type="cart"
        /> */}
      </div>
      <div className="mt-4 w-full ">
        <h3 className="mt-3 max-w-2xl text-3xl font-bold leading-snug tracking-tight text-gray-800 dark:text-white lg:text-4xl lg:leading-tight">
          <Button type="primary">Checkout</Button>
        </h3>
      </div>
    </Container>
  );
}

export async function loader({ params }) {
  // useParams cannot be used here since it only works for components and not on regular function
  const order = await getOrder(params.orderId);
  return order;
}
