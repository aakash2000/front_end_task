import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import OnRobot_RG2 from "../OnRobot_RG2.jpg";
import OnRobot_RG3 from "../OnRobot_RG2-2.jpg";
import OnRobot_RG4 from "../OnRobot_RG2-3.jpg";
import logo_svg from "../logo_unchained-robotics_lightgrey.svg";
import '../App.css';
import  { Component } from 'react'
import ReactPlayer from 'react-player'

function handleChange(event) {
	if (event.target.value!=""){
		document.getElementById("price").innerHTML = event.target.value+' \u20AC';
	} else {
		document.getElementById("price").innerHTML = "";
	}
    
}

const sampleJSON = {
  "arrOfObjects": [{ "a": "High flexibility", "b": "Ready-to-use, customizable solution. Use one tool for various applications" }, 
  					{ "a": "A simplified software system", "b": "Easy deployment minimizes technician time" },
  					{ "a": "Flexibility in production", "b": "Round-the-clock operation without hiring new employees" }],
  "arrOfVideos": [{ "a": 1, "b": 2 }, 
  					{ "a": 2, "b": 2 }],
  "arrOfSpecs": [{ "a": "Category", "b": "-" }, 
  					{ "a": "Payload", "b": "2000 g" },
  					{ "a": "Weight", "b": "780 g" },
  					{ "a": "Hub", "b": "110 mm" },
  					{ "a": "Force", "b": "40 N" }],
  "arrOfDiffObjects": [{ "a": "Large stroke", "b": "Automatically detects the stroke at program start without initialization. The maximum grip stroke of the RG2 is 110 mm (adjustable)." }, 
  					{ "a": "Handle display", "b": "Automatic \"lost grip detection\", \"grip detected\", \"continuous grip\" and \"measure width\" detections remove the need for manually programming these features." },
  					{ "a": "Automatic Tool Center Point Calculation (TCP)", "b": "Automatic calculation of TCP eliminates the need for extensive programming in addition to reducing the deployment time." },
  					{ "a": "Automatic payload calculation", "b": "Automatic payload calculations simplify the programming of the RG2 gripper." },
  					{ "a": "Automatic payload calculations simplify the programming of the RG2 gripper.", "b": "Automatic depth compensation ensures the gripper’s fingers sweep in parallel across work surfaces." },
  					{ "a": "Integrated Software", "b": "The gripper comes with pre-integrated software that is easy to install and program, so even employees with no technical background can set it up." },
  					{ "a": "TÜV-certified", "b": "Both the RG2 gripper and the RG6 gripper are TÜV certified." }]
}

