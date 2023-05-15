import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBIcon, MDBCheckbox } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";

function App() {
  const handleGoogleLogin = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.info(result.user);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleGoogleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const password2 = e.target.password2.value;

    if (!email || !password || !password2) {
      return alert("Silahkan lengkapi data anda!");
    }

    if (password !== password2) {
      return alert("Password tidak sesuai");
    }

    if (password.length < 6) {
      return alert("Password must be longer than 6 characters!");
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        localStorage.setItem("user", JSON.stringify(result.user));
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard className="bg-white my-5 mx-auto" style={{ borderRadius: "1rem", maxWidth: "500px" }}>
            <MDBCardBody className="p-5 w-100 d-flex flex-column">
            <h2 className="fw-bold mb-2 text-center">Kasir App</h2>
              <h5 className="fw-bold mb-2 text-center">Sign Up</h5>
              <p className="text-white-50 mb-3">Please enter your login and password!</p>
              <Form onSubmit={handleGoogleRegister}>
                <MDBInput wrapperClass="mb-4 w-100" label="Email address" id="formControlLg" type="email" size="lg" name="email" />
                <MDBInput wrapperClass="mb-4 w-100" label="Password" id="formControlLg" type="password" size="lg" name="password" />
                <MDBInput wrapperClass="mb-4 w-100" label="Password" id="formControlLg" type="password" size="lg" name="password2" />

                <MDBCheckbox name="flexCheck" id="flexCheckDefault" className="mb-4" label="Remember password" />

                <Button className="mb-2 mt-2 w-100" size="lg" type="submit">
                  Register
                </Button>

                <hr className="my-4" />

                <Button className="mb-2 w-100" size="lg" style={{ backgroundColor: "#dd4b39" }} type="button" onClick={handleGoogleLogin}>
                  <MDBIcon fab icon="google" className="mx-2" />
                  Sign in with google
                </Button>

                <Button className="mb-4 w-100" size="lg">
                  <Link to={"/"} style={{ color: "white" }}>
                    Login
                  </Link>
                </Button>
              </Form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default App;
