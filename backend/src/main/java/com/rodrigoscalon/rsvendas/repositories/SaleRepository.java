package com.rodrigoscalon.rsvendas.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.rodrigoscalon.rsvendas.dto.SaleSuccessDTO;
import com.rodrigoscalon.rsvendas.dto.SaleSumDTO;
import com.rodrigoscalon.rsvendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{

	@Query("SELECT new com.rodrigoscalon.rsvendas.dto.SaleSumDTO(obj.seller, SUM(obj.amount)) "
			+ "FROM Sale AS obj GROUP BY obj.seller") //JPQL
	List<SaleSumDTO> amountGroupedBySeller();
	
	
	@Query("SELECT new com.rodrigoscalon.rsvendas.dto.SaleSuccessDTO(obj.seller, SUM(obj.visited), SUM(obj.deals)) "
			+ "FROM Sale AS obj GROUP BY obj.seller") //JPQL
	List<SaleSuccessDTO> successGroupedBySeller();
}
