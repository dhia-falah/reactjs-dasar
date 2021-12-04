import React from 'react'

export default class StateProps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobil : 'Avantador ' + ',Hyundai ' + ',Bugatti'
        }
    }
    gantiMobil = (mobil_baru) => {
        this.setState({
            mobil: mobil_baru
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.mobil}</h2>
                <button onClick={() => this.gantiMobil("Avantador,Hyundai")}>Ganti Mobil</button>

            </div>
        )
    }
}