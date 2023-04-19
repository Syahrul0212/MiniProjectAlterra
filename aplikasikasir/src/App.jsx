import React, { Component } from "react";
import { NavbarComponent, ListCategories, Hasil } from "./components";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3000/products`)
      .then((res) => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log("Error ya", error);
      });
  }

  render() {
    console.log(this.state.menus);
    const { menus } = this.state;
    return (
      <div className="App">
        <NavbarComponent />
        <div className="mt-3">
          <Container fluid>
            <Row>
              <ListCategories />
              <Col>
                <h4>
                  <strong>Daftar Produk</strong>
                </h4>
                <hr />
                <Row>
                  {menus.map((menu) => (
                    <h2>{menu.nama}</h2>
                  ))}
                </Row>
              </Col>
              <Hasil />
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
