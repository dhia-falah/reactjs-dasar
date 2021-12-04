import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "./Toko.css"

const Formulir = ({nama, qty, harga,handleChange,handleSubmit,id}) => {
  return (
    <div className="mt-3">
    
      <Row>
        <Col>
        <h2>{id ? "Edit Data" : "Tambah Data"}</h2>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="nama">
              <Form.Label>Merek Mobil</Form.Label>
              <Form.Control type="text" name="nama" value={nama} 
              onChange={(event) => handleChange(event)}required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="qty">
              <Form.Label>QTY</Form.Label>
              <Form.Control type="number" name ="qty" value={qty}
              onChange={(event) => handleChange(event)}required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="harga">
                <Form.Label>Harga</Form.Label>
              <Form.Control type="number" name="harga" value={harga}
              onChange={(event) => handleChange(event)}required/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Formulir;
