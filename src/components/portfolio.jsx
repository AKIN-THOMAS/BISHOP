import Header from './header';
import Card from './Card';
import './styles.css';
import Choir from '../photos/choir.png';
import abimbola from '../photos/abimbola-made.png';
import education from '../photos/education.png';
import stage1 from '../photos/stage1.png';
import stage3 from '../photos/stage3.png';
import webblog from '../photos/web-blog.png';

const Portfolio = () =>{
    return(
        <div id='portfolio'>
            <Header />
            <div className="service-header">
                Latest works
            </div>
            <div className="card-item">
                <div className="card-inner">
                    <div className="card">
                        <div className="card1">
                            <Card  
                            image={Choir} 
                            title={'Choir Website'} 
                            viewlink={`https://choir-lmu.onrender.com/`} 
                            githublink={`https://github.com/Praisebakare/Landmark-University-Choir`}
                            />
                            <Card  
                            image={abimbola} 
                            title={'Personal Portfolio Website'} 
                            viewlink={`https://bishopabimbola.netlify.app/`} 
                            githublink={`https://github.com/AKIN-THOMAS/BISHOP`}
                            /> <Card  
                            image={webblog} 
                            title={'Web Blog App'} 
                            viewlink={``} 
                            githublink={``}
                            />
                            
                        </div>
                        <div className="card2">
                            <Card  
                            image={stage1} 
                            title={'HNG Task'} 
                            viewlink={`https://frontend-stage1.netlify.app/`} 
                            githublink={`https://github.com/AKIN-THOMAS/Front-End-stage1`}
                            />
                             <Card  
                            image={stage3} 
                            title={'HNG Task'} 
                            viewlink={`https://metabnb-bishop.netlify.app/`} 
                            githublink={`https://github.com/AKIN-THOMAS/Metabnb`}
                            />
                             <Card  
                            image={education} 
                            title={'AKIN-THOMAS University'} 
                            viewlink={``} 
                            githublink={``}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Portfolio;