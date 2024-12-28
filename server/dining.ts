import { useApi } from '~/server/useApi';

const api = useApi();

export async function getDining() {
  try {
    const response = await api.get('/dining');
    return response.data;
  } catch (error) {
    console.error('Error fetching room:', error);
    throw error;
  }
}
