package kr.co.multicafe.dto;

public class Review {
	
	private int reviewId;
	private int reviewDate;
	private String content;
	private int good;
	private int grade;
	private String userId;
	private int menuId;
	private int tasteId;
	
	public int getReviewId() {
		return reviewId;
	}
	public void setReviewId(int reviewId) {
		this.reviewId = reviewId;
	}
	public int getReviewDate() {
		return reviewDate;
	}
	public void setReviewDate(int reviewDate) {
		this.reviewDate = reviewDate;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public int getGood() {
		return good;
	}
	public void setGood(int good) {
		this.good = good;
	}
	public int getGrade() {
		return grade;
	}
	public void setGrade(int grade) {
		this.grade = grade;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public int getMenuId() {
		return menuId;
	}
	public void setMenuId(int menuId) {
		this.menuId = menuId;
	}
	public int getTasteId() {
		return tasteId;
	}
	public void setTasteId(int tasteId) {
		this.tasteId = tasteId;
	}
	@Override
	public String toString() {
		return "Review [reviewId=" + reviewId + ", reviewDate=" + reviewDate + ", content=" + content + ", good=" + good
				+ ", grade=" + grade + ", userId=" + userId + ", menuId=" + menuId + ", tasteId=" + tasteId + "]";
	}

}
