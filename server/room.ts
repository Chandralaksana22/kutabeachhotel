import { useApi } from '~/server/useApi';

const api = useApi();

export async function getRoom() {
  try {
    const response = await api.get('/allroom');
    return response.data;
  } catch (error) {
    console.error('Error fetching room:', error);
    throw error;
  }
}
export async function getRoomDetail(slug: any) {
  try {
    const response = await api.get(`/room?slug=${slug}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching room detail:', error);
    throw error;
  }
}