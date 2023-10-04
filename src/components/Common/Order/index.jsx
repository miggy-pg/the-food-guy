export default function Order(props) {
  return (
    <div>
      <p>
        We are open until {props.closeHour}:00. Come visit us or order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
