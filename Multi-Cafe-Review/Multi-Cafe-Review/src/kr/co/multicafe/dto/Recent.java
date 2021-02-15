package kr.co.multicafe.dto;

public class Recent {
	
	private int recentId;
	private String userId;
	private int menuId;
	private String recentDate;
	
	public int getMenuId() {
		return menuId;
	}
	public void setMenuId(int menuId) {
		this.menuId = menuId;
	}
	public int getRecentId() {
		return recentId;
	}
	public void setRecentId(int recentId) {
		this.recentId = recentId;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	
	
	public String getRecentDate() {
		return recentDate;
	}
	public void setRecentDate(String recentDate) {
		this.recentDate = recentDate;
	}
	@Override
	public String toString() {
		return "Recent [recentId=" + recentId + ", userId=" + userId + ", menuId=" + menuId + "]";
	}

}
