package com.eiadss.store.dao;

import com.eiadss.store.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:5173/", "https://ecommerce-clothing-store-alpha.vercel.app"})
public interface UserRepo extends JpaRepository<User, Long> {
    User findByEmail(String email);

    @Query
    User findByEmailAndPassword(@Param("email") String email, @Param("password") String password);
}
