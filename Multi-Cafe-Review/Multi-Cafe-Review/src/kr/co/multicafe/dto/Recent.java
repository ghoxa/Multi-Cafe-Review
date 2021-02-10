package kr.co.multicafe.dto;

public class Recent {
	
	private int recentId;
	private String userId;
	
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
	@Override
	public String toString() {
		return "Recent [recentId=" + recentId + ", userId=" + userId + "]";
	}

}
