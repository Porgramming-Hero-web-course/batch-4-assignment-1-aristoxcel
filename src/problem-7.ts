class Car{
    constructor(public make:string, public model:string, public year:number){

    }
    getCarAge(){
        const currentYear= new Date().getFullYear();
        return `${currentYear - this.year} (assuming current year is 2024)`;
    }
}





