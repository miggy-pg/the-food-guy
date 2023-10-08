import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "../NavBar";
import Loader from "../Loader";

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  // width:100%;padding-right:var(--bs-gutter-x, .75rem);padding-left:var(--bs-gutter-x, .75rem);margin-right:auto;margin-left:auto

  return (
    <div className="mx-auto w-full p-0 px-3">
      {isLoading && <Loader />}
      <NavBar />
      {/* <Outlet /> */}
    </div>
  );
}
