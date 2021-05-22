package kr.co.multicafe.dto;

public class Users {
	
	private String userId;
	private String pwd;
	private String phone;
	private String email;
	private String address;
	private String joinDate;
	private double sweet;
	private double bitter;
	private double sour;
	private double coffee_sour;
	private boolean adminCheck;
	private int report;
	
	public Users(String userId, String pwd) {
		super();
		this.userId = userId;
		this.pwd = pwd;
		this.adminCheck = false;
	}
	
	
	public Users() {
		super();
		this.adminCheck = false;
	}

	@Override
	public String toString() {
		return "Users [userId=" + userId + ", pwd=" + pwd + ", phone=" + phone + ", email=" + email + ", address="
				+ address + ", joinDate=" + joinDate + ", sweet=" + sweet + ", bitter=" + bitter + ", sour=" + sour
				+ ", coffee_sour=" + coffee_sour + ", adminCheck=" + adminCheck + ", report=" + report + "]";
	}

	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}

	public String getJoinDate() {
		return joinDate;
	}
	public void setJoinDate(String joinDate) {
		this.joinDate = joinDate;
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

	public double getCoffee_sour() {
		return coffee_sour;
	}

	public void setCoffee_sour(double coffee_sour) {
		this.coffee_sour = coffee_sour;
	}

	public boolean isAdminCheck() {
		return adminCheck;
	}

	public void setAdminCheck(boolean adminCheck) {
		this.adminCheck = adminCheck;
	}
	
	public int getReport() {
		return report;
	}
	
	public void setReport(int report) {
		this.report = report;
	}

}
