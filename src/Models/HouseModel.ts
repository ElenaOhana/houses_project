export class HouseModel{
    public id: number;
    public numOfRooms: number;
    public price: number;
    public description: string;

    public constructor(id:number, price:number, numOfRooms: number, description:string){
        this.id=id;
        this.numOfRooms=numOfRooms;
        this.price=price;
        this.description=description;
    }
}