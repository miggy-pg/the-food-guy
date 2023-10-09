import { getOrder } from "../../../services/apiRestaurant";
import Button from "../Button/Button";
import SearchOrder from "./SearchOrder";

export default function Order() {
  return (
    <div>
      <SearchOrder />
      <Button type="primary">Order</Button>
    </div>
  );
}

export async function loader({ params }) {
  // useParams cannot be used here since it only works for components and not on regular function

  const order = await getOrder(params.orderId);
  return order;
}
