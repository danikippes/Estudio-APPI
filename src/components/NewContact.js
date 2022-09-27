import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import contactImg from "../assets/img/contact-img.png";
import styled from "styled-components";
import TrackVisibility from 'react-on-screen';

const NewContact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_m7dfum9', 'template_5br6nnj', form.current, '6tI8ajzf6hSKSXJdm')
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <StyledContactForm>
        <form ref={form} onSubmit={sendEmail}>
        <div class= "container">
            <div class="contact-box">
                <div class="left">
                <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
            </div>
                <div class="right">
                    <h2>CONTACTANOS</h2>
                        <input type="text" class="field" placeholder="Nombre" />
                        <input type="text" class="field" placeholder="Email" />
                        <input type="text" class="field" placeholder="Telefono" />
                        <textarea class= "field" placeholder="Mensaje"></textarea>
                        <h7>También podes contactarnos via Whatsapp </h7>
                        <input type="submit" value="Send" />
                </div>
            </div>
        </div>
        </form>
    </StyledContactForm>
  );
};

export { NewContact };

const StyledContactForm = styled.div`
  .container{
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px 80px;
}

.container:after{
	content: '';
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	background-image: src('../assets/img/contact-img.png');
	background-size: cover;
	filter: blur(50px);
	z-index: -1;
}
.contact-box{
	max-width: 2500px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	justify-content: center;
	align-items: center;
	text-align: center;
	background-color: #fff;
    border-radius: 30px;
	box-shadow: 0px 0px 19px 5px rgba(0,0,0,0.19);
}

.left{
	background-image: src ('../assets/img/contact-img.png' );
    background-size: cover;
	height: 100%;
}

.right{
	padding: 25px 40px;
}

h2{
	position: relative;
	padding: 0 0 10px;
	margin-bottom: 10px;
}
h7{
	  color:#10c646;
}

h2:after{
	content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    height: 4px;
    width: 50px;
    border-radius: 2px;
    background-color: #2ecc71;
}

.field{
	width: 100%;
	border: 2px solid rgba(0, 0, 0, 0);
	outline: none;
	background-color: rgba(230, 230, 230, 0.6);
	padding: 0.5rem 1rem;
	font-size: 1.1rem;
	margin-bottom: 22px;
	transition: .3s;
}

.field:hover{
	background-color: rgba(0, 0, 0, 0.1);
}

textarea{
	min-height: 150px;
}

.btn{
	width: 100%;
	padding: 0.5rem 1rem;
	background-color: #2ecc71;
	color: #fff;
	font-size: 1.1rem;
	border: none;
	outline: none;
	cursor: pointer;
	transition: .3s;
}

.btn:hover{
    background-color: #27ae60;
}

.field:focus{
    border: 2px solid rgba(30,85,250,0.47);
    background-color: #fff;
}
input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: #4E6AD4;
      color: white;
      border: none;
      display: inline-block;
      font-size: 1.25em;
      padding: 10px 0px;
      width: 500px;
      text-decoration: none;
      box-shadow:0px 3px 0px;
      border-radius: 36px;
    }

@media screen and (max-width: 880px){
	.contact-box{
		grid-template-columns: 1fr;
	}
	.left{
		height: 200px;
	}
}
`;