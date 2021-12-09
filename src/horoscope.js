//Horoscope Component
import React from 'react';

class Horoscope extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        text: "",
        api: "",
        page: ""
        };
    };
    
   componentDidMount() {
        const {daily, weekly, monthly} = this.props;
        
        if(daily) this.setState({text: "Find out your horoscope for the day!", page:"daily"});
        
        if(weekly) this.setState({text: "Find out your horoscope for the week!", page: "weekly"});
        
        if(monthly) this.setState({text: "Find out your horoscope for the month!", page:"monthly"});
    }
    
    getHoroscope = (sign) => {
        if(this.state.page === "daily") {
            fetch(`http://localhost:3000/daily?sign=${sign}`).then(response => {
             if (response.status === 200) {
                let data = response.json()
                data.then(data => {
                    let horoscope = data.horoscope
                    let h_len = horoscope.length
                    if (horoscope[0] === '[') {
                        horoscope = horoscope.slice(2,h_len-2)
                    }
                    this.setState({api: horoscope})
                })
             }
             else {
                 this.setState({api: "There has been an error. Please Try again later."})
                 
             }
                })
        } 
        else if(this.state.page === "weekly") {
         fetch(`http://localhost:3000/weekly?sign=${sign}`).then(response => {
             if (response.status === 200) {
                let data = response.json()
                data.then(data => {
                    let horoscope = data.horoscope
                    let h_len = horoscope.length
                    if (horoscope[0] === '[') {
                        horoscope = horoscope.slice(2,h_len-2)
                    }
                    this.setState({api: horoscope})
                })
             }
             else {
                 this.setState({api: "There has been an error. Please Try again later."})
                 
             }
                })    
        }
        else if(this.state.page === "monthly") {
         fetch(`http://localhost:3000/monthly?sign=${sign}`).then(response => {
             if (response.status === 200) {
                let data = response.json()
                data.then(data => {
                    let horoscope = data.horoscope
                    let h_len = horoscope.length
                    if (horoscope[0] === '[') {
                        horoscope = horoscope.slice(2,h_len-2)
                    }
                    this.setState({api: horoscope})
                })
             }
             else {
                 this.setState({api: "There has been an error. Please Try again later."})
                 
             }
                })
            }    
        }

   render() {
        return (
        <div><h1>{this.state.text}</h1>
        <p className="api-text">{this.state.api}</p>
        <table>
            <tbody>
            <tr>
                <td>
                    <button className= "horoscope-button"><img src="./aries.png" height="120px" width="120px" alt="aries" onClick={() => this.getHoroscope("aries")} /></button>
                </td>
                <td>
                    <button className= "horoscope-button"><img src="./taurus.png" height="120px" width="120px" alt="taurus" onClick={() =>this.getHoroscope("taurus")} /></button>
                </td>
                <td>
                    <button className= "horoscope-button"><img src="./gemini.png" height="120px" width="120px" alt="gemini" onClick={() =>this.getHoroscope("gemini")} /></button>
                </td> 
                <td>
                    <button className= "horoscope-button"><img src="./cancer.png" height="120px" width="120px" alt="cancer" onClick={() =>this.getHoroscope("cancer")} /></button>
                </td>
                <td>
                    <button className= "horoscope-button"><img src="./leo.png" height="120px" width="120px" alt="leo" onClick={() =>this.getHoroscope("leo")} /></button>
                </td>
                <td>
                    <button className= "horoscope-button"><img src="./virgo.png" height="120px" width="120px" alt="virgo" onClick={() =>this.getHoroscope("virgo")} /></button>
                </td>
            </tr>
            <tr>
                <td>
                    <button className= "horoscope-button"><img src="./libra.png" height="120px" width="120px" alt="libra" onClick={() =>this.getHoroscope("libra")} /></button>
                </td>
                <td>
                    <button className= "horoscope-button"><img src="./scorpio.png" height="120px" width="120px" alt="scorpio" onClick={() =>this.getHoroscope("scorpio")} /></button>
                </td>
                <td>
                    <button className= "horoscope-button"><img src="./sagittarius.png" height="120px" width="120px" alt="sagittarius" onClick={() =>this.getHoroscope("sagittarius")} /></button>
                </td>
                <td>
                    <button className= "horoscope-button"><img src="./capricorn.png" height="120px" width="120px" alt="capricorn" onClick={() =>this.getHoroscope("capricorn")} /></button>
                </td>
                <td>
                    <button className= "horoscope-button"><img src="./aquarius.png" height="120px" width="120px" alt="aquarius" onClick={() =>this.getHoroscope("aquarius")} /></button>
                </td>
                <td>
                    <button className= "horoscope-button"><img src="./pisces.png" height="120px" width="120px" alt="pisces" onClick={() =>this.getHoroscope("pisces")} /></button>
                </td>
            </tr>
            </tbody>
        </table>
            </div>);
    }
};
export default Horoscope;


