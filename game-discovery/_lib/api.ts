const BASE_URL = "https://api.rawg.io/api"; 
const API_KEY = process.env.NEXT_PUBLIC_RAWG_API_KEY;

export async function fetchGames() {
    const params = new URLSearchParams();
    
    if (API_KEY) {
        params.append("key", API_KEY);
    }

    const url = `${BASE_URL}/games?${params.toString()}`;
    

    try {
        const res = await fetch(url);

        if (!res.ok) {
            const errorText = await res.text();
            throw new Error(`Failed to fetch games: ${res.status} - ${errorText}`);
        }

        return await res.json();
        
    } catch (error) {
        console.error("Fetch error:", error);
        throw error;
    }
}