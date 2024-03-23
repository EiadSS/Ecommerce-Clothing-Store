package com.eiadss.store.dao;

import com.eiadss.store.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:5173/", "https://ecommerce-clothing-store-alpha.vercel.app"})
public interface ProductRepo extends JpaRepository<Product, Long> {
    List<Product> findByTypeId(int typeId);
    List<Product> findByGender(int gender);
    @Query
    List<Product> findByTypeIdAndGender(@Param("typeId") int typeId, @Param("gender") int gender);
}
