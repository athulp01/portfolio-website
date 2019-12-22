import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home';
import Projects from './projects';
import About from './about';
import * as serviceWorker from './serviceWorker';
import './App.css'
import Bounce from 'react-reveal/Zoom'
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import StylesProvider from '@material-ui/styles/StylesProvider';
import Divider from '@material-ui/core/Divider';


let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

ReactDOM.render(
    <StylesProvider injectFirst>
    <ThemeProvider theme={theme}>
    <Bounce>
        <div className="page"><Home/></div>
    </Bounce>
    <hr style={{marginTop:20}}></hr>
    <Divider variant="middle" light={true}/>
    <div className="page">
        <About/>
    </div>
    <hr></hr>
    <Divider variant="middle"/>
    <div className="page">
        <Projects/>
    </div>
    <Divider variant="middle"/>
    </ThemeProvider>
    </StylesProvider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();