package com.eiadss.store.rest;

import com.eiadss.store.dao.BoughtRepo;
import com.eiadss.store.entity.Bought;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/boughts")
@CrossOrigin(origins = {"http://localhost:5173/", "https://ecommerce-clothing-store-alpha.vercel.app"})
public class BoughtRestController {

    public BoughtRepo repo;

    public BoughtRestController(BoughtRepo repo) {
        this.repo = repo;
    }

    @GetMapping("order/{orderId}")
    public List<Bought> findByOrderId(@PathVariable int orderId) {
        return repo.findByOrderId(orderId);
    }

}
