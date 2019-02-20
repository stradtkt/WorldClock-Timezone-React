import React, {Component} from 'react';
import moment from 'moment-timezone';
import PropTypes from 'prop-types';
import Select from './Select'



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
        let select = e.target.value;
        this.setState({select: select, submit: true});
    }
    handleOnSubmit(e) {
        e.preventDefault();
        this.setState({tz: [...this.state.tz, this.state.select], select: "", submit: false});
    }
    render() {
        return (
            <main className="Clock">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <form onSubmit={this.handleOnSubmit.bind(this)}>
                                <div className="form-group">
                                    <select onChange={this.handleChangeSelect.bind(this)} value={this.state.select}>
                                        <Select/>
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
