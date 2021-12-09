import React from 'react';

class Sign extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			banner : "Signs Characteristics and Personality Traits",
			start_date : "",
			end_date : "",
			planet : "",
			jobs : "",
			birthstone : "",
			compatible : "",
			non_compatible : "",
			element_ : "",
			quality : "",
			color : "",
			lucky_day : "",
			lucky_numbers : "",
			strengths : "",
			weakness : "",
			likes : "",
			dislikes : ""     
		};
	}
	
	getSign = (sign) => {
            fetch(`http://localhost:3000/sign?sign=${sign}`).then(response => {
                let data = response.json()
                data.then(data => {
                    let info = data[0];
                    
                    //Fills in Sign Info
                    this.setState({start_date: "Start Date: " + info.start_date});
                    this.setState({end_date: "End Date: " + info.end_date});
                    this.setState({planet: "Planet: " + info.planet});
                    this.setState({jobs: "Jobs: " + info.jobs});		
                    this.setState({birthstone: "Birthstone: " + info.birthstone});
                    this.setState({compatible: "Compatible Signs: " + info.compatible});
                    this.setState({non_compatible: "Non Compatible Signs: " + info.non_compatible});
                    this.setState({element_ : "Element: " + info.element});
                    this.setState({quality : "Quality: " + info.quality});
                    this.setState({color: "Color: " + info.color});
                    this.setState({lucky_day: "Lucky Day: " + info.lucky_day});
                    this.setState({lucky_numbers: "Lucky Numbers: " + info.lucky_numbers});
                    this.setState({strengths: "Strengths: " + info.strengths});
                    this.setState({weakness: "Weakness: " + info.weakness});
                    this.setState({likes: "Likes: " + info.likes});
                    this.setState({dislikes: "Dislikes: " + info.dislikes});
                    
                    //Sets up Page Banner
                    if(sign === 'aries') this.setState({banner: "Aries: Characteristics and Personality Traits!"});
                    if(sign === 'taurus') this.setState({banner: "Taurus: Characteristics and Personality Traits!"});
                    if(sign === 'gemini') this.setState({banner: "Gemini: Characteristics and Personality Traits!"});
                    if(sign === 'cancer') this.setState({banner: "Cancer: Characteristics and Personality Traits!"});
                    if(sign === 'leo') this.setState({banner: "Leo: Characteristics and Personality Traits!"});
                    if(sign === 'virgo') this.setState({banner: "Virgo: Characteristics and Personality Traits!"});
                    if(sign === 'libra') this.setState({banner: "Libra: Characteristics and Personality Traits!"});
                    if(sign === 'scorpio') this.setState({banner: "Scorpio: Characteristics and Personality Traits!"});
                    if(sign === 'sagittarius') this.setState({banner: "Sagittarius: Characteristics and Personality Traits!"});
                    if(sign === 'capricorn') this.setState({banner: "Capricorn: Characteristics and Personality Traits!"});
                    if(sign === 'aquarius') this.setState({banner: "Aquarius: Characteristics and Personality Traits!"});
                    if(sign === 'pisces') this.setState({banner: "Pisces: Characteristics and Personality Traits!"});

                    
                }
                          )})}
	
		render(){
		return (
			<div>
				<h1>{this.state.banner}</h1>
				<p className = "db-text">{this.state.start_date}</p>
				<p className = "db-text">{this.state.end_date}</p>
				<p className = "db-text">{this.state.planet}</p>
				<p className = "db-text">{this.state.jobs}</p>
				<p className = "db-text">{this.state.birthstone}</p>
				<p className = "db-text">{this.state.compatible}</p>
				<p className = "db-text">{this.state.non_compatible}</p>
				<p className = "db-text">{this.state.element_}</p>
				<p className = "db-text">{this.state.quality}</p>
				<p className = "db-text">{this.state.color}</p>
				<p className = "db-text">{this.state.lucky_day}</p>
				<p className = "db-text">{this.state.lucky_numbers}</p>
				<p className = "db-text">{this.state.strengths}</p>
				<p className = "db-text">{this.state.weakness}</p>
				<p className = "db-text">{this.state.likes}</p>
				<p className = "db-text">{this.state.dislikes}</p>
			
				<table>
					<tbody>
						<tr>
							<td>
								<button className= "sign-button"><img src="./aries1.png"  height="150px" width="150px" alt="aries" onClick={() => this.getSign("aries")}/></button>
							</td>
							<td>
								<button className= "sign-button"><img src="./taurus1.png"  height="150px" width="150px" alt="taurus" onClick={() => this.getSign("taurus")}/></button>
							</td>
							<td>
								<button className= "sign-button"><img src="./gemini1.png"  height="150px" width="150px" alt="gemini" onClick={() => this.getSign("gemini")}/></button>
							</td>
							<td>
								<button className= "sign-button"><img src="./cancer1.png"  height="150px" width="150px" alt="cancer" onClick={() => this.getSign("cancer")}/></button>
							</td>
						</tr>
						<tr>
							<td>
								<button className= "sign-button"><img src="./leo1.png" height="150px" width="150px" alt="leo" onClick={() => this.getSign("leo")}/></button>
							</td>
							<td>
								<button className= "sign-button"><img src="./virgo1.png"  height="150px" width="150px"  alt="virgo" onClick={() => this.getSign("virgo")}/></button>
							</td>
							<td>
								<button className= "sign-button"><img src="./libra1.png"  height="150px" width="150px" alt="libra" onClick={() => this.getSign("libra")}/></button>
							</td>
							<td>
								<button className= "sign-button"><img src="./scorpio1.png"  height="150px" width="150px" alt="scorpio" onClick={() => this.getSign("scorpio")}/></button>
							</td>
						</tr>
						<tr>
							<td>
								<button className= "sign-button"><img src="./sagittarius1.png"  height="150px" width="150px" alt="sagittarius" onClick={() => this.getSign("sagittarius")}/></button>
							</td>
							<td>
								<button className= "sign-button"><img src="./capricorn1.png"  height="150px" width="150px" alt="capricorn" onClick={() => this.getSign("capricorn")}/></button>
							</td>
							<td>
								<button className= "sign-button"><img src="./aquarius1.png"  height="150px" width="150px" alt="aquarius" onClick={() => this.getSign("aquarius")}/></button>
							</td>
							<td>
								<button className= "sign-button"><img src="./pisces1.png"  height="150px" width="150px" alt="pisces" onClick={() => this.getSign("pisces")}/></button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
		}
};
export default Sign;
