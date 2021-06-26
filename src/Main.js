import React, { Component } from 'react'
import HornedBeast from './HornedBeast'
import DataBeast from './data.json'
import { Row,Form ,Button} from 'react-bootstrap'




 class Main extends Component {
     constructor(props){
         super(props)
         this.state={
             NumberHorns:0
         }
     }

     HandelHorns=(e)=>{
         e.preventDefault()
         this.setState({
             NumberHorns:e.target.value 
         })
        
     }
    render() {
       
        return (
            <div>
         <Form  style={{textAlign:'center'}}>
                            <Form.Group >
                                <Form.Label>number of horns</Form.Label>
    
                <select value={this.state.value} onChange={(e)=>{this.HandelHorns(e)}} >
                                            <option value='0'>all</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="100">100</option>
                                    </select>
                                    
     
    
                            </Form.Group>
                           
                        </Form>
              {<Row xs={1} md={3} >
                  
              { DataBeast.map(value=>{
                   
                    return (
                   ( this.state.NumberHorns==value.horns&&
                    <HornedBeast title= {value.title} 
                    image_url={value.image_url}  
                    description={value.description} 
                    />)|| (this.state.NumberHorns==0&&
                        <HornedBeast title= {value.title} 
                        image_url={value.image_url}  
                        description={value.description} 
                        />) )
                })
                } 

               
               
                  </Row>}
            
                 

         
          

                        
            
</div>
        )
    }
}

export default Main
