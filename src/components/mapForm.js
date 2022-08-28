import React from "react";

class MapForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numOfFavourites: 0
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.getLocationData}>
                    <input type="text" name="city" placeholder='Enter a city' />
                    <button type='submit'>Submit</button>
                </form>

                <h3>Display name : {this.state.display_name}</h3>
                <p>Lon : {this.state.lon}</p>
                <p>Lat : {this.state.lat}</p>

                {this.state.mapFlag && <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.637492fdd4a7f59fba1ddb9edbd7be9d&center=${this.state.lat},${this.state.lon}`}></img>}
                {this.state.errFlag && <h4>Error : sorry something went wrong!</h4>}
            </div>
        )
    }
}

export default MapForm;