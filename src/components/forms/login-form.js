import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import AccountCircle from '@material-ui/icons/AccountCircle';
import KeyIcon from '@material-ui/icons/VpnKey';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const validate = ({userName, password}) => {
    const errors = {}
    if(!userName) errors.userName = 'Required'
    if(!password) errors.password = 'Required'

    return errors
}

const renderInput = ({ input, meta: {error, touched}, label }) => 
    <div style={{margin: 12}}>
        <FormControl error={error && touched}>
            <InputLabel htmlFor={label}>{label}</InputLabel>
            <Input
                id={label}
                inputProps={{...input}}
                type={input.name === "password"? "password" : "text"}
                startAdornment={
                    <InputAdornment position="start">
                        {
                            input.name === 'password'
                            ? <KeyIcon />
                            : <AccountCircle />
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

let LoginForm = props => {
  const { handleSubmit } = props
  return (
      <div style={{ padding: '40px 20px 25px 20px', borderRadius:5, backgroundColor: 'white' }}>
        <form onSubmit={handleSubmit}>
            <Typography component="h2" variant="display1" gutterBottom>
                Services
            </Typography>
            <Field name="userName" label="Username" component={renderInput} type="text" />
            <Field name="password" type="password" label="Password" component={renderInput} />
            <Button 
                variant="contained" 
                size="large" 
                color="secondary" 
                type="submit" 
                style={{margin: 8, color: 'white'}}
            >
                Login
            </Button>
        </form>
      </div>
  )
}

LoginForm = reduxForm({
  form: 'login',
  validate
})(LoginForm)

export default LoginForm

