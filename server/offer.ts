import { useApi } from '~/server/useApi';

const api = useApi();

export async function getOffer() {
  try {
    const response = await api.get('/offers');
    return response.data;
  } catch (error) {
    console.error('Error fetching room:', error);
    throw error;
  }
}
