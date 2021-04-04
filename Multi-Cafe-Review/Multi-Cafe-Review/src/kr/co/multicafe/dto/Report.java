package kr.co.multicafe.dto;

public class Report {
	int reportId;
	String userId;
	int reviewId;
	public int getReportId() {
		return reportId;
	}
	public void setReportId(int reportId) {
		this.reportId = reportId;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public int getReviewId() {
		return reviewId;
	}
	public void setReviewId(int reviewId) {
		this.reviewId = reviewId;
	}
	@Override
	public String toString() {
		return "Report [reportId=" + reportId + ", userId=" + userId + ", reviewId=" + reviewId + "]";
	}
	
	
	
}
