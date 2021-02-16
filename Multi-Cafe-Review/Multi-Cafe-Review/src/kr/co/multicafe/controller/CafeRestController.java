package kr.co.multicafe.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kr.co.multicafe.dto.Cafe;
import kr.co.multicafe.service.CafeService;


@CrossOrigin("*")
@RestController
@RequestMapping(path="/api/cafe")
public class CafeRestController {
	@Autowired 
	private CafeService cafeService;

	
	@GetMapping
	public List<Cafe> listViewCafe(){
		return cafeService.listViewCafe();
	}
	
	@GetMapping("/{cafeId}")
	public Cafe getCafe(@PathVariable(name="cafeId")int cafeId) {
		return cafeService.getCafe(cafeId);
	}
}
