import axios from 'axios';

const API = axios.create({ baseURL: `${process.env.REACT_APP_BACKEND_URL}/api/v1` });

export const addEvent = (email, sixDigitCode) => {
  return new Promise((resolve, reject) => {
    API.post(`/users/${email}/event/${sixDigitCode}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

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

export const updateUserAPI = (email, updatedUser) => {
  console.log(updatedUser);
  return new Promise((resolve, reject) => {
    API.put(`/users/${email}`, updatedUser)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.log(error);
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

export const userInfoAPI = (email) => {
  return new Promise((resolve, reject) => {
    API.get(`/users/${email}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const topMembersAPI = () => {
  return new Promise((resolve, reject) => {
    API.get('/users/topMembers')
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const userRank = (email) => {
  return new Promise((resolve, reject) => {
    API.get(`/users/${email}/userRank`)
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
};

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

export const prizeRedeemSmallAPI = (email) => {
  return new Promise((resolve, reject) => {
    API.put(`/${email}/redeemSmall`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const prizeRedeemMediumAPI = (email) => {
  return new Promise((resolve, reject) => {
    API.put(`/${email}/redeemMedium`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const prizeRedeemLargeAPI = (email) => {
  return new Promise((resolve, reject) => {
    API.put(`/${email}/redeemLarge`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
