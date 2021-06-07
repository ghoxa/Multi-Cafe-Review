package kr.co.multicafe.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import kr.co.multicafe.dto.Menu;
import kr.co.multicafe.dto.Page;
import kr.co.multicafe.dto.Review;

@Mapper
public interface ReviewMapper {
	public int insertReview(Review review);
	public int updateReview(Review review);
	public int deleteReview(int reviewId);
	public List<Review> listViewReview(int menuId);
	public List<Review> listViewReviewPage(@Param("startPageNum") int startPageNum, @Param("endPageNum") int endPageNum, @Param("menuId")int menuId);
	public List<Review> listViewReviewSortByGood(@Param("startPageNum") int startPageNum, @Param("endPageNum") int endPageNum, @Param("menuId")int menuId);
	public List<Review> listViewReviewSortByScore(@Param("startPageNum") int startPageNum, @Param("endPageNum") int endPageNum, @Param("menuId")int menuId, @Param("userId")String userId);	
	public List<Review> listMyReview(@Param("startPageNum") int startPageNum, @Param("endPageNum") int endPageNum, @Param("userId")String userId);
	public Review getReview(@Param("userId")String userId, @Param("menuId")int menuId);
	public Review getReviewById(@Param("reviewId")int reviewId);
	public List<Review> goodListReview(int menuId);
	public int plusGood(int reviewId);
	public int minusGood(int reviewId);
	public int updateReport(int reviewId); //신고하기 업데이트
	public List<Review> listReportedReview(@Param("startPageNum") int startPageNum, @Param("endPageNum") int endPageNum);
	public int countReview();
	public int countMenuReview(@Param("menuId")int menuId);
	public int countMyReview(@Param("userId")String userId);
}
