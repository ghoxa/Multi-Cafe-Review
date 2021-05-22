package kr.co.multicafe.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kr.co.multicafe.dto.Cafe;
import kr.co.multicafe.dto.Menu;
import kr.co.multicafe.dto.Page;
import kr.co.multicafe.dto.Review;
import kr.co.multicafe.service.CafeService;
import kr.co.multicafe.service.MenuService;
import kr.co.multicafe.service.ReviewService;
@CrossOrigin("*")
@RestController
@RequestMapping(path="/api/admin")
public class AdminController {
	@Autowired
	private CafeService cafeService;
	
	@Autowired
	private MenuService menuService;
	
	@Autowired
	private ReviewService reviewService;
	
	//카페 추가
	@PostMapping("/cafe")
	public void insertCafe(@RequestBody Cafe cafe) {
		cafeService.insertCafe(cafe);
	}
	
	//카페 삭제
	@DeleteMapping("/cafe/{cafeId}")
	public void deleteCafe(@PathVariable(name="cafeId")int cafeId) {
		cafeService.deleteCafe(cafeId);
	}
	
	
	//메뉴 추가
	@PostMapping("/menu")
	public void insertMenu(@RequestBody Menu menu) {
		menuService.insertMenu(menu);
	}
	
	//메뉴 수정
	@PutMapping("/menu")
	public int updateMenu(@RequestBody Menu menu) {
		return menuService.updateMenu(menu);
	}
	
	//메뉴 삭제
	@DeleteMapping("/menu/{menuId}")
	public void deleteMenu(@PathVariable(name="menuId")int menuId) {
		menuService.deleteMenu(menuId);
	}
	
	//신고된 리뷰 조회
	@GetMapping("/review/reports/{pageno}")
	public Page getReportedReview(@PathVariable(name="pageno")int pageno) {
		return reviewService.getReportedReview(pageno);
	}
	
	@DeleteMapping("/review/{reviewId}")
	public int deleteReview(@PathVariable(name="reviewId")int reviewId) {
		return reviewService.deleteReview(reviewId);
	}

}
