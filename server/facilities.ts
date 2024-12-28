import { useApi } from '~/server/useApi';

const api = useApi();

export async function getFacilities() {
  try {
    const response = await api.get('/facilities');
    return response.data;
  } catch (error) {
    console.error('Error fetching room:', error);
    throw error;
  }
}
