import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import ServiceForm from '../components/forms/service-form';
import Header from '../components/header';
import List from '../components/list';
import { 
    addService, 
    deleteService,
    logout
} from '../actionCreators';

class Dashboard extends Component {
    submit = service => {
        const { addService, resetForm } = this.props
        addService(service)
        resetForm()
    }

    deleteService = service => this.props.deleteService(service)

    handleLogout = () => {
        const { logout, history } = this.props
        logout({user: 'liftit'});
        if(history) history.push('/');
    }

    render(){
        const { services } = this.props
        return<div>
            <Header handleLogout={this.handleLogout} />
            <Grid container style={{marginTop: 20}}>
                <Grid item xs={12} md={8}>
                    <Typography align="center" component="h2" variant="display1" gutterBottom>
                        My Services
                    </Typography>
                    <List 
                        services={services}
                        deleteService={this.deleteService}
                    />
                </Grid>
                <Grid item xs={4}>
                    <ServiceForm onSubmit={this.submit}/>
                    
                </Grid>
            </Grid>
        </div>
    }
}

const mapStateToProps = state => {
    return {
      services: state.services
    };
};
  
const mapDispatchProps = dispatch => {
    return {
      addService(service) {
        dispatch(addService(service));
      },
      deleteService(service) {
        dispatch(deleteService(service));
      },
      resetForm(){
          dispatch(reset('service'));
      },
      logout(user){
        dispatch(logout(user));
    }
    };
};

export default connect(mapStateToProps, mapDispatchProps)(Dashboard);
