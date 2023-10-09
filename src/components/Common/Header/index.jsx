import Order from "../Order";

export default function Header() {
  return (
    <div className="text-center">
      <p className="text-5xl font-semibold text-yellow-500">Food Menu</p>
      <Order />
    </div>
  );
}
