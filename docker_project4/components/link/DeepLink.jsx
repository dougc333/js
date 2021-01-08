import React from 'react';
import Example from '../example/Example';
import States from '../states/States';
import './DeepLink.css';

import { HashRouter, Route,Link } from 'react-router-dom';


class DeepLink extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div >
                <HashRouter >
                    <div className="linkGroupStyle">
                        <div className="linkStyle">
                            <Link className="l" to='/state' >State</Link>
                        </div>
                        <div className="linkStyle">
                            <Link className="l" to='/example' >Example</Link>
                        </div>
                        
                    </div>
                    <div>
                        <Route path='/state' component={States}></Route>
                        <Route path='/example' component={Example}></Route>
                    </div>
                </HashRouter>
            </div>



        );
    }

}

export default DeepLink;


