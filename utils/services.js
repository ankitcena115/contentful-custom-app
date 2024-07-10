import { getClientAxios } from "./axios-helpers";

const BASE_URL = "https://gsf-staging.agilecollab.com"

const appendBaseUrl = (url) => BASE_URL + url;

export const getProducts = async () => {
    const clientAxios = await getClientAxios();
    const response = await clientAxios.get(appendBaseUrl('/rest/V1/products?searchCriteria[pageSize]=20&searchCriteria[currentPage]=1'));
    return response.data;
}