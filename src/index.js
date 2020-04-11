import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home';
import Projects from './projects';
import About from './about';
import Contact from './contact'
import * as serviceWorker from './serviceWorker';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import StylesProvider from '@material-ui/styles/StylesProvider';

class FullpageWrapper extends React.Component {
    render() {
        return (
            <ReactFullpage
                responsiveWidth={900}
                render={() => {
                    return (

                        <div id="fullpage-wrapper">
                            <div className="section page"><Home /></div>
                            <div className="section page"><About /></div>
                            <div className="section page"><Projects /></div>
                        </div>
                    );
                }}
            />
        );
    }
}



let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

ReactDOM.render(<StylesProvider injectFirst><ThemeProvider theme={theme}><FullpageWrapper /></ThemeProvider></StylesProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();