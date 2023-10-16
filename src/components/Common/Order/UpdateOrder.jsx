import React from "react";
import { useFetcher } from "react-router-dom";
import { updateOrder } from "../../../services/apiRestaurant";

export default function UpdateOrder() {
  const fetcher = useFetcher();

  return (
    // fetcher.Form will not navigate away unlike a normal Form tag created by react
    <fetcher.Form method="PATCH">
      <button>Make priority</button>
    </fetcher.Form>
  );
}

export async function action({ request, params }) {
  // const data = { priority: true };
  // await updateOrder(params.orderId, data);
  return;
}
