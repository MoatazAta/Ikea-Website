import { Component } from "react";
import "./AddFurniture.css";

interface AddFurnitureState {
	
}

class AddFurniture extends Component<{}, AddFurnitureState> {

    public constructor(props: {}) {
        super(props);
        this.state = {
			
        };
    }

    public render(): JSX.Element {
        return (
            <div className="AddFurniture">
				<h2>Add Furniture</h2>
            </div>
        );
    }
}

export default AddFurniture;
