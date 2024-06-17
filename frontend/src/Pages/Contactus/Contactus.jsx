import './Contactus.css';
import { Button } from 'react-bootstrap';
import Call from '../../assets/blue-icon/Call.svg';
import Message from '../../assets/blue-icon/Message.svg';
import Location from '../../assets/blue-icon/Location.svg';
import facebookblue from '../../assets/blue-icon/facebookblue.svg';
import twitterblue from '../../assets/blue-icon/twitterblue.svg';
import instagramblue from '../../assets/blue-icon/instagramblue.svg';
import whatsappblue from '../../assets/blue-icon/whatsappblue.svg';
import { Link } from 'react-router-dom';



function Contactus() {
  return (
    <div className="container" style={{marginBlock:"70px"}}>
      <div className='titleBar d-flex shapeParent mb-3'>
        <div className="shape"></div>
        <h2 className="fs-4 ms-4">Contact us </h2>
      </div>
      <div className=" container contact-text row">
        <div className="col d-flex justify-content-center align-items-center flex-column">
          <h2
            className="fw-bold"
            style={{ color: '#067BC2', fontSize: '50px' }}
          >
            Let’s connect
          </h2>
          <p style={{ color: '#5D626E' }}>
            {' '}
            We are here to help you out anytime{' '}
          </p>
          <div className="connectList p-2">
            <ul>
              <li className="p-2 " style={{ color: '#5D626E' }}>
                <img width={20} src={Call} alt="" />
                1234567890
              </li>
              <li className="p-2" style={{ color: '#5D626E' }}>
                <img width={30} src={Message} alt="" />
                rawscholar@gmail.com
              </li>
              <li className="p-2" style={{ color: '#5D626E' }}>
                <img width={30} src={Location} alt="" />
                Wolfpack Workspaces Kochi
              </li>
            </ul>
            <div>
              <ul className='container d-flex justify-content-center p-2 gap-3' >
                <li><Link><img src={facebookblue} alt="" /></Link></li>
                <li><Link><img src={twitterblue} alt="" /></Link></li>
                <li><Link><img src={instagramblue} alt="" /></Link></li>
                <li><Link><img src={whatsappblue} alt="" /></Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col d-flex align-items-center">
          <form className="formContainer shadow d-flex flex-column align-items-center gap-3 ">
            <div className="form-group mb-2">
              <p className="m-0" style={{ color: '#5D626E' }}>
                Full Name <span style={{ color: '#067BC2' }}>*</span>{' '}
              </p>
              <input
                className="inputBox"
                type="text"
                placeholder="Enter Email"
                style={{ fontSize: '15px' }}
              />
            </div>
            <div className="form-group mb-2">
              <p className="m-0"style={{ color: '#5D626E' }}>
                Email <span style={{ color: '#067BC2' }}>*</span>{' '}
              </p>
              <input
                className="inputBox"
                type="text"
                placeholder="Enter Name"
                style={{ fontSize: '15px' }}
              />
            </div>
            <div className="form-group mb-2">
              <p className="m-0"style={{ color: '#5D626E' }}>
                Phone No <span style={{ color: '#067BC2' }}>*</span>{' '}
              </p>
              <input
                className="inputBox"
                type="text"
                placeholder="Enter Phone no"
                style={{ fontSize: '15px' }}
              />
            </div>
            <div className="form-group mb-2">
              <p className="m-0"style={{ color: '#5D626E' }}>
                Message <span style={{ color: '#067BC2' }}>*</span>{' '}
              </p>
              <textarea
                className="inputBox"
                name='message'
                style={{ fontSize: '15px' }}
              ></textarea>
            </div>
            <Button
              className="mt-2 mb-3 w-100"
              style={{ fontSize: '13px', backgroundColor: '#067BC2' }}
              type="submit"
            >
              Sent Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
