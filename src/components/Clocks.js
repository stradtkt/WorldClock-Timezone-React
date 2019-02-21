import React, {Component} from 'react';
import moment from "moment-timezone";

class Clocks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zones: this.props.zones
        };
    }
    seconds() {
        this.setState({
            zones: this.props.zones
        })
    }
    componentDidMount() {
        this.interval = setInterval(() => this.seconds(), 1000);
    }
    componentWillMount() {
        clearInterval(this.interval);
    }
    close(index) {
        this.props.zones.splice(index, 1);
    }

    render() {
        var clock = this.state.zones.map((zone, index) => {
            return (
                <div className="clock" key={index}>
                    <h4>{zone}</h4>
                    <p>{moment().tz(zone).format("h:mm:ss A")}</p>
                    <button type="button" className="btn btn-primary" onClick={() => this.close(index)}>Close</button>
                </div>
            );
        });
        return clock;
    }
}

export default Clocks;
