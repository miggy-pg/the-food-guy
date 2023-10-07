import "../../assets/css/bootstrap.min.css";

export default function Loader() {
  // {/* <div className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"> */}
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm ">
      <div style={{ width: "3rem", height: "3rem;" }} role="status">
        <span className="text-stone-500">Loading...</span>
      </div>
    </div>
  );
}
