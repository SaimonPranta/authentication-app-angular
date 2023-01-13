import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/productService/product.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashbordComponent {

  productArray: any = []

  constructor(
    private productService: ProductService

  ) { }
  ngOnInit(): void {
    this.productService.product().subscribe((result: any) => {
      if (result.data) {
        // console.log(result)
        this.productArray = result.data
        console.log(this.productArray)

      }
    })

  }
  handleAddProduct = (data: any) => {
    const { title, dic, price, disCout, brand } = data
    if (title && dic && price && disCout && brand) {
      this.productService.addProduct(data).subscribe((result) => {
        console.log(result)
      })
    }
  }
}
