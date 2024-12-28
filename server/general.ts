import { useApi } from '~/server/useApi';

const api = useApi();

export async function getInformation() {
  try {
    const response = await api.get('/information');
    return response.data;
  } catch (error) {
    console.error('Error fetching information:', error);
    throw error;
  }
}
export async function getRoomConfig() {
  try {
    const response = await api.get('/roomconfig');
    return response.data;
  } catch (error) {
    console.error('Error fetching information:', error);
    throw error;
  }
}
export async function getDiningConfig() {
  try {
    const response = await api.get('/diningconfig');
    return response.data;
  } catch (error) {
    console.error('Error fetching information:', error);
    throw error;
  }
}
export async function getNearbyConfig() {
  try {
    const response = await api.get('/nearbyconfig');
    return response.data;
  } catch (error) {
    console.error('Error fetching information:', error);
    throw error;
  }
}
export async function getMeetingConfig() {
  try {
    const response = await api.get('/meetingconfig');
    return response.data;
  } catch (error) {
    console.error('Error fetching information:', error);
    throw error;
  }
}

export async function getOfferConfig() {
  try {
    const response = await api.get('/offersconfig');
    return response.data;
  } catch (error) {
    console.error('Error fetching information:', error);
    throw error;
  }
}
export async function getFacilitiesConfig() {
  try {
    const response = await api.get('/facilitiesconfig');
    return response.data;
  } catch (error) {
    console.error('Error fetching information:', error);
    throw error;
  }
}

export async function getClient() {
  try {
    const response = await api.get('/top-client');
    return response.data;
  } catch (error) {
    console.error('Error fetching team:', error);
    throw error;
  }
}

export async function getNearby(){
  try {
    const response = await api.get('/nearby');
    return response.data;
  } catch (error) {
    console.error('Error fetching team:', error);
    throw error;
  }
}

export async function getGallery() {
  try {
    const response = await api.get('/gallery');
    return response.data;
  } catch (error) {
    console.error('Error fetching team:', error);
    throw error;
  }
}
export async function getPopUp() {
  try {
    const response = await api.get('/popup');
    return response.data;
  } catch (error) {
    console.error('Error fetching team:', error);
    throw error;
  }
}