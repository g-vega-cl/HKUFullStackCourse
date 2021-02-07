import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardImgOverlay,
  } from "reactstrap";



const RenderMenuItem = ({dish, onClick}) =>{
    return (
          <Card onClick={()=> onClick(dish.id)}>
            <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
            <CardImgOverlay>
              <CardTitle heading>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
      );
}

export const Menu = (props) =>{
    const menu = props.dishes.map((dish) => {
        return(
        <div key={dish.id} className="col-12 col-md-5 m-1">
            <RenderMenuItem
                dish={dish}
                onClick ={props.onClick}
            />
        </div>
        );
      });
      
      return (
        <div className="container">
          <div className="row">{menu}</div>
        </div>
      );

}