function Gripper() {
    return (
    	<div className="container mt-5">
	    	<div className="row header_short  mb-5">
	    		<img src = {logo_svg} className="logo_svg" />
	    	</div>
			<nav aria-label="breadcrumb">
			  <ol className="breadcrumb">
			    <li className="breadcrumb-item"><a href="/">Home</a></li>
			    <li className="breadcrumb-item"><a href="#">Products</a></li>
			    <li className="breadcrumb-item active" aria-current="Gripper">Gripper</li>
			  </ol>
			</nav>
	    	<nav className="navbar navbar-expand-lg navbar-light bg-light mt-4">
			  <div className="container-fluid">
			    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			      <span className="navbar-toggler-icon"></span>
			    </button>
			    <div className="collapse navbar-collapse" id="navbarNav">
			      <ul className="navbar-nav">
			        <li className="nav-item">
			          <a className="nav-link active" aria-current="page" href="#">Home</a>
			        </li>
			        <li className="nav-item">
			          <a className="nav-link" href="#features">Features</a>
			        </li>
			        <li className="nav-item">
			          <a className="nav-link" href="#downloads">Downloads</a>
			        </li>
			        <li className="nav-item">
			          <a className="nav-link" href="#videos">Videos</a>
			        </li>
			        <li className="nav-item">
			          <a className="nav-link" href="#specifications">Specifications</a>
			        </li>
			      </ul>
			    </div>
			  </div>
			</nav>
			<div>
				<div className="row  mt-4">
					<div className="col">
						<div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
							<div className="carousel-inner">
							    <div className="carousel-item active imagegrid">
							      <img className="w-100 d-block img_robo" src= { OnRobot_RG2 } />
							    </div>
							    <div className="carousel-item imagegrid">
							      <img className="w-100 d-block img_robo" src= { OnRobot_RG4 } />
							    </div>
							    <div className="carousel-item imagegrid">
							      <img className="w-100 d-block img_robo" src= { OnRobot_RG3 } />
							    </div>
							  </div>
							  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
							    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
							    <span className="visually-hidden">Previous</span>
							  </button>
							  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
							    <span className="carousel-control-next-icon" aria-hidden="true"></span>
							    <span className="visually-hidden">Next</span>
							  </button>
							</div>
						</div>
					<div className="col ms-3">
						<div className="row  mt-4 display-4">
							<b>OnRobot RG2</b>
						</div>
						<div className="row  mt-5">
							<div className="col text-start">
								<b><h5>Weight <br /> 860g </h5></b>
							</div>
							<div className="col text-start">
								<b><h5>Payload <br /> 2000g </h5></b>
							</div>
						</div>
						<div className="row  mt-5 text-start lead">
							The RG2 – 2kg payload robot arm gripper is a flexible collaborative gripper with built-in Quick Changer and up to 110mm stroke. It provides intelligence, fast deployment, easy customization and programming. The outstanding software features of our one-system solution decrease engineering and manufacturing time significantly. The RG2 gripper is a tool for a wide range of applications. Customized fingertips provide great gripping flexibility, customers can use one tool for different parts of the production process maximizing robot utilization. The RG2 works seamlessly with our Dual Quick Changer and any of our other grippers to help you maximize utilization of your robots. 
						</div>	
						<div className="mt-5">
							<form>
							  <fieldset>
							    <div className="mb-3">
							      <label htmlFor="select" className="form-label">Variant</label>
							      <select id="select" className="form-select" onChange={handleChange}>
							      	<option value="">--select--</option>
							        <option value="7000">Something</option>
							        <option value="1000">Something2</option>
							      </select>
							    </div>
							    <div className="mb-1">
							    	<p id="price" className="display-5"></p>
							    </div>
							    <button type="submit" className="btn btn-primary">Submit</button>
							  </fieldset>
							</form>	
						</div>
					</div>
				</div>
			</div>
			<div className="row mt-5" id="features">
	    		<div className="col mt-5">
	    			<p className="display-6">Features</p>
	    			<p className="lead text-start">The RG2 Gripper helps you get the most out of your robots. The RG2 gripper can be easily combined with the Dual Quick Changer module. The Dual Quick Changer module reduces production time by handling more workpieces simultaneously. This module works on the same principle as the Quick Changer module. However, the Dual Quick Changer is designed to allow the simultaneous use of two gripper tools, e.g., one RG2 gripper and one RG6 gripper in parallel. Adjustable fingertips provide great gripping flexibility: customers can use one tool for different parts of the production process, thereby maximizing robot utilization. 

					</p>
					<p>Price may vary with cobot brand.</p>
	    		</div>
	    		<div className="col mt-5 ms-5">
	    			{sampleJSON.arrOfObjects.map((item, i) => {
			          return <p><h5 className="mt-4" key={i}>{item.a}</h5> <p className="lead">{item.b}</p></p>
			        })}
	    			<div className="mt-5">
		    				{sampleJSON.arrOfDiffObjects.map((item, i) => {
					          return <div className="row"><div className="col-1"><svg xmlns="http://www.w3.org/2000/svg" width="24"height="24" fill="currentColor" className="bi bi-check-all" viewBox="0 0 24 24">
						  <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"/>
						</svg></div><div className="col"><p><h5 className="mt-3" key={i}>{item.a}</h5> <p className="lead">{item.b}</p></p></div></div>
					        })}	
	    			</div>
	    		</div>
	    	</div>
	    	<div className="row mt-5">
    			<p className="display-6">Videos</p>
    		</div>
    		<div className="row mt-5" id="videos">
    			{sampleJSON.arrOfVideos.map((item, i) => {
		          return <div className='col player-wrapper'>
				            <ReactPlayer
				            className='react-player'
				            url= '../RG2_RG6_promotional_video_ENG.MP4'
				            width='50%'
				            height='100%'
				            controls = {true}
				            />
		    			</div>
		        })}
    		</div>
    		<div className="row mt-5">
    			<p className="display-6">Specifications</p>
    		</div>
    		<div className="row mt-5" id="specifications">
    			<table className="table table-striped ms-4"><tbody>
    			{sampleJSON.arrOfSpecs.map((item, i) => {
		          return <tr><th>{item.a}</th><td>{item.b}</td> </tr>
		        })}
		        </tbody></table>
    		</div>
    		<div className="row mt-5">
    			<p className="display-6">Downloads</p>
    		</div>
    		<div className="row mt-3 ms-3">
    			<div className="card col-3">
	    			<div className="col me-3" id="downloads">
	    				<div className="row"><img className="d-block thumb_robo" src= { OnRobot_RG2 } /></div>
	    			</div>
	    			<div className="col">
	    				<div className="row"><h4>OnRobot RG2 datasheet</h4></div>
						<div className="row"><h6>Download OnRobot RG2 datasheet here</h6></div>
	    			</div>
				</div>
				<div className="col-3">
				</div>
    		</div>
    		<div className="row header_short mt-5 mb-5">
	    		<img src = {logo_svg} className="logo_svg" />
	    	</div>
		</div>
    	);
  }



export default Gripper;