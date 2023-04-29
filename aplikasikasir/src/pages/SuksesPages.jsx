import React from "react";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const SuksesPages = () => {
  return (
    <div className="mt-4 text-center">
      <Image src="src/assets/images/sukses.png" width={500} />
      <h2>Pesanan Berhasil</h2>
      <h4>Terima kasih sudah memesan!</h4>
      <br />
      <Button variant="primary" as={Link} to="/">
        Kembali
      </Button>
    </div>
  );
};

export default SuksesPages;
