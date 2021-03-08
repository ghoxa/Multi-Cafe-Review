package kr.co.multicafe.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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

		try {
			result=reviewMapper.insertReview(review);
			menuMapper.updateMenuGrade(review.getMenuId());
			menuMapper.updateMenuTaste(review.getMenuId());
	
		}catch(Exception e) {
			e.printStackTrace();
			result = 0;
		}
		return result;
		
	}
	
	//이미 작성한 메뉴의 리뷰인지 체크
	public boolean isWriteReview(String userId, int menuId) {
		Review review_tmp = reviewMapper.getReview(userId, menuId);
		if(review_tmp!=null) { //이미 작성한 리뷰가 있으면
			return false;
		}
		else { //작성한 리뷰가 없으면
			return true;
		}
	}
	
	
	//리뷰 업데이트
	@Transactional
	public int updateReview(Review review) throws RuntimeException{
		int result = 0;
		
		try {
			result = reviewMapper.updateReview(review);
			menuMapper.updateMenuGrade(review.getMenuId());
			menuMapper.updateMenuTaste(review.getMenuId());
	
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

	
	//좋아요 많은 순서로 리뷰 보여주기
	public List<Review> goodListReview(int menuId){
		return reviewMapper.goodListReview(menuId);
	}

	
	/** 리뷰 좋아요 **/
	
	//리뷰 좋아요 업데이트
	@Transactional
	public int updateGood(int reviewId,String userId) {
		ReviewLike reviewLike = reviewLikeMapper.getReviewLike(reviewId,userId);
		if(reviewLike==null) {
			reviewMapper.plusGood(reviewId);
			reviewLike=new ReviewLike();
			reviewLike.setReivewId(reviewId);
			reviewLike.setUserId(userId);
			return reviewLikeMapper.insertReviewLike(reviewLike);
		}else {
			reviewMapper.minusGood(reviewId);
			return reviewLikeMapper.deleteReviewLike(reviewLike.getReviewLikeId());
		}
	}
	
	//메뉴 클릭시 리뷰 좋아요 체크
	public int[] isAlreadyGoodReview(int menuId, String userId) {
		List<Review> myList = reviewMapper.listViewReview(menuId);
		int[] idx = new int[myList.size()];
		
		ReviewLike reviewLike;

		for(int i=0;i<myList.size();i++) {
			reviewLike = reviewLikeMapper.getReviewLike(myList.get(i).getReviewId(),userId);
			System.out.println(reviewLike);
			if(reviewLike!=null) {
				idx[i]=1;
				System.out.println(i);
			}
			else {
				idx[i]=0;
			}
		}
		return idx;
	}
	
	//리뷰 좋아요 상태 체크
	public boolean reviewGoodCheck(int reviewId, String userId) {
		ReviewLike reviewLike= reviewLikeMapper.getReviewLike(reviewId,userId);
		if(reviewLike==null) { //좋아요 할 수 있는 상태 (좋아요 하지 않음)

			return false;
		}
		else { //좋아요 할 수 없는 상태(좋아요 한 상태)
			return true;
		}
	}
	
	//내 리뷰인지 체크
	public boolean isMyReview(int reviewId, String userId) {
		Review review = reviewMapper.getReview2(reviewId);
		System.out.println(review);
		if(userId.equals(review.getUserId())) { //좋아요 할 수 없는 상태 (내가 쓴 리뷰임)
			System.out.println("userId: "+userId+" getUser(): "+review.getUserId());
			return true;
		}
		else { //좋아요 할 수 있는 상태(내가 쓴 리뷰 아님)
			return false;
		}
	}


}
