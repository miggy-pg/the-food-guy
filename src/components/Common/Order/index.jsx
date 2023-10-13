// import { getOrder } from "../../../services/apiRestaurant";
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
