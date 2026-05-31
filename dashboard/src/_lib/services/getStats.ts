import axios from "axios";

export async function getProductsStats() {
  const res = await axios.get('https://dummyjson.com/products/')
    
  if (!res) {
    throw new Error(`Failed to fetch users`);
  }

  return res.data.total;
}

export async function getUsersStats() {
  const res = await axios.get('https://dummyjson.com/users');
  
  if (!res) {
    throw new Error(`Failed to fetch users`);
  }

  return res.data.total;
}