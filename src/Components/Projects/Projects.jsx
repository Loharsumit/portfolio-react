import React from 'react'
import '../Projects/Projects.css'
import projects_data from '../../assets/Projects_Data'
import theme_pattern from '../../assets/theme_pattern.svg'

function Projects() {
  return (
    <>
         <div id='projects' className='mywork'>
       
       <div className="mywork-container">
        {projects_data.map((work,index)=>{
             return (
              <a key={index} href={work.w_link} target="_blank" rel="noopener noreferrer">
                <img src={work.w_img} alt={work.w_name} />
              </a>
            );
        })}
       </div>
      
    </div>
    </>
  )
}

export default Projects