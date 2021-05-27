export class Products {
    id: number;
    name: string;
    imageUrl: string;
 
    constructor(id:number, name:string,imageUrl='https://images-na.ssl-images-amazon.com/images/I/61DJRLNgyWL._AC_SL1500_.jpg') {
        this.id = id
        this.name = name
        this.imageUrl = imageUrl
    }
}
