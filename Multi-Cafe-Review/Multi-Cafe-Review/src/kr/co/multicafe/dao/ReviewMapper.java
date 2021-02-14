package kr.co.multicafe.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import kr.co.multicafe.dto.Review;

@Mapper
public interface ReviewMapper {
	public int insertReview(Review review);
	public int updateReview(Review review);
	public int deleteReview(int reviewId);
	public List<Review> listViewReview(int menuId);
	public List<Review> listMyReview(String userId);
	public Review getReview(int reviewId);
	public List<Review> goodListReview(int menuId);
	public int updateGood(int val, int reviewId); //리뷰 좋아요 수정
}
