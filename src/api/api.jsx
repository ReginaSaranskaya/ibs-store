export async function getItemsList() {
  const response = await fetch(`http://localhost:3006/items`);

  return await response.json();
}

export async function getItem(id = 1) {
  const response = await fetch(`http://localhost:3006/items/${id}`);

  return await response.json();
}
