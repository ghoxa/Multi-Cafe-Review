package kr.co.multicafe.dto;

public class Taste {
	
	private double sweet;
	private double bitter;
	private double sour;
	private double coffee_sour;
	
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
	@Override
	public String toString() {
		return "Taste [sweet=" + sweet + ", bitter=" + bitter + ", sour=" + sour + ", coffee_sour=" + coffee_sour + "]";
	}

}
