package kr.co.multicafe.dto;

public class Review {
	
	private int reviewId;
	private String reviewDate;
	private String content;
	private int good;
	private int grade;
	private String userId;
	private int menuId;
	private double sweet;
	private double bitter;
	private double sour;
	private String cafeName;
	private String menuName;
	private int report;
	
	public String getCafeName() {
		return cafeName;
	}
	public void setCafeName(String cafeName) {
		this.cafeName = cafeName;
	}
	public String getMenuName() {
		return menuName;
	}
	public void setMenuName(String menuName) {
		this.menuName = menuName;
	}
	public int getReviewId() {
		return reviewId;
	}
	public void setReviewId(int reviewId) {
		this.reviewId = reviewId;
	}
	public String getReviewDate() {
		return reviewDate;
	}
	public void setReviewDate(String reviewDate) {
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
	
	
	public double getSweet() {
		return sweet;
	}
	public void setSweet(double sweet) {
		this.sweet = sweet;
	}
	public double getBitter() {
		return bitter;
	}
	public void setBitter(double bitter) {
		this.bitter = bitter;
	}
	public double getSour() {
		return sour;
	}
	public void setSour(double sour) {
		this.sour = sour;
	}
	
	
	public int getReport() {
		return report;
	}
	public void setReport(int report) {
		this.report = report;
	}
	
	@Override
	public String toString() {
		return "Review [reviewId=" + reviewId + ", reviewDate=" + reviewDate + ", content=" + content + ", good=" + good
				+ ", grade=" + grade + ", userId=" + userId + ", menuId=" + menuId + ", sweet=" + sweet + ", bitter="
				+ bitter + ", sour=" + sour + "]";
	}
	

}
