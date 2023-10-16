import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage, { loader as recipeLoader } from "./pages/HomePage";
import Error from "./components/Common/Error";
import AppLayout from "./components/Common/AppLayout";
import CartPage, { action as createOrder } from "./pages/CartPage";
import FoodPage, { loader as foodLoader } from "./pages/FoodPage";
import LoginPage from "./pages/LoginPage";
// import { action as updateOrderAction } from "./components/Common/Order/UpdateOrder";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <HomePage />, loader: recipeLoader },
      { path: "/user/login", element: <LoginPage /> },
      // { path: "/menu", element: <MenuPage /> },
      { path: "/menu/:orderId", element: <FoodPage />, loader: foodLoader },
      {
        path: "/cart",
        element: <CartPage />,
        action: createOrder,
        errorElement: <Error />,
      },
      // { path: "/order/new", element: <CreateOrder /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
