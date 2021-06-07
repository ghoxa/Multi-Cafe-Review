package kr.co.multicafe.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import kr.co.multicafe.dto.Report;

@Mapper
public interface ReportMapper {
	public int getReportCnt(@Param("userId")String userId, @Param("reviewId")int reviewId);
	public int insertReport(Report report);
	public int deleteReportByReviewId(int reviewId);
	public int countReportedReview();
}
