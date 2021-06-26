import React, { Component } from 'react'
import { Button,Modal } from 'react-bootstrap'

class SelectedBeast extends Component {
    constructor(props){
        super(props)
        this.state={
          show:false
        }
      }
      HandelModel=()=>{
        this.setState({
          show:!this.state.show
        })
      }
    render() {
        return (
            <>
            <Button variant="primary" onClick={this.HandelModel}>
              Show more
            </Button>
      
            <Modal show={this.state.show} onHide={this.HandelModel}>
              <Modal.Header closeButton >
                <Modal.Title>{this.props.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <img src={this.props.image_url} width='100%'/> 
                  {this.props.description}</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.HandelModel}>
                  Close
                </Button>
               
              </Modal.Footer>
            </Modal>
          </>
        )
    }
}

export default SelectedBeast
