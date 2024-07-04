import React,{useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import signUp from "../../Assests/Navbar/signUpImage.png";
import cart from "../../Assests/Navbar/cartImage.png";
import SignUp from '../Register/SignUp';
import Login from '../Login/Login';
const NavbarUi=()=>{
 const [signUpPopup,setSignUpPopup]=useState(false)
 const [loginPopup,setLoginUpPopup]=useState(false)

const handleSignUpPopup=()=>{
  setSignUpPopup(!signUpPopup)
}
const handleLoginPopup=()=>{
  setLoginUpPopup(!loginPopup)
}
return(
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        {/* <div className='d-flex justify-content-center bg-danger'> */}
        <Navbar.Brand href="#home">
            <img src="https://www.ugaoo.com/cdn/shop/files/greenlogo.png?height=200&v=1660383580" alt="logo image"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex w-100 mx-5 justify-content-around ">
           
            <NavDropdown title="PLANTS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="SEEDS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="PLANT CARE" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="GIFTING" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">BLOGS</Nav.Link>
            <Nav.Link href="#home">OFFERS</Nav.Link>

          </Nav>
          <Nav className="d-flex  w-100 justify-content-end">
           
         <img src='https://cdn.shopify.com/s/files/1/0579/7924/0580/files/RuppeeCoinIcon3_Website.svg?v=1685709659' height='40px'/>
       
        <button onClick={()=>{handleSignUpPopup()}} style={{border:'none'}}  >
        <img src={signUp} height='40px'/>
          </button> 
         <img src={cart} height='40px'/>
      {signUpPopup && <SignUp signUpPopUpHandle={handleSignUpPopup} loginPopUpHandle={handleLoginPopup}/>}  
      {loginPopup && <Login signUpPopUpHandle={handleSignUpPopup} loginPopUpHandle={handleLoginPopup}/>}  

            
         </Nav>
        </Navbar.Collapse>
        {/* </div> */}
       
      </Container>
    </Navbar>
    </div>
)
}

export default NavbarUi