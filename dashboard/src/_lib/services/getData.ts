export async function getProducts() {

  const res = await fetch('https://dummyjson.com/products/category/smartphones?select=title,price');
  // console.log(res);
  
  if (!res.ok) throw new Error('Failed to fetch products');

  return res.json();
}

export async function getUsers() {

  const res = await fetch('https://dummyjson.com/users?limit=5&skip=10');
  console.log(res);
  
  if (!res.ok) throw new Error('Failed to fetch users');

  return res.json();
}