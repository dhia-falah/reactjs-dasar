import React from 'react'
import NavbarComponent from './NavbarComponent'
import Toko from './Toko'
import Formulir from './Formulir'


export default class Crud extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            bukus : [],
            nama : "",
            qty : "",
            harga : "",
            id : "",
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(this.state.id === "") {
            this.setState({
                bukus: [
                    ...this.state.bukus,
                    {
                        id: this.state.bukus.length + 1,
                        nama: this.state.nama,
                        qty: this.state.qty,
                        harga: this.state.harga
                    },
                ],
            });
        } else {
            const bukuYangSelainDiPilih = this.state.bukus.filter((buku) => buku.id !== this.state.id)
            .map((filterBuku) => {
                return filterBuku
            });
            this.setState({
                bukus: [
                    ...bukuYangSelainDiPilih,
                    {
                        id: this.state.bukus.length + 1,
                        nama: this.state.nama,
                        qty: this.state.qty,
                        harga: this.state.harga
                    },
                ],
            });
        }
 

        this.setState({
            nama : "",
            qty : "",
            harga: "0",
            id : "",
        })
    }

    editData = (id) => {
        const bukuYangDiPilih = this.state.bukus
        .filter((buku) =>buku.id === id)
        .map((filterBuku) => {
            return filterBuku
        })
        this.setState({
            nama : bukuYangDiPilih[0].nama,
            qty : bukuYangDiPilih[0].qty,
            harga : bukuYangDiPilih[0].harga,
            id : bukuYangDiPilih[0].id
        })
    }

    hapusData = (id) => {
        const bukuBaru = this.state.bukus
        .filter((buku) => buku.id !== id)
        .map((filterBuku) => {
            return filterBuku
        })
        this.setState({
            bukus : bukuBaru
        })
    }
    totalBayar = (id) => {
        const totalBayar = this.state.bukus
        .filter((buku) => buku.id === id)
        .map((filterBuku) => {
            return filterBuku
        })
    }

    render() {
        return (
            <div>
                <NavbarComponent/>
                <div className="container mt-4">
                <Toko bukus={this.state.bukus} editData={this.editData} hapusData={this.hapusData}/>
                <Formulir {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                </div>
            </div>
        )
    }
}