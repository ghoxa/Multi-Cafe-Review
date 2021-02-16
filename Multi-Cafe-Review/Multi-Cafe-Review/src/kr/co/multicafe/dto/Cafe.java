package kr.co.multicafe.dto;

public class Cafe {
	
	private int cafeId;
	private String name;
	private String image;
	
	public int getCafeId() {
		return cafeId;
	}
	public void setCafeId(int cafeId) {
		this.cafeId = cafeId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	@Override
	public String toString() {
		return "Cafe [cafeId=" + cafeId + ", name=" + name + "]";
	}

}
