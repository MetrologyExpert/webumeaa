export class Contribution {

    public id:number;
    public title:string;
    public errorValue: number; 
    public divisor: number; 
    public standardUncertainty: number;
    public sensitivityCoefficient: number;
    public stdUncertainty: number;

    constructor(
        title:string,
        errorValue: number, 
        divisor: number,
        standardUncertainty: number,
        sensitivityCoefficient: number,
        stdUncertainty:number
        )
    
    {
        this.title = title,
        this.errorValue = errorValue, 
        this.divisor = divisor,
        this.standardUncertainty = standardUncertainty,
        this.sensitivityCoefficient = sensitivityCoefficient,
        this.stdUncertainty = stdUncertainty
    }     

}