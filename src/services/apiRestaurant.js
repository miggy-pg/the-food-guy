const API_URL = "http://localhost:8000/recipe";

export async function getMenu() {
  const res = await fetch(`${API_URL}`);
  console.log("getMenu: ", res);
  if (!res.ok) throw new Error("Response is NOT ok");

  return await res.json();
}

export async function getOrder(id) {
  console.log("id: ", id);
  const res = await fetch(`${API_URL}/${id}`);
  console.log("getOrder: ", res);
  if (!res.ok) throw new Error(`Couldn't find order #${id}`);

  return await res.json();
}

export async function createOrder(newOrder) {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newOrder),
    });
    if (!res.ok) throw new Error("Response is NOT ok");
    const { recipe } = await res.json();
    return recipe;
  } catch {
    throw Error("Error creating order");
  }
}

export async function updateOrder(id, updatedOrder) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedOrder),
    });
    if (!res.ok) throw new Error("Response is NOT ok");
  } catch {
    throw Error("Failed updating your order");
  }
  1;
}
