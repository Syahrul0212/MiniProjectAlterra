import React from "react";
import { Col, Card } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";

const Menus = ({ menu, masukKeranjang }) => {
  return (
    <Col md={4} xs={6} className="mb-4">
      <Card className="card-menus shadow" onClick={() => masukKeranjang(menu)}>
        <Card.Img variant="top" src={"src/assets/images/" + menu.category.nama.toLowerCase() + "/" + menu.gambar} />
        <Card.Body>
          <Card.Title>{menu.nama}</Card.Title>
          <Card.Text>
            <strong>{menu.kode}</strong>
          </Card.Text>
          <Card.Text>Rp. {numberWithCommas(menu.harga)}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Menus;
