"use client";

import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import Button from './components/button';

function App() {
  let [stepNumber, setStepNumber] = useState(1);
  let [plane, setPlane] = useState("arcade");
  const [planePrice, setPlanePrice] = useState(9);
  const [planeTime, setPlaneTime] = useState("monthly");
  const [services, setSecvices] = useState([]);
  const removeActiveClass = () => {
    const divs = document.querySelectorAll("nav div");
    divs.forEach(item => {
      item.classList.remove("active");
    });
  }
  const addActiveClass = (id) => {
    removeActiveClass();
    useEffect(() => {
      let ele = document.getElementById(id);
      if (ele) {
        ele.classList.add("active");
      } else {
        if (ele) {
          ele.classList.add("active");
        }
      }
      console.log(ele);

    })
  }
  // Start nav:
  if (stepNumber == 1)  {
    console.log(1);
    addActiveClass(1);
  } else if (stepNumber == 2) {
    console.log(2);
    addActiveClass(2)
  } else if (stepNumber == 3) {
    console.log(3);
    addActiveClass(3);
  }else if (stepNumber == 4) {
    console.log(4);
    addActiveClass(4);
  } else {
    addActiveClass(1);
  }
  // End nav.
  return (
    <>
      <div className='container flex gap-2 rad-6'>
        {/*Start Nav  */}
        <nav className='flex flex-col justify-center items-center gap-3'>
          <div className='flex gap-3 justify-start items-start' id={1}>
            <h4>1</h4>
            <div>
              <span>step 1</span>
              <h3>your info</h3>
            </div>
          </div>
          <div className='flex gap-3 justify-start items-start' id={2}>
            <h4>2</h4>
            <div>
              <span>step 2</span>
              <h3>select plan</h3>
            </div>
          </div>
          <div className='flex gap-3 justify-start items-start'  id={3}>
            <h4>3</h4>
            <div>
              <span>step 3</span>
              <h3>add-ons</h3>
            </div>
          </div>
          <div className='flex gap-3 justify-start items-start' id={4}>
            <h4>4</h4>
            <div>
              <span>step 4</span>
              <h3>summary</h3>
            </div>
          </div>
        </nav>
        {/* End nav */}
        {/* Start first step form: */}
        <div className="step-1">
          <h1>personal info</h1>
          <p>please provide your name,email address, and phone number.</p>
          <form action="">
            <div className="name-input">
              <label htmlFor="input-name"></label>
              <input type="text" name="input-name" placeholder=' e.g. Stephen King' />
            </div>
            <div className="email-input">
              <label htmlFor="input-email"></label>
              <input type="text" name='input-email' placeholder='e.g. stephenking@lorem.com' /></div>
            <div className="phone-input">
              <label htmlFor="input-phone">Phone Number </label>
              <input type="text" name='input-phone' placeholder='e.g. +1 234 567 890' />
            </div>
          </form>
          <button className='next-step inactive'>next step</button>
        </div>
        {/* End first step form. */}
        {/* Start socend step form. */}
        <div className="step-2">
          <h1>select your plane</h1>
          <p>You have the option of monthly or yearly billing</p>
          <div className="hero-2">
            <div className='grid'>
              <div className='1'>
                <img src="../public/icon-arcade.svg" alt="" />
                <h4>arcade</h4>
                <span>$9/mo</span>
              </div>
              <div className='2'>
                <img src="../public/icon-advanced.svg" alt="" />
                <h4>advanced</h4>
                <span>$12/mo</span>
              </div>
              <div className='2'>
                <img src="../public/icon-pro.svg" alt="" />
                <h4>pro</h4>
                <span>$15/mo</span>
              </div>
            </div>
            <div className="filter">
              <h4>monthly</h4>
              <button></button>
              <h4>yearly</h4>
            </div>
          </div>
          <Button stepNum={2} text="next step" />
        </div>
        {/* End socend step form. */}
        {/* Start third step form. */}
        <div className="step-3">
          <h1>Pick add-ons</h1>
          <p>Add-ons help enhance your gaming experience.</p>
          <div className="hero">
            <div className='card-1'>
              <div>
                <input type="checkbox" />
                <h4>Online service</h4>
                <span>Access to multiplayer games</span>
              </div>
              <span>+$1/mo</span>
            </div>
            <div className='card-2'>
              <div>
                <input type="checkbox" />
                <h4>Larger storage</h4>
                <span>Extra 1TB of cloud save</span>
              </div>
              <span>+$2/m</span>
            </div>
            <div className='card-3'>
              <div>
                <input type="checkbox" />
                <h4>Customizable Profile</h4>
                <span>Custom theme on your profile</span>
              </div>
              <span>+$2/mo</span>
            </div>
          </div>
          <Button stepNum={3} text="next step" />
        </div>
        {/* End third step form. */}
        {/* Start fourth step form: */}
        <div className="step-4">
          <h1>Finishing up</h1>
          <p> Double-check everything looks OK before confirming. </p>
          <div className="hero">
            <div className="info">
              <div className='main-info'>
                <div>
                  <h4>{plane}({planeTime})</h4>
                  <span className='underline'>change</span>
                </div>
                <h3>${planePrice}/mo</h3>
              </div>
              <hr />
              <div className='extentions-services'>
                {/* {services} */}
              </div>
              <div></div>
            </div>
          </div>
          <Button stepNum={4} text="confirm"/>
        </div>
        {/* End fourth step form. */}
        {/* Start thanks section: */}
        <div className="thanks">
          <div>
            <img src="../public/icon-thank-you.svg" alt="" />
            <h2>thanks you</h2>
          </div>
          <div>
            <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
          </div>
        </div>
        {/* End thanks section */}
      </div>
    </>
  )
}
export default App
