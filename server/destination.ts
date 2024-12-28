import { useApi } from '~/server/useApi';

const api = useApi();

export async function getDestination() {
  try {
    const response = await api.get('/nearby');
    return response.data;
  } catch (error) {
    console.error('Error fetching room:', error);
    throw error;
  }
}
