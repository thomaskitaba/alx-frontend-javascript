export default class Building{
    constuctor (sqft) {
        if (typeof this.evacuationWarningMessage !== "function") {
            throw new Error("Class extending Building must override evacuationWarningMessage");
        }
        if (typeof sqft !== "number") {
            throw new TypeError("Sqft must be number");
        }
        this._sqft = sqft;
    }
    get sqft(){
        return this._sqft;
    }
    set sqft(sqft){
        if (typeof sqft !== "number"){
            throw new TypeError("sqft must be number");
        }
    }
}
