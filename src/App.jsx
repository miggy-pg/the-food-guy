import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage, { loader as recipeLoader } from "./pages/HomePage";
import Error from "./components/Common/Error";
import AppLayout from "./components/Common/AppLayout";
import CartPage from "./pages/CartPage";
import FoodPage, { loader as foodLoader } from "./pages/FoodPage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <HomePage />, loader: recipeLoader },
      // { path: "/menu", element: <MenuPage /> },
      { path: "/menu/:orderId", element: <FoodPage />, loader: foodLoader },
      { path: "/cart", element: <CartPage /> },
      // { path: "/order/new", element: <CreateOrder /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
