import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  updateProductForm!: FormGroup;
  id!: number;
  
  constructor(
    private activatedRoute: ActivatedRoute, 
    private productService: ProductService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = +this.activatedRoute.snapshot.params['id'];
    this.updateProductForm = this.fb.group({
      name: [null, Validators.required],
      price: [null, Validators.required]
    });
    this.getProductById();
  }
  
  getProductById(): void {
    this.productService.getProductById(this.id).subscribe({
      next: (product: any) => {
        this.updateProductForm.patchValue({
          name: product.name,
          price: product.price
        });
      }
    });
  }

  updateProduct(): void {
    this.productService.updateProduct(this.id, this.updateProductForm.value).subscribe({
      next: (res: any) => {
        console.log(res);
        if(res.id != null){
          this.router.navigateByUrl("");
        }
      }
    });
  }
}
