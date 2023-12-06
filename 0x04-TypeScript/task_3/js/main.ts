/// <reference path="./crud.d.ts" />
import { RowID, RowElement} from "./interface.ts";
import * as CRUD from "./crud.js";

const row: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva",

};
const newRowID: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = {age: 23, ...row};

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);