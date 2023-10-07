export default function Pizza() {
  return (
    <div className="d-flex align-items-center">
      <img
        className="img-fluid flex-shrink-0 rounded"
        src="img/menu-1.jpg"
        alt=""
        style={{ width: "80px" }}
      />
      <div className="w-100 d-flex flex-column ps-4 text-start">
        <h5 className="d-flex justify-content-between border-bottom pb-2">
          <span>Chicken Burger</span>
          <span className="text-primary">$115</span>
        </h5>
        <small className="fst-italic">
          Ipsum ipsum clita erat amet dolor justo diam
        </small>
      </div>
    </div>
  );
}
