import React from "react";
import MapForm from "./mapForm";


class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            display_name: '',
            lat: '',
            lon: '',
            errFlag: false,
            mapFlag: false
        }
    }

    getLocationData = async (event) => {
        event.preventDefault();
        const cityName = event.target.city.value;
        //send request to the third party
        const key = 'pk.637492fdd4a7f59fba1ddb9edbd7be9d';
        const URL = `https://us1.locationiq.com/v1/search?key=${key}&q=${cityName}&format=json`

        try {
            let resResult = await axios.get(URL);
            this.setState({
                display_name: resResult.data[0].display_name,
                lat: resResult.data[0].lat,
                lon: resResult.data[0].lon,
                mapFlag: true
            })
        }
        catch
        {
            console.log('err');
            this.setState({
                errFlag: true
            })
        }
        render() {
            return (
                <div>
                    <MapForm displayName={this.state.display_name} lat={this.state.lat} lon={this.state.lon} errFlag={this.state.errFlag} mapFlag={this.state.mapFlag} getLocation={this.getLocationData} />
                </div>
            )
        }
    }
}
export default Main;