package com.eiadss.store.dao;

import com.eiadss.store.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173/")
public interface ProductRepo extends JpaRepository<Product, Long> {
    List<Product> findByTypeId(int typeId);
}
