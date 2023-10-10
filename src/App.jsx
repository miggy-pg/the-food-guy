import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage, { loader as recipeLoader } from "./pages/HomePage";
import Error from "./components/Common/Error";
import CartPage from "./pages/CartPage";
import AppLayout from "./components/Common/AppLayout";
import Order, { loader as orderLoader } from "./components/Common/Order";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <HomePage />, loader: recipeLoader },
      { path: "/cart", element: <CartPage /> },
      // { path: "/order/new", element: <CreateOrder /> },
      {
        path: "/cart/:orderId",
        element: <Order />,
        loader: orderLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
