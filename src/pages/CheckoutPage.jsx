import { useEffect } from "react";
import { useFetcher } from "react-router-dom";

export default function CheckoutPage() {
  // AN ADVANCE LECTURE if we want to use the useFetcher hook
  // we are collecting all the data from the API route '/menu' provided by the action function
  const fetcher = useFetcher();

  useEffect(() => {
    if (!fetcher.data && fetcher.state === "idle") fetcher.load("/menu");
  }, [fetcher]);

  return <div>CheckoutPage</div>;
}
