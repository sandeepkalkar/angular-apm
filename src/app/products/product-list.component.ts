import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
    selector:'pm-products',
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css']

})
export class ProductListComponent implements OnInit{
    pageTitle: String = 'Product List';
    imageWidth: number = 20;
    imageMargin: number = 5;
    showImage: boolean = false;
    filteredProducts : IProduct[];

    constructor(){
        this.filteredProducts = this.products;
        this.listFilter = 'cart';
    }
    _listFilter: string;
    get listFilter():string{
        return this._listFilter;
    }

    set listFilter(value:string){
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    products: IProduct[] = [
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2019",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.9567654,
            "starRating": 3.2,
            "imageUrl": "assets/images/leaf_rake.png"
          },
          {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2019",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "assets/images/garden_cart.png"
          }
    ];

    toggelImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit():void {
        console.log("Inside ngOnInit");
    }

    performFilter(filterBy:string): IProduct[]{

        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product:IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    onRatingClicked(message : string){
        this.pageTitle = 'Product List: ' + message;
    }
}