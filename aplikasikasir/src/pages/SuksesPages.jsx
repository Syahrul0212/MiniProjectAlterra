import React, { useEffect } from "react";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NavbarComponent } from "../components";
import axios from "axios";
import { API_URL } from "../utils/constants";

const SuksesPages = () => {
  useEffect(() => {
    axios
      .get(API_URL + "keranjangs")
      .then((res) => {
        const keranjangs = res.data;
        keranjangs.map(function (item) {
          return axios
            .delete(API_URL + "keranjangs/" + item.id)
            .then((res) => console.log(res))
            .catch((error) => console.log(error));
        });
      })
      .catch((error) => {
        console.log("Error ya", error);
      });
  }, []);

  return (
    <>
      <NavbarComponent />
      <div className="mt-4 text-center">
        <Image src="src/assets/images/sukses.png" width={500} />
        <h2>Pesanan Berhasil</h2>
        <h4>Terima kasih sudah memesan!</h4>
        <br />
        <Button variant="primary" as={Link} to="/">
          Kembali
        </Button>
      </div>
    </>
  );
};

export default SuksesPages;
