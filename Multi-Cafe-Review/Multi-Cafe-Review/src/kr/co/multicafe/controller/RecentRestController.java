package kr.co.multicafe.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kr.co.multicafe.dto.Menu;
import kr.co.multicafe.dto.Recent;
import kr.co.multicafe.service.RecentService;

@RestController
@RequestMapping(path="/api/recent")
public class RecentRestController {
	@Autowired
	private RecentService recentService;
	
//	@PostMapping
//	public int insertRecent(@RequestBody Recent recent) {
//		return recentService.insertRecent(recent);
//	}
	
	@GetMapping("/{userId}")
	public List<Menu> listViewRecent(@PathVariable(name="userId")String userId){
		return recentService.listViewRecent(userId);
	}
}
