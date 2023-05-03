// import React from "react";
// import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { useFormik } from "formik";

// const Registrasi = () => {
//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       email: "",
//       password: "",
//       confirmpassword: "",
//     },
//     onSubmit: (values) => {
//       alert(JSON.stringify(values, null, 2));
//     },
//   });
//   return (
//     <div>
//       <Container>
//         <Row className="vh-100 d-flex justify-content-center align-items-center">
//           <Col md={8} lg={6} xs={12}>
//             <Card className="px-4 shadow">
//               <Card.Body>
//                 <div className="mb-3 mt-md-4">
//                   <h2 className="fw-bold mb-2 text-center ">Kasir App</h2>
//                   <div className="mb-3">
//                     <Form onSubmit={formik.handleSubmit}>
//                       <Form.Group className="mb-3" controlId="Name">
//                         <Form.Label className="text-center">Name</Form.Label>
//                         <Form.Control id="name" type="text" placeholder="Enter Name" onChange={formik.handleChange} value={formik.values.name} />
//                       </Form.Group>

//                       <Form.Group className="mb-3" controlId="formBasicEmail">
//                         <Form.Label className="text-center">Email address</Form.Label>
//                         <Form.Control id="email" type="email" placeholder="Enter email" onChange={formik.handleChange} value={formik.values.email}/>
//                       </Form.Group>

//                       <Form.Group className="mb-3" controlId="formBasicPassword">
//                         <Form.Label>Password</Form.Label>
//                         <Form.Control id="password" type="password" placeholder="Password" onChange={formik.handleChange} value={formik.values.password}/>
//                       </Form.Group>
//                       <Form.Group className="mb-3" controlId="formBasicPassword">
//                         <Form.Label>Confirm Password</Form.Label>
//                         <Form.Control id="confirmpassword" type="password" placeholder="Password" onChange={formik.handleChange} value={formik.values.confirmpassword}/>
//                       </Form.Group>
//                       <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
//                       <div className="d-grid">
//                         <Button variant="primary" type="submit">
//                           Create Account
//                         </Button>
//                       </div>
//                     </Form>
//                     <div className="mt-3">
//                       <p>
//                         Sudah punya akun? <Link to="/login">Login</Link>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default Registrasi;
