package kr.co.multicafe.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import kr.co.multicafe.dto.Review;

@Mapper
public interface ReviewMapper {
	public int insertReview(Review review);
	public int updateReview(Review review);
	public int deleteReview(int reviewId);
	public List<Review> listViewReview(int menuId);
	public List<Review> listMyReview(String userId);
	public Review getReview(@Param("userId")String userId, @Param("menuId")int menuId);
	public Review getReview2(@Param("reviewId")int reviewId);
	public List<Review> goodListReview(int menuId);
	public int plusGood(int reviewId);
	public int minusGood(int reviewId);
}
