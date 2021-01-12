import { UncertaintyBudget } from "./uncertaintyBudget.model";

export class Instrument {

    public name: string;
    public description: string;
    public imagePath:string;
    public uncertainty: UncertaintyBudget[]

    constructor(name: string, desc:string, imagePath: string, uncertainty){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.uncertainty = uncertainty
    }

}