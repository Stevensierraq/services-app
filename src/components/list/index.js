import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

import Item from './item';

function List ({services, deleteService}) {
    if(services.length === 0) {
        return<Card style={{height: 350, width: 500, marginLeft: 'auto', marginRight: 'auto'}}>
            <CardActionArea>
            <img src="https://upload.wikimedia.org/wikipedia/sr/8/8b/Google_Maps_screenshot.png" alt="map"/>
            <CardContent>
                <Typography 
                    align="center" 
                    component="h1" 
                    color="secondary" 
                    variant="display1" 
                    style={{marginTop: 0, fontSize: '5vh'}}
                    gutterBottom
                >
                    Get start =>
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
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

List.propTypes = {
    deleteService: PropTypes.func.isRequired,
    services: PropTypes.array.isRequired,
};

export default List