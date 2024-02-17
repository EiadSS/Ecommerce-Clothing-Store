package com.eiadss.store.rest;

import com.eiadss.store.dao.ProductRepo;
import com.eiadss.store.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:5173/")
public class ProductsController {
    private ProductRepo productRepo;

    @Autowired
    public ProductsController(ProductRepo someRepo){
        productRepo = someRepo;
    }
    @GetMapping("/shirts")
    public List<Product> getShirts(){
        return productRepo.findByTypeId(1);
    }
    @GetMapping("/pants")
    public List<Product> getPants(){
        return productRepo.findByTypeId(2);
    }
    @GetMapping("/shoes")
    public List<Product> getShoes(){
        return productRepo.findByTypeId(3);
    }
}