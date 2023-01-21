import React from 'react';
import './styles.css'

const Card = ({image, title, viewlink, githublink}) => {

   
  return (
    <div className="card-item">
        <div className="card-inner">
            <div className='services-items'>
                <div className="service-item-img">
                    <img src={image} alt="" />
                </div>
                <div className="service-item-title">
                    <h3>{title}</h3>
                </div>
                
                
                <div className="service-item-btn">
                    <div className='inside'>
                        <div>
                            <a href={viewlink} target="_blank" rel='noreferrer'>
                                <button className="view">View Project</button>
                            </a>
                        </div>
                        <div>
                            <a href={githublink} target="_blank" rel='noreferrer'>
                                <button className="git">View Github</button>
                            </a>
                        </div> 
                    </div>
            </div>
                
            </div>
        </div>
    </div>
  )
}

export default Card