import Order from "./Order";

export default function Header() {
  return (
    <div className="text-center">
      <p className="text-6xl font-semibold text-yellow-900">Food Menu</p>
      <Order />
    </div>
  );
}
