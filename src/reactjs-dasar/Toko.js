import React from 'react'

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

const Toko = () => {
    return (
        <div>
            <h2>MY CAR</h2>
            <table>
                <thead>
                    <th>No</th>
                    <th>Nama</th>
                    <th>QTY</th>
                    <th>Harga</th>
                    <th>Total Harga</th>
                </thead>
                <tbody>
                    {Mobils.map((mobil, index) =>(
                        <tr>
                        <td>{index + 1}</td>
                        <td>{mobil.nama}</td>
                        <td>{mobil.qty}</td>
                        <td>Rp{mobil.harga}</td>
                        <td>Rp{mobil.qty*mobil.harga}</td>
                        </tr>
                        ))}
                </tbody>
            </table>

            <h4>Map Filter Harga yang lebih dari 14 Bilion</h4>
            <ul>
                {Mobils.filter((mobil) => mobil.harga > 14000000000).map((mobil, index) =>(
                    <p>{index + 1}.{mobil.nama} Rp {mobil.harga}</p>
                ))}
            </ul>
            <h4>Total Bayar : {total_bayar}</h4>
        </div>
    )
} 

export default Toko
