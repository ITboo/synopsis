import { useParams } from "react-router-dom";
import { ViewItemRouteParams } from "./lib/routes";

const Item = () => {
    const {itemId} = useParams() as ViewItemRouteParams
  return (
    <div>
      <h1>{itemId}</h1>
    </div>
  );
};

export default Item;
