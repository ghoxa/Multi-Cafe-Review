package kr.co.multicafe.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kr.co.multicafe.dto.Review;
import kr.co.multicafe.service.ReviewService;

@CrossOrigin("*")
@RestController
@RequestMapping(path="/api/review")
public class ReviewRestController {

	@Autowired
	private ReviewService reviewService;
	
	@GetMapping("/{menuId}")
	public List<Review> listViewReview(@PathVariable(name="menuId")int menuId){
		return reviewService.listViewReview(menuId);
	}
	
//	@GetMapping("/{reviewId}")
//	public Review getReview(int reviewId) {
//		return reviewService.getReview(reviewId);
//	}
	
	@GetMapping("/good/{menuId}")
	public List<Review> goodListReview(@PathVariable(name="menuId")int menuId){
		return reviewService.goodListReview(menuId);
	}

}
