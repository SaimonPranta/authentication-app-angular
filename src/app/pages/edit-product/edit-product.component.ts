import { ProductService } from 'src/app/services/productService/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent {
  perams : any = ""
  product : any = ""

  constructor(
    private route : ActivatedRoute ,
    private router : Router ,
    private productservice : ProductService
  ){}

  ngOnInit(): void {
    this.perams = this.route.snapshot.paramMap.get("id")
    if (this.perams) {
      this.productservice.getOneProduct(this.perams).subscribe( (result : any) => {
        if (result.data) {
          this.product = result.data
        }
      })
    }
    
  }

  handleEditProduct(data: any) {
    const { title, dic, price, disCout, brand } = data
    if (title && dic && price && disCout && brand) {
      this.productservice.editProduct( this.perams, data).subscribe((result : any) => {
        if (result.data) {
          this.router.navigate(["dashboard"])
        }
      })
    }
  }

}
