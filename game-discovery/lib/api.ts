import axios from "axios";

const BASE_URL = "https://api.rawg.io/api";
const API_KEY = process.env.NEXT_PUBLIC_RAWG_API_KEY;

function sleep(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}

export async function fetchGames() {
  if (!API_KEY) {
    throw new Error(
      "Missing environment variable NEXT_PUBLIC_RAWG_API_KEY. Set it and restart the app."
    );
  }

  const url = `${BASE_URL}/games?key=${API_KEY}`;
  const maxAttempts = 3;
  const baseDelay = 500;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const res = await axios.get(url, {
        timeout: 100000,
      });

      return res.data;
    } catch (error: any) {
      const errCode = error?.code ?? error?.response?.status;
      console.error(
        `AXIOS ERROR (attempt ${attempt}):`,
        error.response?.data ?? error.message,
        'code:',
        errCode
      );

      if (attempt === maxAttempts) {
        throw error;
      }

      const isNetworkErr = error?.code === 'ECONNRESET' || error?.code === 'ETIMEDOUT' || error?.code === 'ECONNABORTED';
      const isServerErr = Boolean(error?.response && error.response.status >= 500);

      if (!isNetworkErr && !isServerErr) {

        throw error;
      }

      const delay = baseDelay * Math.pow(2, attempt - 1);
      await sleep(delay);
    }
  }

  return undefined as any;
}