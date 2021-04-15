package kr.co.multicafe.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kr.co.multicafe.dto.Location;

@CrossOrigin("*")
@RestController
@RequestMapping(path="/api/map")
public class MapRestController {
	
	@PostMapping
	public void getLoc(@RequestBody Location loc) {


	}

}
