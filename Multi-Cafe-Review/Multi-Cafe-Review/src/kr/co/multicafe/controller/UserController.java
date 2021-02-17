package kr.co.multicafe.controller;

import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

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

import kr.co.multicafe.dto.Menu;
import kr.co.multicafe.dto.Review;
import kr.co.multicafe.dto.ReviewLike;
import kr.co.multicafe.dto.Users;
import kr.co.multicafe.service.MenuService;
import kr.co.multicafe.service.RecentService;
import kr.co.multicafe.service.ReviewService;
import kr.co.multicafe.service.UsersService;

@CrossOrigin("*")
@RestController
@RequestMapping(path="/api/user")
public class UserController {
	
	@Autowired
	private MenuService menuService;

	@Autowired
	private ReviewService reviewService;

	@Autowired
	private RecentService recentService;
	
	@Autowired
	private UsersService usersService;


	@GetMapping("/{userId}/menu/{menuId}/like")
	public void updateGood(@PathVariable String userId, @PathVariable int menuId) {
//		menuService.insertOrDeleteLike(UserUtil.getCurrentUserId(), menuId);
		menuService.insertOrDeleteLike(userId, menuId);
	}
	
	@GetMapping("/{userId}/menu/like")
	public List<Menu> listViewLike(@PathVariable String userId) {
		return menuService.listViewLike(userId);
	}

	@GetMapping("/{userId}/{menuId}/likecheck")
	public boolean likeCheck(@PathVariable String userId, @PathVariable int menuId) {
		if (menuService.getLike(userId, menuId) != null)
			return true;
		return false;
	}

	//리뷰 추가
	@PostMapping("/review")
	public int insertReview(@RequestBody Review review, HttpServletResponse response) throws Exception {
		int result=reviewService.insertReview(review);
		if(result==0)
			response.sendError(5000, "해당 메뉴에 대한 리뷰를 이미 등록하셨습니다.");
		return result;
		
	}
	
	//리뷰 업데이트 
	@PutMapping("/review")
	public int updateReview(@RequestBody Review review) {
		return reviewService.updateReview(review);
	}
	
	@DeleteMapping("/review/{reviewId}")
	public int deleteReview(@PathVariable(name="reviewId") int reviewId) {
		return reviewService.deleteReview(reviewId);
	}

	@GetMapping("/review/my/{userId}")
	public List<Review> listMyReview(@PathVariable(name="userId")String userId){
		return reviewService.listMyReview(userId);
	}
	
	@PostMapping("/review/good/count")
	public int updateGood(@RequestBody ReviewLike reviewLike) { 
		return reviewService.updateGood(reviewLike.getReviewId(), reviewLike.getUserId());
	}
	
	@GetMapping("/recent/{userId}")
	public List<Menu> listViewRecent(@PathVariable(name="userId")String userId){
		return recentService.listViewRecent(userId);
	}
	
	@PutMapping
	public int updateUser(@RequestBody Users user) {
		return usersService.updateUser(user);
	}
	
	@GetMapping("/{userId}")
	public Users getUser(@PathVariable String userId) {
		return usersService.getUser(userId);
	}
	

}
