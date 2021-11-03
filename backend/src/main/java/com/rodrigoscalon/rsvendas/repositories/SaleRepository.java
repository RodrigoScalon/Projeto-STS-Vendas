package com.rodrigoscalon.rsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rodrigoscalon.rsvendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{

	
}
