import React from 'react'
import {Table} from 'react-bootstrap'
import './Toko.css'

const Mobils = [
  {
      nama: 'lamborghini aventador',
      qty: 5,
      harga: 87000000000   
  },
  {
      nama: 'Lamborghini Huracan',
      qty: 5,
      harga: 89000000000    
  },
  {
      nama: 'Ferrari 488 GTB.',
      qty: 5,
      harga: 10000000000     
  },
  {
      nama: 'Ferrari 488 Pista',
      qty: 5,
      harga: 7000000000 
  },
  {
      nama: 'Hyundai Creta',
      qty: 5,
      harga: 3975000000
  },
  {
      nama: 'Hyundai Palisade',
      qty: 5,
      harga: 11000000000
  },
  {
      nama: 'Hyundai Ioniq',
      qty: 5,
      harga: 677000000  
  },
  {
      nama: 'Audi A5',
      qty: 5,
      harga: 144000000000  
  },
  {
      nama: 'Audi R8',
      qty: 5,
      harga: 85000000000
  },
  {
      nama: 'Lamborghini Urus',
      qty: 5,
      harga:  85000000000
  }
]
const total_bayar = Mobils.reduce((total_harga, mobil) => total_harga+mobil.harga, 0);

const Tabel = () => {
    return (
      <div>
        <all>
        <h2>MY CAR</h2>
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>No</th>
      <th>Nama </th>
      <th>QTY</th>
      <th>Harga </th>
      <th>Total Harga</th>
    </tr>
  </thead>
  <tbody>
      {Mobils.map((mobil, index) =>(
            <tr>
            <td>{index + 1}</td>
            <td>{mobil.nama}</td>
            <td>{mobil.qty}</td>
            <td>{mobil.harga}</td>
            <td>{mobil.qty*mobil.harga}</td>
          </tr>
      
      ))}
  </tbody>
</Table>
<div style={{ border: 10 }}>
<h5>Total Bayar : Rp{total_bayar}</h5>
      <hr/>
</div>
      <br/>
<Table striped bordered hover>
    <h4>Map Filter Harga yang lebih dari 14 Bilion</h4>
      {Mobils.filter((mobil) => mobil.harga > 14000000000).map((mobil, index) =>(
        <p>{index + 1}.{mobil.nama} Rp {mobil.harga}</p>
      ))}
      </Table>
      </all>
    </div>
  )
}

export default Tabel;