import { getOrder } from "../../../services/apiRestaurant";
import SearchOrder from "./SearchOrder";

export default function Order(props) {
  return (
    <div>
      <SearchOrder />
      <p>
        We are open until {props.closeHour}:00. Come visit us or order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

export async function loader({ params }) {
  // useParams cannot be used here since it only works for components and not on regular function

  const order = await getOrder(params.orderId);
  return order;
}
