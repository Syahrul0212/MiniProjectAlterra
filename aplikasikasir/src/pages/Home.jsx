import React, { useState, useEffect } from "react";
import { ListCategories, Hasil, Menus, NavbarComponent } from "../components";
import { Col, Container, Row } from "react-bootstrap";
import { API_URL } from "../utils/constants";
import axios from "axios";
import swal from "sweetalert";

const Home = (props) => {
  const [menus, setMenus] = useState([]);
  const [categoriYangDipilih, setCategoriYangDipilih] = useState("Makanan");
  const [keranjangs, setKeranjangs] = useState([]);
  
  const getListKeranjang = () => {
    axios
      .get(API_URL + "keranjangs")
      .then((res) => {
        const keranjangs = res.data;
        setKeranjangs(keranjangs);
      })
      .catch((error) => {
        console.log("Error ya", error);
      });
  };

  useEffect(() => {
    axios
      .get(API_URL + "products?category.nama=" + categoriYangDipilih)
      .then((res) => {
        const menus = res.data;
        setMenus(menus);
      })
      .catch((error) => {
        console.log("Error ya", error);
      });
    getListKeranjang();
  }, [categoriYangDipilih]);

  const changeCategory = (value) => {
    setCategoriYangDipilih(value);
    setMenus([]);
    axios
      .get(API_URL + "products?category.nama=" + value)
      .then((res) => {
        const menus = res.data;
        setMenus(menus);
      })
      .catch((error) => {
        console.log("Error ya", error);
      });
  };

  const masukKeranjang = (value) => {
    axios
      .get(API_URL + "keranjangs?product.id=" + value.id)
      .then((res) => {
        if (res.data.length === 0) {
          const keranjang = {
            jumlah: 1,
            total_harga: value.harga,
            product: value,
          };
          axios
            .post(API_URL + "keranjangs", keranjang)
            .then((res) => {
              getListKeranjang();
              swal({
                title: "Sukses Masuk Keranjang",
                text: "Berhasil Ditambakan! " + keranjang.product.nama,
                icon: "success",
                button: false,
                timer: 1500,
              });
            })
            .catch((error) => {
              console.log("Error ya", error);
            });
        } else {
          const keranjang = {
            jumlah: res.data[0].jumlah + 1,
            total_harga: res.data[0].total_harga + value.harga,
            product: value,
          };

          axios
            .put(API_URL + "keranjangs/" + res.data[0].id, keranjang)
            .then((res) => {
              swal({
                title: "Sukses Masuk Keranjang",
                text: "Berhasil Ditambakan! " + keranjang.product.nama,
                icon: "success",
                button: false,
                timer: 1500,
              });
            })
            .catch((error) => {
              console.log("Error ya", error);
            });
        }
      })
      .catch((error) => {
        console.log("Error ya", error);
      });
  };

  return (
    <div>
      <NavbarComponent />
      <Container fluid className="mt-3">
        <Row>
          <ListCategories changeCategory={changeCategory} categoriYangDipilih={categoriYangDipilih} />
          <Col className="mt-3">
            <h4>
              <strong>Daftar Produk</strong>
            </h4>
            <hr />
            <Row className="overflow-auto menu">
              {menus.map((menu) => (
                <Menus key={menu.id} menu={menu} masukKeranjang={masukKeranjang} />
              ))}
            </Row>
          </Col>
          <Hasil keranjangs={keranjangs} {...props} getListKeranjang={getListKeranjang} />
        </Row>
      </Container>
    </div>
  );
};

export default Home;
