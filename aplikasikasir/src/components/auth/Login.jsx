// import React from "react";
// import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from "mdb-react-ui-kit";
// import { Link } from "react-router-dom";

// function App() {
//   return (
//     <MDBContainer fluid className="p-3 my-5">
//       <MDBRow>
//         <MDBCol col="10" md="6">
//           <img src="src/assets/images/login.png" className="img-fluid" alt="Phone image" />
//         </MDBCol>

//         <MDBCol col="4" md="6">
//           <h3 className="text-center mb-5">
//             <strong>Kasir</strong> App
//           </h3>
//           <MDBInput wrapperClass="mb-4" label="Email address" id="formControlLg" type="email" size="lg" />
//           <MDBInput wrapperClass="mb-4" label="Password" id="formControlLg" type="password" size="lg" />

//           <div className="d-flex justify-content-between mb-4">
//             <p>Belum punya akun? <Link to="/registrasi">Sign Up</Link></p>
//           </div>

//           <MDBBtn className="mb-4 w-100" size="lg">
//             Sign in
//           </MDBBtn>

//           <div className="divider d-flex align-items-center my-4">
//             <p className="text-center fw-bold mx-3 mb-0">OR</p>
//           </div>

//           <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: "#3b5998" }}>
//             <MDBIcon fab icon="facebook-f" className="mx-2" />
//             Continue with facebook
//           </MDBBtn>

//           <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: "#55acee" }}>
//             <MDBIcon fab icon="twitter" className="mx-2" />
//             Continue with twitter
//           </MDBBtn>
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   );
// }

// export default App;
import React from 'react'

const Login = (props) => {
    const { email,setEmail,password,setPassword,handleLogin,handleSignUp,hasAccount,setHasAccount,emailError,passwordError } = props;
  return (
    <section className=''>
        <div className="loginconatiner">
            <label>Username</label>
            <input type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)}/>
            <p className="errormsg">{emailError}</p>
            <input type="text" required value={password} onChange={(e) => setPassword(e.target.value)} />
            <p className="errormsg">{passwordError}</p>
            
        </div>
    </section>
  )
}

export default Login;