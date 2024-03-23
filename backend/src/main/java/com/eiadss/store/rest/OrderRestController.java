package com.eiadss.store.rest;

import com.eiadss.store.dao.OrderRepo;
import com.eiadss.store.entity.Order;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = {"http://localhost:5173/", "https://ecommerce-clothing-store-alpha.vercel.app"})
public class OrderRestController {
    private OrderRepo repo;

    public OrderRestController(OrderRepo repo){
        this.repo = repo;
    }

    @GetMapping("user/{userId}")
    public List<Order> findOrders(@PathVariable int userId){
        return repo.findByUserId(userId);
    }

}
