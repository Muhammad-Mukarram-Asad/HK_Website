import React from 'react'
import "./product.css";
import {BsFacebook} from "react-icons/bs";
import {BsInstagram} from "react-icons/bs";
import {BsTwitter} from "react-icons/bs";
import {BsSnapchat} from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs";



function Product() {
  return (
    <div >
        <h1> Life at Hysab Kytab</h1>
        <div className='boxes'>
            <div className='box'>
                <img src={"https://hysabkytab.com/wp-content/uploads/2019/08/open-to-ideas-new-01-01.png"}  alt="bulb"/>
                <h2>Open To New Ideas</h2>
                <p>
                We respect and value our team members. We <br /> have a diverse team that believes in <br /> coexistence and creativity. We 
                welcome new <br /> and creative idea.
                </p>
            </div>

            <div className='box'>
                <img src={"https://hysabkytab.com/wp-content/uploads/2019/07/positive-mind-new.png"}  alt="bulb"/>
                <h2>Positive Mindset</h2>
                <p>
                We are a group of free-thinkers and positive <br /> 
                individuals who are continuously pushing <br />
                 boundaries to bring innovative and creative <br /> 
                 stuff for Hysab Kytab users.
                </p>
            </div>

            <div className='box'>
                <img src={"https://hysabkytab.com/wp-content/uploads/2019/07/collaborative-sprit-new.png"}  alt="bulb"/>
                <h2>Collaborative Spirit</h2>
                <p>
               Our Hysab Kytab family cheer for shared <br /> 
               success and join hands together when <br /> anomaly strikes in.
                </p>
            </div>
        </div>

        <div className='ending_paragraph'>
            <img src={"https://hysabkytab.com/wp-content/uploads/2022/05/white-logo.png"}
            alt="HK Logo" />
            <p> Live Your Dreams</p>

            <div className='social_icons'>
                <BsFacebook  style={{cursor:'pointer',fontSize:30, color:"blue",marginLeft:30}}/>
                <BsInstagram style={{cursor:'pointer',fontSize:30, color:"purple",marginLeft:30}} />
                <BsLinkedin  style={{cursor:'pointer',fontSize:30, color:"darkblue",marginLeft:30}} />
                <BsTwitter   style={{cursor:'pointer',fontSize:30, color:"blue",marginLeft:30}} />
                <BsSnapchat  style={{cursor:'pointer',fontSize:30, color:"yellow",marginLeft:30}} />
            </div>
        </div>

      
    </div>
  )
}

export default Product
