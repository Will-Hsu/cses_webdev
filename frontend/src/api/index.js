import axios from 'axios';

const API = axios.create({ baseURL: 'http://127.0.0.1:5000/api/v1' });

export const createSubscriberAPI = (newEmail) => {
  return new Promise((resolve, reject) => {
    API.post('/subscribers/create', newEmail)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        //console.error(error);
        reject(error);
      });
  });
};

export const createUserAPI = (newUser) => {
  return new Promise((resolve, reject) => {
    API.post('/users/create', newUser)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        if (error.response.status === 409) {
          console.log('User already exists with this email');
        }
        reject(error);
      });
  });
};

export const checkUserAPI = (email) => {
  return new Promise((resolve, reject) => {
    API.post('/users/check', email)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const eventListAPI = () => {
  return new Promise((resolve, reject) => {
    API.get('/events')
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const eventCreateAPI = (newEvent) => {
  return new Promise((resolve, reject) => {
    API.post('/event/create', newEvent)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const eventDeleteAPI = (id) => {
  return new Promise((resolve, reject) => {
    API.delete(`/event/${id}/delete`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export const eventUpdateAPI = (id, updatedEvent) => {
  return new Promise((resolve, reject) => {
    API.put(`/event/${id}/update`, updatedEvent)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
