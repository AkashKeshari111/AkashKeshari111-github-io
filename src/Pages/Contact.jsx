import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import "./contactc.css"
import { IoMailUnreadOutline } from "react-icons/io5";
import { FaRegAddressBook } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import {TbBrandLinkedin } from "react-icons/tb";
import {FiTwitter} from "react-icons/fi";
import {AiFillGithub} from "react-icons/ai";

const Contact = () => {

 let initialvalue={
    Sname:"",
    Semail:""
  }

const [form,setForm]=useState(initialvalue)

  const ref= useRef(null)
  const emailRef= useRef()


  const handleChange=(e)=>{
    const {name,type,value}=e.target

    setForm({...form,
      [name]:value})
  }

  const onClickFocus=(e)=>{
    e.preventDefault()
    
    if(form.Sname===""){
      ref.current.focus()
    }
    else if(form.Semail===""){
      emailRef.current.focus()
    }
    else{
      alert("Your query is Send. Thank you")
    }
   
setForm(form)

   
  }
  return (

    <div >
     <div>
      <h1 className='h1c'>Contact me</h1>
     </div><br/>
   
    <div className='contact_div'>
       
      <div className='div_c1'>
       
        <form  onSubmit={ onClickFocus}>
          <div className='i_divc'>
          <label>Name:</label></div><br/>
          <input ref={ref} name="Sname" value={form.Sname} className='in1c' placeholder='Enter your name' onChange={handleChange}/><br/><br/>
          <div className='i_divc'>
          <label>Email:</label></div><br/>
          <input ref={emailRef} name="email" value={form.Semail} className='in2c' placeholder='Enter your email' onChange={(e)=>(setForm(e.target.value))}/><br/><br/>
          <div className='i_divc'>
          <label>Message:</label></div><br/>
          <textarea className='area' placeholder='Enter your message...'></textarea><br/><br/>
          <div className='div_btnc1'>
          <button className='btn_c3' type="submit">Submit</button>
          </div>
        </form>
      </div>
      <div className='div_c2'>
        <div>
         <IoMailUnreadOutline/>   <h3 className='h3c23'>My email id:<br/> <Link className='linkc23' 
         to="//mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBncMdTjQvFVqTKPjrFvtKmNPPrlKKZWKXFXkDrbGNBJdKzwmwsKcnClwLvzCwMHDjjtTlV" target="_blank"
         >akashkeshari272200@gmail.com</Link></h3><br/>

         <FaRegAddressBook/> <h3  className='h3c23'>Address: <br/><Link  className='linkc23 pc23' to="//www.google.co.in/maps/place/Varanasi,+Uttar+Pradesh/@25.3209013,82.9210681,12z/data=!3m1!4b1!4m5!3m4!1s0x398e2db76febcf4d:0x68131710853ff0b5!8m2!3d25.3176452!4d82.9739144?hl=en"
         target="_blank"> Varanasi, UP, India</Link></h3><br/>

         <IoShareSocialOutline/>   <h3  className='h3c23'>Social Link: <br/> 
            
            <div style={{display:"flex"}}>
              <Link className='link201' to="//www.linkedin.com/in/akash111/" target="_blank"> <TbBrandLinkedin/><span className='abc'>Linkdin</span></Link>
              <Link  className='link201' to="//twitter.com/Akashkeshari111" target="_blank"> <FiTwitter/><span className='abc'>Twitter</span></Link>
              <Link   className='link201' to="//github.com/AkashKeshari111" target="_blank"> <AiFillGithub/><span className='abc'>Github</span></Link>
            </div>
            
            </h3>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact