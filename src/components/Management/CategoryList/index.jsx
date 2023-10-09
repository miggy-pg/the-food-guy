import SectionMenu from "../../Common/SectionMenu";

export function CategoryList() {
  return (
    <SectionMenu>
      <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom">
        <li className="nav-item">
          <a
            className="d-flex align-items-center active mx-3 ms-0 text-start"
            data-bs-toggle="pill"
            href="#tab-1"
          >
            <i className="fa fa-coffee fa-2x text-primary"></i>
            <div className="ps-3">
              <small className="text-body">Popular</small>
              <h6 className="mt-n1 mb-0">Breakfast</h6>
            </div>
          </a>
        </li>
      </ul>
    </SectionMenu>
  );
}
