// import React, { Component } from 'react';
// import { Navbar, NavbarBrand } from 'reactstrap';
// import './App.css';
// import Directory from './components/DirectoryComponent';
// import { CAMPSITES } from './shared/campsites';

// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             campsites: CAMPSITES
//         };
//     }
//     render() {
//         return (
//             <div className="App">
//                 <Navbar dark color="primary">
//                 <div className="container">
//                     <NavbarBrand href="/">NuCamp</NavbarBrand>
//                 </div>
//                 </Navbar>
//                 <Directory campsites={this.state.campsites} />
//             </div>
//         );
//     }
// }

// export default App;
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './components/MainComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';


const store = ConfigureStore();

class App extends Component {
    render() {
       
        return (
            
            <Provider store={store}>
            <BrowserRouter>
                <div className="App">
                    <Main />
                </div>
            </BrowserRouter>
        </Provider>
           
        );
    };
}

export default App;
