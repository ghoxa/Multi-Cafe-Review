package kr.co.multicafe.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
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
	
	@GetMapping("/{menuId}/{option}")
	public List<Review> listViewReview(@PathVariable(name="menuId")int menuId, @PathVariable(name="option") int option){
		return reviewService.listViewReviewByOption(menuId, option);
	}
	
	
//	@GetMapping("/{reviewId}")
//	public Review getReview(int reviewId) {
//		return reviewService.getReview(reviewId);
//	}
	
	@GetMapping("/good/{menuId}")
	public List<Review> goodListReview(@PathVariable(name="menuId")int menuId){
		return reviewService.goodListReview(menuId);
	}
	
	//리뷰 신고 건수 증가
	@PutMapping("/{reviewId}/{userId}/reports")
	public int updateReviewReport(@PathVariable String userId, @PathVariable int reviewId) {
		return reviewService.updateReport(userId, reviewId);
	}
	
	//신고 테이블에 (reviewId, userId)가 있는지 확인 => 이미 신고한 리뷰인지 판단에 사용
	@GetMapping("/{reviewId}/{userId}/reports")
	public int getReportCnt(@PathVariable(name="userId")String userId, @PathVariable(name="reviewId")int reviewId) {
		return reviewService.getReportCnt(userId, reviewId);
	}

}
