import axios from "axios";

const api_url = "https://api.binance.com/api/v3";

export const getCryptos = async () => {
    const url = api_url + "/ticker/price"
    try {
        const res = await axios.get(url)
        return res.data
    } catch (e) {
        console.error("Error: " + e)
        return null
    }
};