import React from 'react'
import { Link } from 'react-router-dom'
import "./Projectc.css"


const projects=[{src:"https://images.yourstory.com/cs/2/70651a302d6d11e9aa979329348d4c3e/Imagebygb-1621514704925.jpg",
                title:"Pharmeasy Clone",
                dis:"Pharmeasy is an online web application that provides online medicine and health related products.",
                liveDemo:"//cerulean-macaron-cbc50c.netlify.app",
                github:"//github.com/AkashKeshari111/pharmeasy-project" },



                {src:"https://i.pinimg.com/originals/6e/0a/23/6e0a236d5cfc8d1c77230f38ce4147b2.gif",
                title:"Myntra Clone",
                dis:"  Myntra Clone is a online selling cloths and home & decorative products.",
                liveDemo:"//silly-custard-061700.netlify.app",
                github:"//github.com/AkashKeshari111/Myntra-Clone" },
                
                
                {src:"https://static01.nyt.com/images/2019/07/19/multimedia/19-parenting-healthyeating/19-parenting-healthyeating-jumbo.gif",
                title:"Kimaye Clone",
                dis:"Kimaye Clone is online store selling Fruits and Vegitables.",
                liveDemo:"//kimaye-hamara.netlify.app/",
                github:"//github.com/surajDongre-16/Kimaye-Clone" },
          
                {src:"https://live.staticflickr.com/65535/49737584836_1163d46038_b.jpg",
                title:"Coming Soon",
                dis:"",
                liveDemo:"//the-awesome-akashkeshari2722000-gmail-com-site-db882.netlify.app",
                github:"" }
              ]

const Project = () => {

  return (

    <div >

    <div className='div_p23'>
      <h1 className='h1p23'>Projects</h1>
    </div>


    <div className='project_div'>

    <div>
      {projects.map((el)=>(
        <div className='div_p'>
          <img className='img_p' src={el.src}/>
          <div>
            <div className='div_p1'>
            <h2 className='h2p'>{el.title}</h2>
            <p className='pp'>{el.dis}</p>
            </div>
            <div className='div_btnp'>
            <Link  to={el.liveDemo}> <button className='btn1p'>Demo</button> </Link>
            <Link  to={el.github}> <button className="btn2p">Github</button> </Link>
            </div>
            </div>
        </div>
      ))}
    </div>
    </div>
    </div>
  )
}

export default Project