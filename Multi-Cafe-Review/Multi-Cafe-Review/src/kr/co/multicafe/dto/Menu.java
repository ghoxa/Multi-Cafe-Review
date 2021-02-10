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
	private boolean hot;
	private boolean ice;
	private int categoryId;
	private int cafeId;
	private int tasteId;
	
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
	public boolean isHot() {
		return hot;
	}
	public void setHot(boolean hot) {
		this.hot = hot;
	}
	public boolean isIce() {
		return ice;
	}
	public void setIce(boolean ice) {
		this.ice = ice;
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
	public int getTasteId() {
		return tasteId;
	}
	public void setTasteId(int tasteId) {
		this.tasteId = tasteId;
	}
	@Override
	public String toString() {
		return "Menu [menuId=" + menuId + ", name=" + name + ", price=" + price + ", description=" + description
				+ ", grade=" + grade + ", keyword=" + keyword + ", image=" + image + ", good=" + good + ", click="
				+ click + ", hot=" + hot + ", ice=" + ice + ", categoryId=" + categoryId + ", cafeId=" + cafeId
				+ ", tasteId=" + tasteId + "]";
	}

}
