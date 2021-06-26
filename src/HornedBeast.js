import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import SelectedBeast from './SelectedBeast'

class HornedBeast extends Component {
    constructor(props){
      super(props)
      this.state={
          vote:0,
      }
    }
    HandleVote=()=>{
        this.setState({
            vote:this.state.vote+1
        })
    }

    render() {
        return (
            <div>
               
                
            
                
                <Card style={{ width: '18rem' , height:'480px' ,margin:'50px'}}>
                    <Card.Img variant="top" src={this.props.image_url}  onClick={this.HandleVote} height='250px' />
                    <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                    {this.props.description} //{this.state.vote}
                    </Card.Text>
                    <SelectedBeast image_url={this.props.image_url}
                            title={this.props.title}
                            description={this.props.description} 
                            />
                    </Card.Body>
                    
                </Card>
                
            
           
              
               
                {/* <h2>
                    {this.props.title}
                </h2>
                <img src={this.props.image_url} width='400px' />
                <p>{this.props.description}</p>
                
                <p> <button onClick={this.HandleVote}>love</button>{this.state.vote}</p> */}
            </div>
        )
    }
}

export default HornedBeast
