import axios, { AxiosResponse } from "axios";
import { ResponseData } from "../types";
import { url } from "../utils/url";

const searchResto = async () => {
    return await axios.get(`${url}/candidates`);
}

export { searchResto }