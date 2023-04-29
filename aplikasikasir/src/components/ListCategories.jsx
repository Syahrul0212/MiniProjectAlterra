import React, { Component } from "react";
import { Col, ListGroup } from "react-bootstrap";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faCoffee, faCheese } from "@fortawesome/free-solid-svg-icons";

const ICon = ({ nama }) => {
  if (nama === "Makanan") return <FontAwesomeIcon icon={faUtensils} className="me-2" />;
  if (nama === "Minuman") return <FontAwesomeIcon icon={faCoffee} />;
  if (nama === "Cemilan") return <FontAwesomeIcon icon={faCheese} className="me-2" />;

  return <FontAwesomeIcon icon={faUtensils} className="me-2" />;
};
export default class ListCategories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3000/categories`)
      .then((res) => {
        const categories = res.data;
        this.setState({ categories });
      })
      .catch((error) => {
        console.log("Error ya", error);
      });
  }

  render() {
    const { categories } = this.state;
    const { changeCategory, categoriYangDipilih } = this.props;

    return (
      <Col md={2} mt="2">
        <h4>
          <strong>Daftar Menu</strong>
        </h4>
        <hr />
        <ListGroup>
          {categories.map((category) => (
            <ListGroup.Item 
            key={category.id} 
            onClick={() => changeCategory(category.nama)} 
            className={categoriYangDipilih === category.nama && "category-aktif"}>
              <h5>
                <ICon nama={category.nama} /> {category.nama}
              </h5>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
    );
  }
}
