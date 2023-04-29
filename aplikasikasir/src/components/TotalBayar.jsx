import React from "react";
import { Col, Row } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";

function TotalBayar(props) {
  // console.log("Total bayar",props.keranjangs);
  // const dataKeranjangs = props.keranjangs;
  const totalBayar = props.keranjangs?.reduce(function (result, item) {
    return result + item.total_harga;
  }, 0);
  return (
    <div className="fixed-bottom">
      <Row>
        <Col md={{ span: 3, offset: 9 }} className="px-4">
          <h4>Total Harga : Rp. {totalBayar}</h4>
        </Col>
      </Row>
    </div>
  );
}

export default TotalBayar;
