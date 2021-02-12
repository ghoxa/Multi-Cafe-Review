package kr.co.multicafe.dto;

public class Users {
	
	private String userId;
	private String pwd;
	private String phone;
	private String email;
	private String address;
	private int joinDate;
	private double sweet;
	private double bitter;
	private double sour;
	
	@Override
	public String toString() {
		return "Users [userId=" + userId + ", pwd=" + pwd + ", phone=" + phone + ", email=" + email + ", address="
				+ address + ", joinDate=" + joinDate + "]";
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

	public int getJoinDate() {
		return joinDate;
	}
	public void setJoinDate(int joinDate) {
		this.joinDate = joinDate;
	}

}
