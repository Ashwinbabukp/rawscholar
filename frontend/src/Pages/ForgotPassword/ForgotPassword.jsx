import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ForgotPassword.css';

function ForgotPassword({show}) {
    show(false)
  return (
    <div className="containerlogin d-flex justify-content-center align-items-center">
      <form className="formContainer shadow d-flex flex-column align-items-center gap-3">
        <h1>Forgot Password</h1>
        <p className='d-flex' style={{fontSize:"14px",color:"#424242"}} >Enter your email id to reset your password</p>
        <div className="form-group mb-2">
          <p className="mb-1">Email ID</p>
          <input
            className="inputBox"
            type="text"
            placeholder="Enter Email"
            style={{ fontSize: '15px' }}
          />
        </div>
        <Button
          className="mt-2 mb-3 w-100 "
          style={{ fontSize: '13px' }}
          type="submit"
        >
          Sent OTP
        </Button>
        <p className=" mt-5" style={{ fontSize: '13px' }}>
          Don’t have account yet?
          <Link to={'/signup'} style={{ color: 'blue', fontSize: '13px' }}>
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  )
}

export default ForgotPassword