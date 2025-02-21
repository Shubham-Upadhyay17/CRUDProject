import { Component } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {
  
  postProductForm !: FormGroup  ;

  constructor(private productService: ProductService, private fb:FormBuilder,
    private router: Router
  ) {}

  ngOnInit(){
    this.postProductForm = this.fb.group({
      id: [null, Validators.required],
      name: [null, Validators.required],
      price: [null, Validators.required]
    })
  }
  postProduct(){
    this.productService.postProduct(this.postProductForm.value).subscribe((res)=>{
      console.log(res);
      this.router.navigateByUrl("");
    })
  }
  
}
