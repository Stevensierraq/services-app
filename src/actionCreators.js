const addService = service => {
    return {
      type: 'ADD_SERVICE',
      service
    };
  };
  
  const deleteService = service => {
    return {
      type: 'DELETE_SERVICE',
      service
    };
  };

  const login = user => {
    return {
      type: 'LOGIN',
      user
    };
  };

  const logout = user => {
    return {
      type: 'LOGOUT',
      user
    };
  };
  
  export {
    addService,
    deleteService,
    login,
    logout
  };