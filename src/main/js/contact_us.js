import React from "react";

import logo_svg from "../../logo_unchained-robotics_lightgrey.svg";
import '../../App.css';
import '../sass/main.css';
import mladen_img from "../img/mladen_milicevic_kontakt.jpg"
import arrow_ne from "../img/Arrow_Northeast.svg"
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
function Contact() {
    return (
        <div className="container mt-5">
            <div className="row header_short  mb-5">
                <img src = {logo_svg} className="logo_svg" />
            </div>
            <div className = "container">
                <div className = "row">
                    <div className = "col">
                        <span className = "base_font"><h3>Do you have any questions or suggestions? <br></br> We'd love to hear from you!</h3></span>
                    </div>
                    <div className = "col"></div>
                </div>
                <div className = "row">
                    <div className = "col-5">
                        <div className ="row mt-5">
                            <img src = {mladen_img} className="contact_img rounded_img" />
                        </div>
                        <div className ="row mt-3 row_width">
                            <span className = "font_stolzl font_bold font_title">Mladen Milicevic</span>    
                        </div>
                        <div className ="row mt-1 row_width">
                            <span className = "font_stolzl font_subtitle">CEO</span>    
                        </div>
                        <div className ="row mt-5 row_width">
                            <div className = "number_width">
                                <span className = "font_stolzl font_label_sm">OFFICE</span>    
                                <span className = "font_number mt-1 number_width d-block">+49 525 150 88 661</span>    
                            </div>
                            <div className="call_box margin_auto text-center">
                                <span className = "font_stolzl">Call</span>    
                                <img src = {arrow_ne} className ="ms-2 arrow_width" />
                            </div>
                        </div>
                        <div className ="row mt-5 row_width">
                            <div className = "number_width">
                                <span className = "font_stolzl font_label_sm">MOBILE</span>    
                                <span className = "font_number mt-1 number_width d-block">+49 15222 798924</span>    
                            </div>
                            <div className="call_box margin_auto text-center">
                                <span className = "font_stolzl">Call</span>    
                                <img src = {arrow_ne} className ="ms-2 arrow_width" />
                            </div>
                        </div>
                        <div className ="row mt-5 row_width">
                            <div className = "">
                                <span className = "font_stolzl font_label_sm">Email</span>    
                                <span className = "font_number mt-1 d-block">mladen.milicevic@unchainedrobotics.de</span>    
                            </div>
                            <div className="email_box margin_auto text-center mt-2">
                                <span className = "font_stolzl">Send email</span>    
                                <img src = {arrow_ne} className ="ms-2 arrow_width" />
                            </div>
                        </div>
                    </div>
                    <div className = "col-5">
                        <div className ="row mt-5">
                            <img src = {mladen_img} className="contact_img rounded_img" />
                        </div>
                        <div className ="row mt-3 row_width">
                            <span className = "font_stolzl font_bold font_title">Mladen Milicevic</span>    
                        </div>
                        <div className ="row mt-1 row_width">
                            <span className = "font_stolzl font_subtitle">CEO</span>    
                        </div>
                        <div className ="row mt-5 row_width">
                            <div className = "number_width">
                                <span className = "font_stolzl font_label_sm">OFFICE</span>    
                                <span className = "font_number mt-1 number_width d-block">+49 525 150 88 661</span>    
                            </div>
                            <div className="call_box margin_auto text-center">
                                <span className = "font_stolzl">Call</span>    
                                <img src = {arrow_ne} className ="ms-2 arrow_width" />
                            </div>
                        </div>
                        <div className ="row mt-5 row_width">
                            <div className = "number_width">
                                <span className = "font_stolzl font_label_sm">MOBILE</span>    
                                <span className = "font_number mt-1 number_width d-block">+49 15222 798924</span>    
                            </div>
                            <div className="call_box margin_auto text-center">
                                <span className = "font_stolzl">Call</span>    
                                <img src = {arrow_ne} className ="ms-2 arrow_width" />
                            </div>
                        </div>
                        <div className ="row mt-5 row_width">
                            <div className = "">
                                <span className = "font_stolzl font_label_sm">Email</span>    
                                <span className = "font_number mt-1 d-block">mladen.milicevic@unchainedrobotics.de</span>    
                            </div>
                            <div className="email_box margin_auto text-center mt-2">
                                <span className = "font_stolzl">Send email</span>    
                                <img src = {arrow_ne} className ="ms-2 arrow_width" />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
                
        </div>
        );
}

export default Contact;