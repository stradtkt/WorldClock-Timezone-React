import React, {Component} from 'react';
import moment from "moment-timezone";

class Select extends Component {
    render() {
        var z = [];
        var zones = moment.tz.names();
        z.push(<option value="" key={"select"} disabled>Select a timezone</option>);
        zones.map((zone, index) => {
          return (z.push(<option value={zone} key={index}>{zone}</option>));
        });
        return z;
    }
}

export default Select;
