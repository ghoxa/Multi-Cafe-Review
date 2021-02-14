package kr.co.multicafe.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kr.co.multicafe.dao.ReviewMapper;
import kr.co.multicafe.dto.Review;

@Service
@Transactional
public class ReviewService {

	
	@Autowired
	private ReviewMapper reviewMapper;
	
	//리뷰 추가
	public int insertReview(Review review) throws RuntimeException{
		int result=0;
		
		try {
			result = reviewMapper.insertReview(review);
	
		}catch(Exception e) {
			e.printStackTrace();
			result = 0;
		}
		
		return result;
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
	public Review getReview(int reviewId) {
		return reviewMapper.getReview(reviewId);
	}
	
	//좋아요 많은 순서로 리뷰 보여주기
	public List<Review> goodListReview(int menuId){
		return reviewMapper.goodListReview(menuId);
	}

	
	public int updateGood(int val, int reviewId) {
		return reviewMapper.updateGood(val, reviewId);
	}
	

}
