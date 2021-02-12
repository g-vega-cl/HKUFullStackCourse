import React, { useState } from "react";
import {
  Button,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Col,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  Row,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const required = (val) => val && val.length;
  const maxLength = (len) => (val) => !val || val.length <= len;
  const minLength = (len) => (val) => !val || val.length >= len;

  const handleSubmit = (values) => {
    console.log("Current State is: " + JSON.stringify(values));
    alert("Current State is: " + JSON.stringify(values));
    // event.preventDefault();
  }

  const commentForm = () => {
    return (
      <div className="col-12 m-1">
        <Button className="btn btn-light" onClick={toggleModal}>
          <span className="fa fa-pencil fa-lg m-1"></span>Submit comment
        </Button>
      </div>
    );
  };
  const comments = commentsArray.map((comment) => {
    return (
      <>
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
      </>
    );
  });
  return (
    <div>
      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Submit comment</ModalHeader>
        <ModalBody>
          <LocalForm onSubmit={(values) => handleSubmit(values)}>
            <Row className="form-group">
              <Col md={{ size: 12 }}>
                <Label htmlFor="contactType">
                  Rating
                </Label>
                <Control.select
                  model=".contactType"
                  name="contactType"
                  className="form-control"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Control.select>
              </Col>
            </Row>
            <Row className="form-group">
              
              <Col md={12}>
              <Label htmlFor="name">
                Your name
              </Label>
                <Control.text
                  model=".name"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".name"
                  show="touched"
                  messages={{
                    required: "Required",
                    minLength: "Must be greater than 2 characters",
                    maxLength: "Must be 15 characters or less",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Col md={12}>
              <Label htmlFor="message">
                Comment
              </Label>
                <Control.textarea
                  model=".message"
                  id="message"
                  name="message"
                  rows="6"
                  className="form-control"
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Col md={{ size: 3}}>
                <Button type="submit" color="primary">
                  Submit
                </Button>
              </Col>
            </Row>
          </LocalForm>
        </ModalBody>
      </Modal>
      <div>{comments}</div>
      {commentForm()}
    </div>
  );
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
