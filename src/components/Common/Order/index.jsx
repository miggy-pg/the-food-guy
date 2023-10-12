import { getOrder } from "../../../services/apiRestaurant";
import Button from "../Button/Button";
import SearchOrder from "./SearchOrder";

export default function Order() {
  return (
    <>
      <SearchOrder />
      <Button type="primary">Search</Button>
    </>
  );
}

export async function loader({ params }) {
  // useParams cannot be used here since it only works for components and not on regular function
  console.log("params: ", params);
  const order = await getOrder(params.orderId);
  console.log(order);
  return order;
}
