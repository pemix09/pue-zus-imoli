import { IEZla } from "../models/e-zla";

export class ZusService {

    public processFiles(eZlas: Array<IEZla>) {
        for(let eZla of eZlas) {
            console.log(eZla);
        }
    }
}