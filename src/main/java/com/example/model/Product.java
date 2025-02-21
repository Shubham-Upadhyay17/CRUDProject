package com.example.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "product_info")
public class Product {
	@Id
	Integer id;
	String name;
	float price;
	
	
	
	public Product() {
		
	}



	public Product(int id, String name, float price) {
		//super();
		this.id = id;
		this.name = name;
		this.price = price;
	}



	public int getID() {
		return id;
	}



	public void setID(int id) {
		this.id = id;
	}



	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	public float getPrice() {
		return price;
	}



	public void setPrice(float price) {
		this.price = price;
	}
	
	
	
}
