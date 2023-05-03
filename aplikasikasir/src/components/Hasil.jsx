import React from "react";
import { Badge, Col, ListGroup, Row } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";
import TotalBayar from "./TotalBayar";

const Hasil = (props) => {
  const { keranjangs } = props;

  return (

    <Col md={3} mt="2">
      <h4>
        <strong>List Pembelian</strong>
      </h4>
      <hr />
      {keranjangs && keranjangs.length !== 0 && (
        <ListGroup variant="flush">
          {keranjangs.map((menuKeranjang, index) => (
            <ListGroup.Item key={index}>
              <Row>
                <Col xs={2}>
                  <h4>
                    <Badge pill bg="success">
                      {menuKeranjang.jumlah}
                    </Badge>
                  </h4>
                </Col>
                <Col>
                  <h5>{menuKeranjang.product.nama}</h5>
                  <p>Rp. {numberWithCommas(menuKeranjang.product.harga)}</p>
                </Col>
                <Col>
                  <strong className="float-end">Rp. {numberWithCommas(menuKeranjang.total_harga)}</strong>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
      <TotalBayar keranjangs={keranjangs} {...props} />
    </Col>
  );
};

export default Hasil;
