package kr.co.multicafe.dto;

public class Menu {
	
	private int menuId;
	private String name;
	private int price;
	private String description;
	private double grade;
	private String keyword;
	private String image;
	private int good;
	private int click;
	private int hot;
	private int ice;
	private int categoryId;
	private int cafeId;
	private String cafeName;
	private double sweet;
	private double bitter;
	private double sour;
	
	public String getCafeName() {
		return cafeName;
	}
	public void setCafeName(String cafeName) {
		this.cafeName = cafeName;
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
	public int getHot() {
		return hot;
	}
	public void setHot(int hot) {
		this.hot = hot;
	}
	public int getIce() {
		return ice;
	}
	public void setIce(int ice) {
		this.ice = ice;
	}
	public int getMenuId() {
		return menuId;
	}
	public void setMenuId(int menuId) {
		this.menuId = menuId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public double getGrade() {
		return grade;
	}
	public void setGrade(double grade) {
		this.grade = grade;
	}
	public String getKeyword() {
		return keyword;
	}
	public void setKeyword(String keyword) {
		this.keyword = keyword;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public int getGood() {
		return good;
	}
	public void setGood(int good) {
		this.good = good;
	}
	public int getClick() {
		return click;
	}
	public void setClick(int click) {
		this.click = click;
	}
	public int getCategoryId() {
		return categoryId;
	}
	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}
	public int getCafeId() {
		return cafeId;
	}
	public void setCafeId(int cafeId) {
		this.cafeId = cafeId;
	}
	@Override
	public String toString() {
		return "Menu [menuId=" + menuId + ", name=" + name + ", price=" + price + ", description=" + description
				+ ", grade=" + grade + ", keyword=" + keyword + ", image=" + image + ", good=" + good + ", click="
				+ click + ", hot=" + hot + ", ice=" + ice + ", categoryId=" + categoryId + ", cafeId=" + cafeId
				+ ", cafeName=" + cafeName + ", sweet=" + sweet + ", bitter=" + bitter + ", sour=" + sour + "]";
	}
	
}
