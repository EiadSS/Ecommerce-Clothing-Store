package com.eiadss.store.dao;

import com.eiadss.store.entity.Bought;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;


@CrossOrigin(origins = "http://localhost:5173/")
public interface BoughtRepo extends JpaRepository<Bought, Long> {

    List<Bought> findByOrderId(int id);

}
