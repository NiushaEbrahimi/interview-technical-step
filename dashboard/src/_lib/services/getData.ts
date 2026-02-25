export async function getProducts() {
  const res = await fetch('https://dummyjson.com/products/', {
    next: { revalidate: 3600 },
  });
  
  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(`Failed to fetch products: ${res.status} ${errorData.message || res.statusText}`);
  }

  return res.json();
}

export async function getUsers( {limit, recent} : {limit : number, recent : boolean} ) {
  const url = 
    limit ? `https://dummyjson.com/users?limit=${limit}` 
    : recent ? `https://dummyjson.com/users?sortBy=id&order=desc&limit=${limit}` 
    : `https://dummyjson.com/users`
  const res = await fetch(url, {
    next: { revalidate: 3600 },
  });
  
  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(`Failed to fetch users: ${res.status} ${errorData.message || res.statusText}`);
  }

  return res.json();
}