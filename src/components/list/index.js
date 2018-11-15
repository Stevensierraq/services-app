import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Item from './item';

function List ({services}) {
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
          services.map(({from, to, description}) => 
                <Item 
                    to={to}
                    from={from}
                    description={description}
                    handler={()=>{}}
                    key={description}
                />
            )  
        }
    </Grid>
};

export default List