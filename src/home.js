import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

class Home extends React.Component{
	
	constructor(props){
		super(props);
		this.generateNumbers = this.generateNumbers.bind(this);
		this.state = {  health : '',
						romance: '',
						career: '',
						finances: '',
						day_options : ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'],
						day_defaultOption : 'Day',
						month_options : ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
						month_defaultOption : 'Month',
						month : '' ,
						day : '',
						sign:''};
		this._onSelect_month = this._onSelect_month.bind(this)
		this._onSelect_day = this._onSelect_day.bind(this)

	}
	
	
	 _onSelect_month (option) {
    this.setState({month: option.label})
	console.log(this.state.month)
    }
	
	 _onSelect_day (option) {
    this.setState({day: option.label})
    }
	
	generateNumbers(){
		var numbers = [5,6,7,8,9,10];
		//the random number generator is from https://stackoverflow.com/questions/5915096/get-random-item-from-javascript-array
		var n_health = numbers[Math.floor(Math.random() * numbers.length)];
		var n_romance = numbers[Math.floor(Math.random() * numbers.length)];
		var n_career = numbers[Math.floor(Math.random() * numbers.length)];
		var n_finances = numbers[Math.floor(Math.random() * numbers.length)];
		this.setState({health : n_health + "/10"});
		this.setState({romance : n_romance + "/10"});
		this.setState({career : n_career + "/10"});
		this.setState({finances : n_finances+ "/10"});
	
	}
	
	
	
	findSign(month, day){
		console.log(month);
		console.log(day);
		
		if(month === "Apr"){
			if(day < 19){this.setState({sign: "You are an Aries!"})}
			else{this.setState({sign: "You are a Taurus!"})}
		}
		
		if(month === "May"){
			if(day < 20){this.setState({sign: "You are a Taurus!"})}
			else{this.setState({sign: "You are a Gemini!"})}
		}
		if(month === "Jun"){
			if(day < 20){this.setState({sign: "You are a Gemini!"})}
			else{this.setState({sign: "You are a Cancer!"})}
		}
		if(month === "Jul"){
			if(day < 22){this.setState({sign: "You are a Cancer!"})}
			else{this.setState({sign: "You are a Leo!"})}
		}
		if(month === "Aug"){
			if(day < 22){this.setState({sign: "You are a Leo!"})}
			else{this.setState({sign: "You are a Virgo!"})}
		}
		if(month === "Sep"){
			if(day < 22){this.setState({sign: "You are a Virgo!"})}
			else{this.setState({sign: "You are a Libra!"})}
		}
		if(month === "Oct"){
			if(day < 22){this.setState({sign: "You are a Libra!"})}
			else{this.setState({sign: "You are a Scorpio!"})}
		}
		if(month === "Nov"){
			if(day < 21){this.setState({sign: "You are a Scorpio!"})}
			else{this.setState({sign: "You are a Saggitarius!"})}
		}
		if(month === "Dec"){
			if(day < 21){this.setState({sign: "You are a Sagittarius!"})}
			else{this.setState({sign: "You are a Capricorn!"})}
		}
		if(month === "Jan"){
			if(day < 19){this.setState({sign: "You are a Capricorn!"})}
			else{this.setState({sign: "You are an Aquarius!"})}
		}
		if(month === "Feb"){
			if(day < 18){this.setState({sign: "You are an Aquarius!"})}
			else{this.setState({sign: "You are a Pisces!"})}
		}
		if(month === "Mar"){
			if(day < 20){this.setState({sign: "You are a Pisces!"})}
			else{this.setState({sign: "You are an Aries!"})}
		}
		
	       		
	};
	
	render(){
		return (
			<div>
				<h1>How Lucky Are You Today?</h1>
				<table>
					<tbody>
						<tr>
							<td>Health</td>
							<td>{this.state.health}</td>
						</tr>
						<tr>
							<td>Romance</td>
							<td>{this.state.romance}</td>
						</tr>
						<tr>
							<td>Career</td>
							<td>{this.state.career}</td>
						</tr>
						<tr>
							<td>Finances</td>
							<td>{this.state.finances}</td>
						</tr>
						<tr>
							<td>
								<button className="home-button" onClick={this.generateNumbers}>Click Here!</button>
							</td>
						</tr>
						
					</tbody>
				</table>
				<h1>Find Your Sign</h1>
				<Dropdown className="dropdown" options={this.state.month_options} onChange = {this._onSelect_month} value={this.state.month_defaultOption}  />
				<Dropdown className="dropdown" options={this.state.day_options} onChange = {this._onSelect_day} value={this.state.day_defaultOption} placeholder="Select an option" />
				<p><button className="home-button" onClick={() => this.findSign(this.state.month, this.state.day)}>Click Here!</button></p>
				
				<h1>{this.state.sign}</h1>
			</div>
		);
		}
};
export default Home;
