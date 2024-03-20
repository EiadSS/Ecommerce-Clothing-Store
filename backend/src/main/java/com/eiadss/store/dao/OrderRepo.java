package com.eiadss.store.dao;

import com.eiadss.store.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173/")
public interface OrderRepo extends JpaRepository<Order, Long> {

    List<Order> findByUserId(int id);
}
