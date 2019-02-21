import React, {Component} from 'react';
import Select from './Select'
import Clocks from "./Clocks";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../../node_modules/jquery/dist/jquery.min";
import "./../../node_modules/popper.js/dist/umd/popper.min";
import "./../../node_modules/bootstrap/dist/js/bootstrap.min";


class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            select: "",
            submit: false,
            zones: []
        };
    }
    handleChangeSelect(e) {
        let select = e.target.value;
        this.setState({select: select, submit: true});
    }
    handleOnSubmit(e) {
        e.preventDefault();
        this.setState({zones: [...this.state.zones, this.state.select], select: "", submit: false});
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
                            <Clocks zones={this.state.zones}/>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Clock;
