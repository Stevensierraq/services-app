const services = (state=[], action) => {
    switch (action.type) {
      case 'ADD_SERVICE':
        return state.concat(action.service)
      case 'DELETE_SERVICE':
        return state.concat(action.service)
      default: 
        return state;
    }
};

export default services;