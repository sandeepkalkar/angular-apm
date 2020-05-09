import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css']

})
export class ProductListComponent implements OnInit{
    pageTitle: String = 'Product List';
    imageWidth: number = 20;
    imageMargin: number = 5;
    showImage: boolean = false;
    filteredProducts : IProduct[];
    errorMessage : string;

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
        this.productService.getProducts().subscribe({
           next : products => {
               this.products = products;
               this.filteredProducts = this.products;
           },
           error :  err => this.errorMessage = err
        });
        
    }

    performFilter(filterBy:string): IProduct[]{

        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product:IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    onRatingClicked(message : string){
        this.pageTitle = 'Product List: ' + message;
    }
}