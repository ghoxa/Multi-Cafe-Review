package kr.co.multicafe.dto;

public class ReviewLike {
	int reviewLikeId;
	String userId;
	int reivewId;
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
	public int getReivewId() {
		return reivewId;
	}
	public void setReivewId(int reivewId) {
		this.reivewId = reivewId;
	}
	
	@Override
	public String toString() {
		return "ReviewLike [reviewLikeId=" + reviewLikeId + ", userId=" + userId + ", reivewId=" + reivewId + "]";
	}
	
	
}
