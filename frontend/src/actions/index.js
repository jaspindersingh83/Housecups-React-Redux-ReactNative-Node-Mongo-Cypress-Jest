import axios from 'axios';

// Auth Actions please maintain alphabetical order
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';
export const ADMIN_AUTHORIZED = 'ADMIN_AUTHORIZED';
export const CREATE_USER = 'CREATE_USER';
export const CHANGESETTINGS = 'CHANGESETTINGS';
export const FORGOTPASSWORD = 'FORGOTPASSWORD';
export const RESETPASSWORD = 'RESETPASSWORD';
export const SIGNIN = 'SIGNIN';
export const SIGNOUT = 'SIGNOUT';

// House Actions
export const ADDHOUSE = 'ADDHOUSE';
export const DELETEHOUSE = 'DELETEHOUSE';
export const GETHOUSES = 'GETHOUSES';
export const UPDATEHOUSE = 'UPDATEHOUSE';

// Api url To be changed for Production
// const ROOT_URL = 'Insert Production URL here'

const ROOT_URL = 'http://127.0.0.1:5000';

// Auth Actions functions
export const authError = (error) => {
  return (dispatch) => {
    dispatch({ type: AUTHENTICATION_ERROR, payload: error });
    setTimeout(() => {
      dispatch({ type: AUTHENTICATION_ERROR });
    }, 4000);
  };
};

export const changeSettings = async (user) => {
  const apiurl = `${ROOT_URL}/settings`;
  try {
    const token = localStorage.getItem('token');
    await axios.post(apiurl, user, {
      headers: {
        Authorization: token,
      },
    });
    return {
      type: CHANGESETTINGS,
    };
  } catch (error) {
    return authError(error.response.data.message);
  }
};

export const createUser = async (user, history) => {
  const apiurl = `${ROOT_URL}/signup`;
  try {
    const adduserrequest = await axios.post(apiurl, user);
    history.push('/signin');
    return {
      type: CREATE_USER,
      payload: adduserrequest,
    };
  } catch (error) {
    if (error.message === 'Network Error') return authError('Network Error - Email jaspinder to start server');
    if (error.response.data.message.errmsg) {
      const duplicateKey = error.response.data.message.errmsg;
      const emailKeyWordPresent = duplicateKey.search(/email/i);
      if (emailKeyWordPresent === -1) {
        return authError('Username Unavailable');
      }
      return authError('Email already registered');
    }
    if (error.response.data.message) return authError(error.response.data.message);
  }
};

export const signin = async (user, history) => {
  const apiurl = `${ROOT_URL}/signin`;
  try {
    const signinrequest = await axios.post(apiurl, user);
    localStorage.setItem('token', signinrequest.data.token);
    // After signin the user needs to be redirected to
    history.push('/forgotpassword');
    return {
      type: SIGNIN,
      payload: signinrequest,
    };
  } catch (error) {
    return authError(error.response.data.message);
  }
};
export const forgotPassword = async (email) => {
  try {
    await axios.post(`${ROOT_URL}/forgotpassword`, { email });
    return {
      type: FORGOTPASSWORD,
    };
  } catch (error) {
    return authError(error.response.data.message);
  }
};
export const resetPassword = async (passwords, history) => {
  const token = localStorage.getItem('token');
  try {
    await axios.post(`${ROOT_URL}/reset`, passwords, {
      headers: {
        Authorization: token,
      },
    });
    console.log('Reset Successfull');
    history.push('/signin');
    return {
      type: RESETPASSWORD,
    };
  } catch (error) {
    return authError(error.response.data.message);
  }
};
export const signout = async (history) => {
  const apiurl = `${ROOT_URL}/signout`;
  const token = localStorage.getItem('token');
  try {
    await axios.get(apiurl, {
      headers: {
        Authorization: token,
      },
    });
    // remove the JWT from local storage
    localStorage.removeItem('token');
    history.push('/signin');
    return {
      type: SIGNOUT,
    };
  } catch (error) {
    return authError(error.response.data.message);
  }
};

export const adminAuth = async (history) => {
  try {
    const token = localStorage.getItem('token');
    await axios.get(
      `${ROOT_URL}/admin`,
      {
        headers: {
          Authorization: token,
        },
      },
    );
    return {
      type: ADMIN_AUTHORIZED,
    };
  } catch (error) {
    history.push('/signin');
    return authError('You are not authorized as school admin');
  }
};

// Houses Action Functions
export const addHouse = async (house, history) => {
  const apiurl = `${ROOT_URL}/api/house`;
  try {
    const token = localStorage.getItem('token');
    await axios.post(apiurl, house, {
      headers: {
        Authorization: token,
      },
    });
    return {
      type: ADDHOUSE,
    };
  } catch (error) {
    history.push('/signin');
    return authError('You are not authorized, Please signin');
  }
};

export const deleteHouse = async (houseid, history) => {
  const apiurl = `${ROOT_URL}/api/house/${houseid}`;
  try {
    const token = localStorage.getItem('token');
    const deleteRequest = await axios.delete(apiurl, {
      headers: {
        Authorization: token,
      },
    });
    return {
      type: DELETEHOUSE,
      payload: deleteRequest,
    };
  } catch (error) {
    history.push('/signin');
    return authError('You are not authorized, Please signin');
  }
};

export const updateHouse = async (house, history) => {
  const apiurl = `${ROOT_URL}/api/house/${house.id}`;
  try {
    const token = localStorage.getItem('token');
    await axios.put(apiurl, house, {
      headers: {
        Authorization: token,
      },
    });
    return {
      type: UPDATEHOUSE,
    };
  } catch (error) {
    history.push('/signin');
    return authError('You are not authorized, Please signin');
  }
};

export const getHouses = async (history) => {
  const apiurl = `${ROOT_URL}/api/house`;
  try {
    const token = localStorage.getItem('token');
    const getAllHousesRequest = await axios.get(apiurl, {
      headers: {
        Authorization: token,
      },
    });
    return {
      type: GETHOUSES,
      payload: getAllHousesRequest,
    };
  } catch (error) {
    history.push('/signin');
    return authError('You are not authorized, Please signin');
  }
};


// Teacher Action Functions
export const addTeacher = async (house, history) => {
  const apiurl = `${ROOT_URL}/api/house`;
  try {
    const token = localStorage.getItem('token');
    await axios.post(apiurl, house, {
      headers: {
        Authorization: token,
      },
    });
    return {
      type: ADDHOUSE,
    };
  } catch (error) {
    history.push('/signin');
    return authError('You are not authorized, Please signin');
  }
};

export const deleteTeacher = async (teacherid, history) => {
  const apiurl = `${ROOT_URL}/api/teacher/${houseid}`;
  try {
    const token = localStorage.getItem('token');
    const deleteRequest = await axios.delete(apiurl, {
      headers: {
        Authorization: token,
      },
    });
    return {
      type: DELETETEACHER,
      payload: deleteRequest,
    };
  } catch (error) {
    history.push('/signin');
    return authError('You are not authorized, Please signin');
  }
};


export const getSignedUpTeachers = async (history) => {
  const apiurl = `${ROOT_URL}/api/house`;
  try {
    const token = localStorage.getItem('token');
    const getAllHousesRequest = await axios.get(apiurl, {
      headers: {
        Authorization: token,
      },
    });
    return {
      type: GETHOUSES,
      payload: getAllHousesRequest,
    };
  } catch (error) {
    history.push('/signin');
    return authError('You are not authorized, Please signin');
  }
};

