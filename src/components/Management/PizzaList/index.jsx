import Pizza from "../../Common/Pizza";
export default function PizzaList() {
  return (
    <div id="tab-1" className="tab-pane fade show p-0 active">
      <div className="row g-4">
        <div className="col-lg-6">
          <div className="d-flex align-items-center">
            <Pizza />
          </div>
        </div>
      </div>
    </div>
  );
}
