package kr.co.multicafe.dto;

public class Likes {
	
	private int likeId;
	private String userId;
	private int menuId;
	
	public int getLikeId() {
		return likeId;
	}
	public void setLikeId(int likeId) {
		this.likeId = likeId;
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
	@Override
	public String toString() {
		return "Likes [likeId=" + likeId + ", userId=" + userId + ", menuId=" + menuId + "]";
	}
	

}
