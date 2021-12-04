import React from "react"; 
import { Table } from "react-bootstrap"; 
import './Toko.css'



const tabel = ({bukus, editData, hapusData}) => { 
  return ( 
    <div>
        <h1>Welcome To MY CAR</h1>
    <Table striped bordered hover> 
      <thead>
        <tr> 
          <th>No</th> 
          <th>Nama</th> 
          <th>QTY</th> 
          <th>Harga </th> 
          <th>Total Harga</th>
          <th>Aksi</th> 
        </tr> 
      </thead> 
      <tbody> 
          {bukus.map((buku,index) => {
              return(
        <tr key={index}> 
          <td>{index + 1}</td> 
          <td>{buku.nama}</td> 
          <td>{buku.qty}</td> 
          <td>Rp{buku.harga}</td> 
          <td>Rp{buku.qty*buku.harga}</td>
          <td>
          <button className="btn btn-warning mr-1" onClick={() => editData(buku.id) }>Edit</button>&nbsp;
            <button className="btn btn-warning mr-1" onClick={() => hapusData(buku.id) }>Hapus</button>

          </td>
        </tr> 
        );
        })}
      </tbody> 
    </Table> 
        <h3>total bayar:</h3>
    </div>
  ); 
}; 
 
export default tabel;