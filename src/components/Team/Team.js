
import './team.css';
import ProgressBar from "@ramonak/react-progress-bar";
import logo1 from '../../assets/logo1.png';
import logo2 from '../../assets/logo2.png';
import logo3 from '../../assets/logo3.png';
import logo4 from '../../assets/logo4.png';
import logo5 from '../../assets/logo5.png';
import { HiFolderRemove } from 'react-icons/hi';
import { useState } from 'react';




const Team =() => {
  

    const style = {color:"#5D5FEF"}
    const team =[
        {
            id:1,
            image:logo1,
            name:'Silvestor Ananas',
            bar:(
                <ProgressBar completed={65}
                className="wrapper"
                barContainerClassName="containerr"
                completedClassName="barCompleted"
                labelClassName="label"
                
                />
            ),
            count:'420',
        },
        {
            id:2,
            image:logo2,
            name:'Amanda Rouge',
            count:'411',
            bar:(
                <ProgressBar completed={55}
                className="wrapper"
                barContainerClassName="containerr"
                completedClassName="barCompleted1"
                labelClassName="label1"
                />
            ),
        },
        {
            id:3,
            image:logo3,
            name:'Adam Dinner',
            count:'25',
            bar:(
                <ProgressBar completed={41}
                className="wrapper"
                barContainerClassName="containerr"
                completedClassName="barCompleted2"
                labelClassName="label2"
                />
            ),
        },
        {
            id:4,
            image:logo4,
            name:'Isabella Bean',
            count:'6',
            bar:(
                <ProgressBar completed={99}
                className="wrapper"
                barContainerClassName="containerr"
                completedClassName="barCompleted3"
                labelClassName="label3"
                />
            ),
        },
        {
            id:5,
            image:logo5,
            name:'Robby Adams',
            count:'53',
            bar:(
                <ProgressBar completed={62}
               
                
                className="wrapper"
                barContainerClassName="containerr"
                completedClassName="barCompleted4"
                labelClassName="label4"
    
                
    
                
                />
            ),
        },
        
    ]
  return (
    <div className='container'>
        <div className='team'>
            <div className='header'>
                <h3>Team</h3>
                <h4 className='dropdown-toggle'> <HiFolderRemove size={30} style={style} />  Sales New York</h4>
                <button >Show more</button>
                
            </div>
          <div className='barr'></div>
            
           {team.map((team) =>(
            <div key={team.id}>
              <div className='row'>
                <div className='col'>
                <div className='list'>
                     <samp className='ss1'> <img src={team.image} /></samp>
                     <samp className='ss2'>{team.name} </samp>
                     <samp className='ss3'>{team.bar }</samp>
                     <samp className='ss4'>{team.count}</samp>
                      
                                
                    
                     id:1,
            image:logo1,
            name:'Silvestor Ananas',
            bar:(
                <ProgressBar completed={65}
                className="wrapper"
                barContainerClassName="containerr"
                completedClassName="barCompleted"
                labelClassName="label"
                
                />
            ),
            count:'420',
        },
        {
            id:2,
            image:logo2,
            name:'Amanda Rouge',
            count:'411',
            bar:(
                <ProgressBar completed={55}
                className="wrapper"
                barContainerClassName="containerr"
                completedClassName="barCompleted1"
                labelClassName="label1"
                />
            ),
        },
        {
            id:3,
            image:logo3,
            name:'Adam Dinner',
            count:'25',
            bar:(
                <ProgressBar completed={41}
                className="wrapper"
                barContainerClassName="containerr"
                completedClassName="barCompleted2"
                labelClassName="label2"
                />
            ),
        },
        {
            id:4,
            image:logo4,
            name:'Isabella Bean',
            count:'6',
            bar:(
                <ProgressBar completed={99}
                className="wrapper"
                barContainerClassName="containerr"
                completedClassName="barCompleted3"
                labelClassName="label3"
                />
            ),
        },
        {
            id:5,
            image:logo5,
            name:'Robby Adams',
            count:'53',
            bar:(
                <ProgressBar completed={62}
               
                
                className="wrapper"
                barContainerClassName="containerr"
                completedClassName="barCompleted4"
                labelClassName="label4"
    
                
    
                id:1,
                image:logo1,
                name:'Silvestor Ananas',
                bar:(
                    <ProgressBar completed={65}
                    className="wrapper"
                    barContainerClassName="containerr"
                    completedClassName="barCompleted"
                    labelClassName="label"
                    
                    />
                ),
                count:'420',
            },
            {
                id:2,
                image:logo2,
                name:'Amanda Rouge',
                count:'411',
                bar:(
                    <ProgressBar completed={55}
                    className="wrapper"
                    barContainerClassName="containerr"
                    completedClassName="barCompleted1"
                    labelClassName="label1"
                    />
                ),
            },
            {
                id:3,
                image:logo3,
                name:'Adam Dinner',
                count:'25',
                bar:(
                    <ProgressBar completed={41}
                    className="wrapper"
                    barContainerClassName="containerr"
                    completedClassName="barCompleted2"
                    labelClassName="label2"
                    />
                ),
            },
            {
                id:4,
                image:logo4,
                name:'Isabella Bean',
                count:'6',
                bar:(
                    <ProgressBar completed={99}
                    className="wrapper"
                    barContainerClassName="containerr"
                    completedClassName="barCompleted3"
                    labelClassName="label3"
                    />
                ),
            },
            {
                id:5,
                image:logo5,
                name:'Robby Adams',
                count:'53',
                bar:(
                    <ProgressBar completed={62}
                   
                    
                    className="wrapper"
                    barContainerClassName="containerr"
                    completedClassName="barCompleted4"
                    labelClassName="label4"
        
                    
        
                    id:1,
            image:logo1,
            name:'Silvestor Ananas',
            bar:(
                <ProgressBar completed={65}
                className="wrapper"
                barContainerClassName="containerr"
                completedClassName="barCompleted"
                labelClassName="label"
                
                />
            ),
            count:'420',
        },
        {
            id:2,
            image:logo2,
            name:'Amanda Rouge',
            count:'411',
            bar:(
                <ProgressBar completed={55}
                className="wrapper"
                barContainerClassName="containerr"
                completedClassName="barCompleted1"
                labelClassName="label1"
                />
            ),
        },
        {
            id:3,
            image:logo3,
            name:'Adam Dinner',
            count:'25',
            bar:(
                <ProgressBar completed={41}
                className="wrapper"
                barContainerClassName="containerr"
                completedClassName="barCompleted2"
                labelClassName="label2"
                />
            ),
        },
        {
            id:4,
            image:logo4,
            name:'Isabella Bean',
            count:'6',
            bar:(
                <ProgressBar completed={99}
                className="wrapper"
                barContainerClassName="containerr"
                completedClassName="barCompleted3"
                labelClassName="label3"
                />
            ),
        },
        {
            id:5,
            image:logo5,
            name:'Robby Adams',
            count:'53',
            bar:(
                <ProgressBar completed={62}
               
                
                className="wrapper"
                barContainerClassName="containerr"
                completedClassName="barCompleted4"
                labelClassName="label4"
    
                
    
                id:1,
                image:logo1,
                name:'Silvestor Ananas',
                bar:(
                    <ProgressBar completed={65}
                    className="wrapper"
                    barContainerClassName="containerr"
                    completedClassName="barCompleted"
                    labelClassName="label"
                    
                    />
                ),
                count:'420',
            },
            {
                id:2,
                image:logo2,
                name:'Amanda Rouge',
                count:'411',
                bar:(
                    <ProgressBar completed={55}
                    className="wrapper"
                    barContainerClassName="containerr"
                    completedClassName="barCompleted1"
                    labelClassName="label1"
                    />
                ),
            },
            {
                id:3,
                image:logo3,
                name:'Adam Dinner',
                count:'25',
                bar:(
                    <ProgressBar completed={41}
                    className="wrapper"
                    barContainerClassName="containerr"
                    completedClassName="barCompleted2"
                    labelClassName="label2"
                    />
                ),
            },
            {
                id:4,
                image:logo4,
                name:'Isabella Bean',
                count:'6',
                bar:(
                    <ProgressBar completed={99}
                    className="wrapper"
                    barContainerClassName="containerr"
                    completedClassName="barCompleted3"
                    labelClassName="label3"
                    />
                ),
            },
            {
                id:5,
                image:logo5,
                name:'Robby Adams',
                count:'53',
                bar:(
                    <ProgressBar completed={62}
                   
                    
                    className="wrapper"
                    barContainerClassName="containerr"
                    completedClassName="barCompleted4"
                    labelClassName="label4"
        
                    
        
                    id:1,
            image:logo1,
            name:'Silvestor Ananas',
            bar:(
                <ProgressBar completed={65}
                className="wrapper"
                barContainerClassName="containerr"
                completedClassName="barCompleted"
                labelClassName="label"
                
                />
            ),
            count:'420',
        },
        {
            id:2,
            image:logo2,
            name:'Amanda Rouge',
            count:'411',
            bar:(
                <ProgressBar completed={55}
                className="wrapper"
                barContainerClassName="containerr"
                completedClassName="barCompleted1"
                labelClassName="label1"
                />
            ),
        },
        {
            id:3,
            image:logo3,
            name:'Adam Dinner',
            count:'25',
            bar:(
                <ProgressBar completed={41}
                className="wrapper"
                barContainerClassName="containerr"
                completedClassName="barCompleted2"
                labelClassName="label2"
                />
            ),
        },
        {
            id:4,
            image:logo4,
            name:'Isabella Bean',
            count:'6',
            bar:(
                <ProgressBar completed={99}
                className="wrapper"
                barContainerClassName="containerr"
                completedClassName="barCompleted3"
                labelClassName="label3"
                />
            ),
        },
        {
            id:5,
            image:logo5,
            name:'Robby Adams',
            count:'53',
            bar:(
                <ProgressBar completed={62}
               
                
                className="wrapper"
                barContainerClassName="containerr"
                completedClassName="barCompleted4"
                labelClassName="label4"
    
                
    
                id:1,
                image:logo1,
                name:'Silvestor Ananas',
                bar:(
                    <ProgressBar completed={65}
                    className="wrapper"
                    barContainerClassName="containerr"
                    completedClassName="barCompleted"
                    labelClassName="label"
                    
                    />
                ),
                count:'420',
            },
            {
                id:2,
                image:logo2,
                name:'Amanda Rouge',
                count:'411',
                bar:(
                    <ProgressBar completed={55}
                    className="wrapper"
                    barContainerClassName="containerr"
                    completedClassName="barCompleted1"
                    labelClassName="label1"
                    />
                ),
            },
            {
                id:3,
                image:logo3,
                name:'Adam Dinner',
                count:'25',
                bar:(
                    <ProgressBar completed={41}
                    className="wrapper"
                    barContainerClassName="containerr"
                    completedClassName="barCompleted2"
                    labelClassName="label2"
                    />
                ),
            },
            {
                id:4,
                image:logo4,
                name:'Isabella Bean',
                count:'6',
                bar:(
                    <ProgressBar completed={99}
                    className="wrapper"
                    barContainerClassName="containerr"
                    completedClassName="barCompleted3"
                    labelClassName="label3"
                    />
                ),
            },
            {
                id:5,
                image:logo5,
                name:'Robby Adams',
                count:'53',
                bar:(
                    <ProgressBar completed={62}
                   
                    
                    className="wrapper"
                    barContainerClassName="containerr"
                    completedClassName="barCompleted4"
                    labelClassName="label4"
        
                    
        
                    id:1,
            image:logo1,
            name:'Silvestor Ananas',
            bar:(
                <ProgressBar completed={65}
                className="wrapper"
                barContainerClassName="containerr"
                completedClassName="barCompleted"
                labelClassName="label"
                
                />
            ),
            count:'420',
        },
        {
            id:2,
            image:logo2,
            name:'Amanda Rouge',
            count:'411',
            bar:(
                <ProgressBar completed={55}
                className="wrapper"
                barContainerClassName="containerr"
                completedClassName="barCompleted1"
                labelClassName="label1"
                />
            ),
        },
        {
            id:3,
            image:logo3,
            name:'Adam Dinner',
            count:'25',
            bar:(
                <ProgressBar completed={41}
                className="wrapper"
                barContainerClassName="containerr"
                completedClassName="barCompleted2"
                labelClassName="label2"
                />
            ),
        },
        {
            id:4,
            image:logo4,
            name:'Isabella Bean',
            count:'6',
            bar:(
                <ProgressBar completed={99}
                className="wrapper"
                barContainerClassName="containerr"
                completedClassName="barCompleted3"
                labelClassName="label3"
                />
            ),
        },
        {
            id:5,
            image:logo5,
            name:'Robby Adams',
            count:'53',
            bar:(
                <ProgressBar completed={62}
               
                
                className="wrapper"
                barContainerClassName="containerr"
                completedClassName="barCompleted4"
                labelClassName="label4"
    
                
    
                            

                                   
               </div>
                </div>
              </div>
            </div>
           ))}
            
        </div>

    </div>
  )
}

export default Team;