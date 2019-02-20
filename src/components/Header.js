import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <header className="Header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center">World Clock</h1>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
