import { Redirect, Route } from "react-router-dom";
import AddFurniture from "../../FurnitureArea/AddFurniture/AddFurniture";
import FurnitureList from "../../FurnitureArea/FurnitureList/FurnitureList";

function Routing(): JSX.Element {
    return (
        <>
			<switch>
                <Route path="/furniture" component={FurnitureList} />
                <Route path="/add-furniture" component={AddFurniture} />
                <Redirect from="/" to="/furniture" exact /> 
            </switch>
        </>
    );
}

export default Routing;
