package com.example.serviceimpl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.model.Product;
import com.example.repository.ProductRepository;
import com.example.service.ProductService;

@Service
public class ServiceImpl implements ProductService {

	ProductRepository ProRepo;
	
	public ServiceImpl(ProductRepository proRepo) {
		//super();
		this.ProRepo = proRepo;
	}

	@Override
	public String createProduct(Product product) {
		// TODO Auto-generated method stub
		ProRepo.save(product);
		return "Product created success!";
	}

	@Override
	public String updateProduct(Product product) {
		// TODO Auto-generated method stub
		ProRepo.save(product);
		return "Product updated successfully!";
	}

	@Override
	public String deleteProduct(Integer ProductID) {
		// TODO Auto-generated method stub
		ProRepo.deleteById(ProductID);
		return "Product deleted successfully!";
	}

	@Override
	public Product getProduct(Integer ProductID) {
		// TODO Auto-generated method stub
		return ProRepo.findById(ProductID).get();
		
	}

	@Override
	public List<Product> getAllProduct() {
		// TODO Auto-generated method stub
		return ProRepo.findAll();
	}

}
