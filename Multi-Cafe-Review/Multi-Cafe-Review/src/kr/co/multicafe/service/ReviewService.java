package kr.co.multicafe.service;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kr.co.multicafe.common.utils.UserUtil;
import kr.co.multicafe.dao.MenuMapper;
import kr.co.multicafe.dao.ReviewLikeMapper;
import kr.co.multicafe.dao.ReviewMapper;
import kr.co.multicafe.dto.Review;
import kr.co.multicafe.dto.ReviewLike;

@Service
@Transactional
public class ReviewService {

	
	@Autowired
	private ReviewMapper reviewMapper;
	
	@Autowired
	private ReviewLikeMapper reviewLikeMapper;
	
	@Autowired
	private MenuMapper menuMapper;
	
	
	//리뷰 추가
	@Transactional
	public int insertReview(Review review) throws RuntimeException{
		int result=0;
//		Review review_tmp = reviewMapper.getReview(review.getUserId(), review.getMenuId());
		
//		if(review_tmp==null) {
//			menuMapper.updateMenuGrade(review.getMenuId());
//			menuMapper.updateMenuTaste(review.getMenuId());
//			result=reviewMapper.insertReview(review);
//		}
//		else {
//			result=0;
//		}

		try {
			menuMapper.updateMenuGrade(review.getMenuId());
			menuMapper.updateMenuTaste(review.getMenuId());
			result=reviewMapper.insertReview(review);
	
		}catch(Exception e) {
			e.printStackTrace();
			result = 0;
		}
		return result;
		
	}
	
	
	public boolean isWriteReview(String userId, int menuId) {
		Review review_tmp = reviewMapper.getReview(userId, menuId);
		if(review_tmp!=null) {
			return false;
		}
		else {
			return true;
		}
	}
	
	
	//리뷰 업데이트
	public int updateReview(Review review) throws RuntimeException{
		int result = 0;
		
		try {
			result = reviewMapper.updateReview(review);
	
		}catch(Exception e) {
			e.printStackTrace();
			result = 0;
		}
		return result;
	}
	
	
	//리뷰 삭제
	public int deleteReview(int reviewId) throws RuntimeException{
		int result = 0;
		try {
			result = reviewMapper.deleteReview(reviewId);
	
		}catch(Exception e) {
			e.printStackTrace();
			result = 0;
		}
		
		return result;
	}
	
	//메뉴에 대한 리뷰 목록 
	public List<Review> listViewReview(int menuId){
		return reviewMapper.listViewReview(menuId);
	}
	
	//내가 쓴 리뷰 보여주기
	public List<Review> listMyReview(String userId){
		return reviewMapper.listMyReview(userId);
	}
	
	//리뷰 하나 얻어오기
//	public Review getReview(int reviewId) {
//		return reviewMapper.getReview(reviewId);
//	}
	
	//좋아요 많은 순서로 리뷰 보여주기
	public List<Review> goodListReview(int menuId){
		return reviewMapper.goodListReview(menuId);
	}

	@Transactional
	public int updateGood(int reviewId,String userId) {
		ReviewLike reviewLike = reviewLikeMapper.getReviewLike(reviewId,userId);
		if(reviewLike==null) {
			reviewMapper.plusGood(reviewId);
			reviewLike=new ReviewLike();
			reviewLike.setReivewId(reviewId);
			reviewLike.setUserId(userId);
			reviewLikeMapper.insertReviewLike(reviewLike);
			return 1;
		}else {
			reviewMapper.minusGood(reviewId);
			reviewLikeMapper.deleteReviewLike(reviewLike.getReviewLikeId());
			return 0;
		}
	}
	

}
