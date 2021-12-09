import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

//Component Import
import Home from './home' ;
import Horoscope from './horoscope';
import Sign from './sign';
import './style.css'

class App extends React.Component {
    render() {  
      return (
        <div className='App'>
              
			<Router>
				<div>
					<Link to = '/'><button className="nav-button">Home</button></Link>
					<Link to = '/daily'><button className="nav-button">Daily Horoscope</button></Link>
					<Link to = '/weekly'><button className="nav-button">Weekly Horoscope</button></Link>
					<Link to = '/monthly'><button className="nav-button">Monthly Horoscope</button></Link>
					<Link to = '/sign'><button className="nav-button">Zodiac Signs</button></Link>
					<Route exact path = '/' component={Home}/>
					<Route path = '/daily'  component={() => <Horoscope text="" daily />}/>
					<Route path = '/weekly'  component={() => <Horoscope text="" weekly />}/>
					<Route path = '/monthly'  component={() => <Horoscope text="" monthly />}/>
					<Route path = '/sign'  component={Sign}/>
				</div>
			</Router>
        </div>
      );
    }
}
export default App;
