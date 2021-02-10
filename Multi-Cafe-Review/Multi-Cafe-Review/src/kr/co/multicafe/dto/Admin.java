package kr.co.multicafe.dto;

public class Admin {
	
	private String adminId;
	private String pwd;
	
	public String getAdminId() {
		return adminId;
	}
	public void setAdminId(String adminId) {
		this.adminId = adminId;
	}
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
	@Override
	public String toString() {
		return "Admin [adminId=" + adminId + ", pwd=" + pwd + "]";
	}
	
}
