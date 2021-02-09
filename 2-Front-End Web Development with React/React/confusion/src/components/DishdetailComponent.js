import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

import { Link } from "react-router-dom";

const RenderDish = ({ dish }) => {
  return (
    <div className="col-12 col-md-5 m-1">
      <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

const RenderComments = ({ commentsArray }) => {
  const comments = commentsArray.map((comment) => {
    return (
      <div key={comment.id} className="col-12">
        <h4>Comment</h4>
        <ul className="list-unstyled">
          <li>
            <p>{comment.comment}</p>
          </li>
          <li></li>
          <li>
            <p>
              --{comment.author} ,{" "}
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              }).format(new Date(Date.parse(comment.date)))}
            </p>
          </li>
        </ul>
      </div>
    );
  });
  return <div>{comments}</div>;
};
export const DishDetail = (props) => {
  if (props.dish != null) {
    return (
      <div className="container">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>

          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{props.dish.name}</h3>
          <hr />
        </div>
        <div className="row">
          <RenderDish dish={props.dish} />
          <RenderComments commentsArray={props.comments} />
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};
