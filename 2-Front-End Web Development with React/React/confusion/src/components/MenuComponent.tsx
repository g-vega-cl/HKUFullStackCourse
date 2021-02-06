import React, { Component, useState } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

export interface MenuProps {
  dishes: Array<any>;
}

export interface dish {
  id: string;
  name: string;
  image: string;
  category: string;
  label: string;
  price: string;
  description: string;
}

export const Menu: React.FC<MenuProps> = ({ dishes }) => {
  const [selectedDish, onDishSelect] = useState(null);

  const renderDish = (dish: dish | null) => {
    if (dish != null) {
      return (
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div></div>;
    }
  };

  const menu = dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <Card onClick={() => onDishSelect(dish)}>
          <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
          <CardImgOverlay>
            <CardTitle heading>{dish.name}</CardTitle>
          </CardImgOverlay>
        </Card>
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">{menu}</div>
      <div className="row">{renderDish(selectedDish)}</div>
    </div>
  );
};
