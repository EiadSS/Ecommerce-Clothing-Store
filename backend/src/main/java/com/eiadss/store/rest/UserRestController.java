package com.eiadss.store.rest;

import com.eiadss.store.dao.UserRepo;
import com.eiadss.store.entity.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/users")
@CrossOrigin(origins = {"http://localhost:5173/", "https://ecommerce-clothing-store-alpha.vercel.app"})
public class UserRestController {

    public UserRepo repo;

    public UserRestController(UserRepo repo){
        this.repo = repo;
    }

    @PostMapping("")
    public ResponseEntity<User> postUser(@RequestBody User newUser){
        try {
            User existingUser = repo.findByEmail(newUser.getEmail());
            if (existingUser != null) {
                // User with the same email already exists
                return ResponseEntity.status(HttpStatus.CONFLICT).build();
            }
            // Save the new user
            User savedUser = repo.save(newUser);
            return ResponseEntity.ok(savedUser);
        } catch (Exception e) {
            // Handle any exceptions
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/{email}/{password}")
    public User login(@PathVariable String email, @PathVariable String password){
        try {
            return repo.findByEmailAndPassword(email, password);
        } catch (Exception e) {
            return null;
        }
    }

}
