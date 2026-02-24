import axios from "axios";
const BASE_URL = "https://api.rawg.io/api"; 
const API_KEY = process.env.NEXT_PUBLIC_RAWG_API_KEY;

export async function fetchGames() {
    const url = `${BASE_URL}/games?key=${API_KEY}`

    try {

        const res = await axios(url)

        return await res

    } catch (error) {
        console.log(error)
    }
}