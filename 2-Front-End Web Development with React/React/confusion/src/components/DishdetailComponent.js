import React from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
  } from "reactstrap";

const RenderDish = ({dish}) =>{
    return(
    <div className="col-12 col-md-5 m-1" >
    <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
        <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
        </CardBody>
    </Card>
    </div>
    );
}

const RenderComments = ({commentsArray}) => {
    const comments = commentsArray.map((comment) => {

        return (
            
            <div key={comment.id} className="col-12">
                <h4>Comment</h4>
                <ul className="list-unstyled">
                    <li><p>{comment.comment}</p></li>
                    <li></li>
                    <li><p>--{comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p></li>
                </ul>
            </div>
            
            
        );
    })
    return(
        <div>
            {comments}
        </div>
        
    );
}
export const DishDetail = ({dish}) => {
    if (dish != null) {
      return (
        <div className="container">
        <div className="row">
            <RenderDish
            dish={dish}
            />
            <RenderComments
            commentsArray = {dish.comments}
            />
        </div>
        </div>
      );
    } else {
      return <div></div>;
    }
};