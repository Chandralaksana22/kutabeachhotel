import { useApi } from '~/server/useApi';

const api = useApi();

export async function getMeeting() {
  try {
    const response = await api.get('/meeting');
    return response.data;
  } catch (error) {
    console.error('Error fetching room:', error);
    throw error;
  }
}
