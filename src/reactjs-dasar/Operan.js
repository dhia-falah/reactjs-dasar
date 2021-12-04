import React from 'react'

export default class Operan extends React.Component{
    gantiMobil = (mobil_baru) => {
    this.setState({
        mobil: mobil_baru
    })
}
    render() {
        return (
            <div>
                <h2>Operan State yang menjadi Props : {this.props.mobil}</h2>
                <button onClick={() => this.gantiMobil("Avantador, Hyundai")}>Ganti Makanan</button>
            </div>
        )
    }
}