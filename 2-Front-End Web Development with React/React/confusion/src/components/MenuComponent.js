import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardImgOverlay,
  } from "reactstrap";

export const Menu = ({dishes, onClick}) =>{
    

    const menu = dishes.map((dish) => {
        return (
          <div key={dish.id} className="col-12 col-md-5 m-1">
            <Card onClick={()=> onClick(dish.id)}>
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
        </div>
      );

}