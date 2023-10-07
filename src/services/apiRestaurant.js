const API_URL = "http://localhost:8000/recipe";

export async function getMenu() {
  const res = await fetch(`${API_URL}`);

  if (!res.ok) throw new Error("Response is NOT ok");

  return await res.json();
}

export async function getOrder(id) {
  const res = await fetch(`${API_URL}/order/${id}`);
  if (!res.ok) throw new Error(`Couldn't find order #${id}`);

  const { recipe } = await res.json();
  return recipe;
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
