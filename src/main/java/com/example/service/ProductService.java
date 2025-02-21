package com.example.service;

import java.util.List;

import com.example.model.Product;

public interface ProductService {
	public String createProduct(Product product); 
	public String updateProduct(Product product);
	public String deleteProduct(Integer id);
	public Product getProduct(Integer id);
	public List<Product> getAllProduct();
		
	

}
