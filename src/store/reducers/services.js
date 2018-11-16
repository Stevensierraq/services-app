const services = (state=[], action) => {
    switch (action.type) {
      case 'ADD_SERVICE':
        const date = new Date().toLocaleString();
        return state.concat({...action.service, date})
      case 'DELETE_SERVICE':
        return state.filter(service => service.date !== action.service)
      default: 
        return state;
    }
};

export default services;