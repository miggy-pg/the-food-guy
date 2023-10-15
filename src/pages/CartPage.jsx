import Container from "../components/Common/Container";
import Pizza from "../components/Common/Pizza";
import Button from "../components/Common/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "../redux/cart/cartSlice";
import EmptyCart from "../components/Common/Cart/EmptyCart";
import { redirect } from "react-router-dom";
import store from "../redux/store";
import { createOrder } from "../services/apiRestaurant";

export default function CartPage() {
  const carts = useSelector(getCart);
  const dispatch = useDispatch();

  if (!carts.length) return <EmptyCart />;

  return (
    <Container>
      <div className="grid w-full ">
        <div className="mt-3 flex grid-cols-4 items-center justify-center gap-24 bg-green-500 drop-shadow-sm">
          <h2></h2>
          <h2>Unit Price</h2>
          <h2>Quantity</h2>
          <h2>Total Price</h2>
          <h2>Actions</h2>
        </div>
      </div>
      <div className="w-full bg-red-500">
        {carts.map((item) => (
          <Pizza
            key={item.id}
            name={item.name}
            description={""}
            price={item.unitPrice}
            className={"mx-auto w-4/5"}
            type="cart"
          />
        ))}
      </div>
      <div className="mt-4 w-full ">
        <h3 className="mt-3 max-w-2xl text-3xl font-bold leading-snug tracking-tight text-gray-800 dark:text-white lg:text-4xl lg:leading-tight">
          {/* TODO: add Checkout page and insert Final price in the button */}
          <Button type="primary">Checkout</Button>
          <button type="primary" onClick={() => dispatch(clearCart())}>
            Clear cart
          </button>
        </h3>
      </div>
    </Container>
  );
}

// we will have a Checkout button that will call a loader function (which basically calls an API)
// that will process our transaction
// we will also have a Cancel button that will clear our cart

export async function action({ request }) {
  const data = Object.fromEntries(await request.formData());
  console.log(data);
  // const order = {
  //   ...data,
  //   cart: JSON.parse(data.cart),
  // };

  // const newOrder = await createOrder(order);

  // clear cart after creating an order
  store.dispatch(clearCart());
  // return redirect(`/checkout/${newOrder.id}`);
  return null;
}
