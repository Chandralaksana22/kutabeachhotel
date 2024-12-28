import axios from 'axios';

const BASE_URL = 'http://50.6.171.246/~kutabeachhotel/cms/api/v1/';

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
