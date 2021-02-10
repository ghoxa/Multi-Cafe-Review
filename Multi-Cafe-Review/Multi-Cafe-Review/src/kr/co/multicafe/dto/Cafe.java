package kr.co.multicafe.dto;

public class Cafe {
	
	private int cafeId;
	private String name;
	
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
	@Override
	public String toString() {
		return "Cafe [cafeId=" + cafeId + ", name=" + name + "]";
	}

}
