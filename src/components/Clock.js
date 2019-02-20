import React, {Component} from 'react';
import moment from 'moment-timezone';
import PropTypes from 'prop-types';




class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            select: "",
            submit: false,
            tz: []
        };
    }
    handleChangeSelect(e) {

    }
    render() {
        return (
            <main className="Clock">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <form onSubmit={handleChangeTimeZone}>
                                <div className="form-group">
                                    <select name="timezone" id="time-zone-select" className="form-control">
                                        <option value="location">Location 1</option>
                                        <option value="location">Location 2</option>
                                        <option value="location">Location 3</option>
                                        <option value="location">Location 4</option>
                                    </select>
                                </div>
                                <input type="submit" value="Select Timezone" className="btn btn-primary btn-block"/>
                            </form>
                        </div>
                        <div className="col-md-8">

                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

Clock.propTypes = {
    tz: PropTypes.string.isRequired
};

Clock.defaultProps = {
    tz: 'Asia/Jerusalem',
};

export default Clock;
