Import Building from "./5-building";

export default class SkyHighBuilding extends Building{
    constructor(sqft, floors) {
        super(sqft);
        if (typeof floors !== "number") {
            throw new TypeError("Floor must be number");
        }
        this._floors = floors;
    }
        get floors() {
            return this._floors;
        }

        set floors(floors) {
            if (typeof floors !== "number") {
                throw new TypeError("Floor must be number");
            }
            this._floors = floors;
        }
        evacuationWarningMessage(){
            const message = `Evacuate slowly the NUMBER_OF_FLOORS ${this.floors}`;
        }

    }
