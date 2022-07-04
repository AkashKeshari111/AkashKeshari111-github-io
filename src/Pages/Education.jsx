import React from 'react'
import "./educ.css"
import { FcGraduationCap } from "react-icons/fc";




const Education = () => {
  return (
    <div>
    <div className='h1dive'>
        <h1>Education</h1><span><FcGraduationCap/></span>
    </div>
    <div className='div_e'>
    
         <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="Yearly-timeline">
                    <div class="timeline">
                        <span  class="timeline-content">
                            <div class="timeline-icon"><i class="fa fa-instagram"></i></div>
                            <h3 class="title">2022</h3>
                            <p class="description">
                               <span><u><strong>FSWD</strong></u></span><br/><span>Full Stack Web Development</span>
                               <br/><span>from: </span><span> Masai School</span>
                            </p>
                        </span>
                    </div>
                    <div class="timeline">
                        <span  class="timeline-content">
                            <div class="timeline-icon"><i class="fa fa-twitter"></i></div>    
                            <h3 class="title">2018-2021</h3>
                            <p class="description">
                            <span><u><strong>Graduation</strong></u></span><br/><span>Bachelor of Arts</span>
                               <br/><span>from: </span><span> Sarnath Bodhisattava Mahavidhyalaya</span>
                            </p>
                        </span>
                    </div>
                    <div class="timeline">
                        <span  class="timeline-content">
                            <div class="timeline-icon"><i class="fa fa-facebook"></i></div>    
                            <h3 class="title">2015-2017</h3>
                            <p class="description">
                            <span><u><strong>HSC</strong></u></span><br/><span>Science</span>
                               <br/><span>from: </span><span>Ram Lakhan Public School</span>
                            </p>
                        </span>
                    </div>
                    <div class="timeline">
                        <span class="timeline-content">
                            <div class="timeline-icon"><i class="fa fa-linkedin"></i></div>    
                            <h3 class="title">2013-2015</h3>
                            <p class="description">
                            <span><u><strong>SSC</strong></u></span><br/><span>Science</span>
                               <br/><span>from: </span><span>Bal Bharati English School</span>
                            </p>
                        </span>
                    </div>

                   
                </div>
            </div>
        </div>
    </div>

    </div>
    </div>
  )
}

export default Education