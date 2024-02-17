package com.eiadss.store.dao;

import com.eiadss.store.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:5173/")
public interface UserRepo extends JpaRepository<User, Long> {
}
