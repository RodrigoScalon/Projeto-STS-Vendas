package com.rodrigoscalon.rsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rodrigoscalon.rsvendas.entities.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long>{

	
}
