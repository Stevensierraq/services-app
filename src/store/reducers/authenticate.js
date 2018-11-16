const authenticate = (auth=false, action) => {
    switch (action.type) {
      case 'LOGIN':
        return true;
      case 'LOGOUT':
        return false;
      default: 
        return auth;
    }
};

export default authenticate;