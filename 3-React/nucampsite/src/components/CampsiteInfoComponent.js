
import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label, Col,Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
// import Comments from'shared/campsites';
// class CampsiteInfo extends Component {

    const required = val => val && val.length;
    const maxLength = len => val => !val || (val.length <= len);
    const minLength = len => val => val && (val.length >= len);
    const isNumber = val => !isNaN(+val);
    const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class CommentForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            isModalOpen: false
        };
        
       
        this.toggleModal = this.toggleModal.bind(this);
        
    }
    

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    
    handleSubmit(values) {
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " + JSON.stringify(values));
    }
    render() {
        return (
           <div>
                <Button outline onClick={this.toggleModal}>
                    <i class="fa fa-pencil" aria-hidden="true" />
                    Submit Comment
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                    <LocalForm onSubmit = {values => this.handleSubmit(values)}>
                        <div className="form-group">
                                <Label htmlFor=".rating" md={2}>Rating</Label>
                              
                                <Control.select model=".rating" id="rating" name="rating" className="form-control">
                                    <option value="1">1 star</option>
                                    <option value="2">2 stars</option>
                                    <option value="3">3 stars</option>
                                    <option value="4">4 stars</option>
                                    <option value="5">5 stars</option>
                                    <option value="6">6 stars</option>
                                        </Control.select>      
                        </div>
                        <div className="form-group">
                                <Label htmlFor=".author" md={2}>Author</Label>
                               
                                <Control.text model=".author" id="author" name="author"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required, 
                                            minLength: minLength(2),
                                            maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".firstName"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                              
                            </div>
                            <div className="form-group">
                                <Label htmlFor=".text" md={6}>Text</Label>
                               
                                <Control.textarea model=".text" id="text" name="text"  className="form-control"/>
                            </div>
                            <Button type="submit" value="submit" color="primary">Submit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
           
        )
    }
}
function RenderCampsite({ campsite }) {
    return (
        <div className="col-md-5 m-1">
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name} />
                <CardBody>
                    <CardText>{campsite.description}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}
function RenderComments({ comments }) {
    if (comments) {
        return (
            <div className="col-md-5 m-1">
                <h4>Comments</h4>
                {comments.map(comment => {
                    return (
                        <div>
                            <p>{comment.text}</p>
                            <p>--{comment.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                        </div>
                    )
                }
                )}
                <CommentForm />

            </div>
        )
    }
    else {
        return (<div />);
    }
}
// render() {
//     if (this.props.campsite) {
//     return (
//             <div className="row">   
//             {this.renderCampsite(this.props.campsite)}  
//             {this.renderComments(this.props.campsite.comments)}
//             </div>   

//     );
//     }
//     else{
//         return (
//             <div></div>
//         )
//     }
// }
//     render() {
//     if (this.props.campsite) {
//         return (
//             <div className="container">
//                 <div className="row">
//                     {this.renderCampsite(this.props.campsite)}
//                     {this.renderComments(this.props.campsite.comments)}
//                 </div>
//             </div>
//         );
//     }
//     return <div />;
// }
function CampsiteInfo(props) {
    if (props.campsite) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.campsite.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderCampsite campsite={props.campsite} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        );
    }
    return <div />;
}
// }

export default CampsiteInfo;