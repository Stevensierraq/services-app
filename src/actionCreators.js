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
  
  export {
    addService,
    deleteService
  };