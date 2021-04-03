package kr.co.multicafe.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import kr.co.multicafe.dto.ReviewLike;

@Mapper
public interface ReviewLikeMapper {
	public ReviewLike getReviewLike(@Param("reviewId")int reviewId, @Param("userId")String userId);
	public int insertReviewLike(ReviewLike reviewLike);
	public int deleteReviewLike(int reviewLikeId);
	public int deleteReviewLikeByReviewId(int reviewId);
}
