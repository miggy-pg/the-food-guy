import Order from "../Order";

export default function Header() {
  return (
    <>
      <Order />
      <div>
        <h5 className="text-xl font-semibold text-yellow-500">Food Menu</h5>
        <h1 className="mb-5">Most Popular Items</h1>
      </div>
    </>
  );
}
