package com.example.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.Product;
import com.example.service.ProductService;

@RestController
@RequestMapping("/product")
public class Controller {
	//Product product;
	ProductService productService;
	
	@GetMapping("/{id}")
	public Product getDetails(@PathVariable("id") Integer id ) {
		return productService.getProduct(id);
	}
	
	@GetMapping()
	public List<Product> getAllDetails(){
		return productService.getAllProduct();
	}
	
	@PostMapping
	public String createDetails(@RequestBody Product product) {
		productService.createProduct(product);
		return "Product created successfully!";
	}
	
	@PutMapping
	public String updateDetails(@RequestBody Product product) {
		productService.updateProduct(product);
		return "Product details were updated successfully!";
	}
	
	@DeleteMapping("/{id}")
	public String deleteDetails(@PathVariable("id") Integer id) {
		productService.deleteProduct(id);
		return "Product was deleted successfully!";
	}
}
