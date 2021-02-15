package kr.co.multicafe.dto;

public class Taste {
	
	private double sweet;
	private double bitter;
	private double sour;
	
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
	@Override
	public String toString() {
		return "Taste [sweet=" + sweet + ", bitter=" + bitter + ", sour=" + sour + "]";
	}

}
