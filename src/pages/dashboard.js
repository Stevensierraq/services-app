import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import ServiceForm from '../components/forms/service-form';
import Header from '../components/header';
import List from '../components/list';
import { addService } from '../actionCreators';

class Dashboard extends Component {
    submit = service => {
        console.log(service)
        this.props.addService(service)
    }

    render(){
        const { 
            services
        } = this.props

        console.log(this.props)

        return<div>
            <Header />
            <Grid container style={{marginTop: 20}}>
                <Grid item xs={8}>
                    <Typography align="center" component="h2" variant="display1" gutterBottom>
                        My Services
                    </Typography>
                    <List services={services}/>
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
      }
    };
};

export default connect(mapStateToProps, mapDispatchProps)(Dashboard);
