import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

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

    constructor(private productService : ProductService){
    }
    _listFilter: string;
    get listFilter():string{
        return this._listFilter;
    }

    set listFilter(value:string){
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    products: IProduct[] = [];

    toggelImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit():void {
        console.log("Inside ngOnInit");
        this.products = this.productService.getProducts();
        this.filteredProducts = this.products;
    }

    performFilter(filterBy:string): IProduct[]{

        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product:IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    onRatingClicked(message : string){
        this.pageTitle = 'Product List: ' + message;
    }
}