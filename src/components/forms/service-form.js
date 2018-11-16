import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import RoomIcon from '@material-ui/icons/Room';
import ShippingIcon from '@material-ui/icons/LocalShipping';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const validate = ({description, from, to}) => {
    const errors = {}
    if(!description) errors.description = 'Required'
    if(!from) errors.from = 'Required'
    if(!to) errors.to = 'Required'

    return errors
}

const renderInput = ({ input, meta: {error, touched}, label }) => 
    <div style={{margin: 10, width: 200}}>
        <FormControl error={error && touched}>
            <InputLabel htmlFor={label}>{label}</InputLabel>
            <Input
            id={label}
            multiline={input.name === 'description'}
            inputProps={{...input}}
            startAdornment={
                <InputAdornment position="start">
                    {
                        input.name === 'description'
                        ? <ShippingIcon style={{color: 'gray'}}/>
                        : <RoomIcon style={{color: 'gray'}}/>
                    }
                </InputAdornment>
            }
            />
        </FormControl>
        {
            error && touched &&
                <Typography style={{color: 'red'}}>{error}</Typography>
        }
    </div>

let ServiceForm = props => {
  const { handleSubmit } = props
  return (
      <div 
        style={{ 
            padding: '25px 15px 20px 15px', 
            borderRadius: 5,
            margin: '20px auto',
            width: 210, 
            border: '1px solid lightGray',
            backgroundColor: 'white' 
        }}
      >
        <form onSubmit={handleSubmit}>
            <Typography component="h2" variant="display1" gutterBottom>
                New service
            </Typography>
            <Field name="description" type="textarea" label="Description" component={renderInput} />
            <Field name="from" type="textarea" label="From" component={renderInput} /> 
            <Field name="to" type="textarea" label="To" component={renderInput} />          
            <Button 
                variant="contained" 
                color="secondary" 
                type="submit" 
                style={{margin: 8, color: 'white', width: 205}}
            >
                Create
            </Button>
        </form>
      </div>
  )
}

ServiceForm = reduxForm({
  form: 'service',
  validate
})(ServiceForm)

export default ServiceForm