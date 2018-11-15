import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Item = ({ description, from, to, handler }) => (
    <Card style={{width: 260, margin: 7}}>
      <CardContent>
        <Typography variant="title" color="secondary" gutterBottom>
          {description}
        </Typography>
        <Typography component="p">
          <span style={{fontWeight: 'bold'}}>From: </span> {from}
        </Typography>
        <Typography component="p">
          <span style={{fontWeight: 'bold'}}>To: </span> {to}
        </Typography>
      </CardContent>
      <CardActions disableActionSpacing>
        <Button style={{marginLeft: 'auto', color: 'red'}}>Delete</Button>
      </CardActions>
    </Card>
);

Item.propTypes = {
    description: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    handler: PropTypes.func.isRequired,
};

export default Item;