import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Item from './item';

function List ({services, deleteService}) {
    if(services.length === 0) {
        return<Typography 
                align="center" 
                component="h1" 
                color="secondary" 
                variant="display1" 
                style={{marginTop: 50, fontSize: '10vh'}}
                gutterBottom
            >
                Get start =>
            </Typography>
    }

    return<Grid container>
        {
          services.map(service => 
                <Item 
                    {...service}
                    handler={deleteService}
                    key={service.description}
                />
            )  
        }
    </Grid>
};

export default List