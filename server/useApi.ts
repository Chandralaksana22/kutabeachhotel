import axios from 'axios';

const BASE_URL = 'https://thekutabeachhotel.com/cms/api/v1/';

export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'cache-control': 'public, max-age=3600',
    'Access-Control-Allow-Origin': '*',
    'Accept-Encoding': 'gzip, compress, br',
  },
});

// Fungsi untuk mempermudah penggunaan client
export const useApi = () => {
  return apiClient;
};
