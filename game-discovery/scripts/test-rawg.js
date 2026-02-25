const axios = require('axios');

const BASE_URL = 'https://api.rawg.io/api';
const API_KEY = process.env.NEXT_PUBLIC_RAWG_API_KEY || process.env.RAWG_API_KEY;

if (!API_KEY) {
  console.error('Set NEXT_PUBLIC_RAWG_API_KEY or RAWG_API_KEY in environment.');
  process.exit(1);
}

const url = `${BASE_URL}/games?key=${API_KEY}`;

(async () => {
  try {
    console.log('Requesting:', url);
    const res = await axios.get(url, { timeout: 100000 });
    console.log('Status:', res.status);
    console.log('Body sample:', res.data?.results?.slice(0,3));
  } catch (err) {
    console.error('Request failed:');
    console.error(err.message);
    console.error('code:', err.code);
    if (err.response) {
      console.error('status:', err.response.status);
      console.error('data:', err.response.data);
    }
    console.error(err.stack);
    process.exit(2);
  }
})();
