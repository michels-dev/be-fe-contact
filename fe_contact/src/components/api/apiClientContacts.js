import axios from 'axios';

const API_URL = 'http://localhost:3000';

// get all data
export const getAllContacts = () => {
  return axios.get(`${API_URL}/api/contacts`)
    .then(response => {
      console.log('API response:', response.data);
      return response.data;
    })
    .catch(error => {
      console.error('Error fetching contacts:', error);
      throw error;
    });
};

// get detail contact
export const getDetailContact = (id) => {
  return axios.get(`${API_URL}/api/DetailContact/${id}`)
  .then(response => {
    console.log(`API response (contact ${id}):`, response.data);
    return response.data;
  })
  .catch(error => {
    console.error(`Error fetching contact ${id}`, error);
    throw error;
  });
};

// get update contact
export const getUpdateContact = (id) => {
  return axios.get(`${API_URL}/api/EditContact/${id}`)
  .then(response => {
    console.log(`API response (contact ${id}):`, response.data);
    return response.data;
  })
  .catch(error => {
    console.error(`Error fetching contact ${id}`, error);
    throw error;
  });
};

// Create a new contact
export const createContact = (contact) => {
  return axios.post(`${API_URL}/api/CreateContacts`, contact)
    .then(response => {
      console.log('API response:', response.data);
      return response.data;
    })
    .catch(error => {
      console.error('Error creating contact:', error);
      throw error;
    });
};

// update contact
export const updateContact = (id, contact) => {
  return axios.put(`${API_URL}/api/UpdateContacts/${id}`, contact)
  .then(response => {
    console.log(`API response (updated contact ${id})`, response.data);
    return response.data;
  })
  .catch(error => {
    console.error(`Error updating contact ${id}`, error);
    throw error;
  });
};

// delete contact
export const deleteContact = (id) => {
  return axios.delete(`${API_URL}/api/DeleteContact/${id}`)
    .then(response => {
      console.log(`API response (deleted contact ${id}):`, response.data);
      return response.data;
    })
    .catch(error => {
      console.error(`Error deleting contact ${id}`, error);
      throw error;
    });
};

