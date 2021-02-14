package kr.co.multicafe.controller;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kr.co.multicafe.dto.Review;
import kr.co.multicafe.service.ReviewService;

@RestController
@RequestMapping(path="/api/review")
public class ReviewRestController {

	@Autowired
	private ReviewService reviewService;
	
	//리뷰 추가
	@PostMapping
	public int insertReview(@RequestBody Review review) {
		return reviewService.insertReview(review);
	}
	
	//리뷰 업데이트 sweet, bitter, sour 업뎃 안됨
	@PutMapping
	public int updateReview(@RequestBody Review review) {
		return reviewService.updateReview(review);
	}
	
	@DeleteMapping("/{reviewId}")
	public int deleteReview(@PathVariable(name="reviewId") int reviewId) {
		return reviewService.deleteReview(reviewId);
	}
	
	@GetMapping("/{menuId}")
	public List<Review> listViewReview(@PathVariable(name="menuId")int menuId){
		return reviewService.listViewReview(menuId);
	}
	
	@GetMapping("/my/{userId}")
	public List<Review> listMyReview(@PathVariable(name="userId")String userId){
		return reviewService.listMyReview(userId);
	}
//	
//	public Review getReview(int reviewId) {
//		return reviewService.getReview(reviewId);
//	}
//	
	@GetMapping("/good/{menuId}")
	public List<Review> goodListReview(@PathVariable(name="menuId")int menuId){
		return reviewService.goodListReview(menuId);
	}

//	@PutMapping("/good/count")
//	public int updateGood(@Param("val")int val, @Param("reviewId")int reviewId) {
//		return reviewService.updateGood(val, reviewId);
//	}
}
