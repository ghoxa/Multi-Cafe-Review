package kr.co.multicafe.dto;

public class ReviewLike {
	int reviewLikeId;
	String userId;
	int reviewId;
	public int getReviewLikeId() {
		return reviewLikeId;
	}
	public void setReviewLikeId(int reviewLikeId) {
		this.reviewLikeId = reviewLikeId;
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
	public void setReivewId(int reviewId) {
		this.reviewId = reviewId;
	}
	
	@Override
	public String toString() {
		return "ReviewLike [reviewLikeId=" + reviewLikeId + ", userId=" + userId + ", reviewId=" + reviewId + "]";
	}
	
	
}
