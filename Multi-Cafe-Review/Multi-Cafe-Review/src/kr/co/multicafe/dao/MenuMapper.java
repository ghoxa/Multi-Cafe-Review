package kr.co.multicafe.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import kr.co.multicafe.dto.Menu;

@Mapper
public interface MenuMapper {
	
	public int insertMenu(Menu menu);
	public int updateMenu(Menu menu);
	public int deleteMenu(int menuId);
	public Menu getMenu(int menuId);
	public List<Menu> listViewMenuByCondition(String condition); //condition은 good(좋아요순), click(조회수순)
	public List<Menu> listViewCafeMenuByCondition(int cafeId, String condition);
	public List<Menu> listViewCategoryMenuByCondition(int categoryId, String condition);
	public List<Menu> listViewCafeMenu(int cafeId);
	public List<Menu> listViewCategoryMenu(int categoryId);
	public List<Menu> listViewCafeMenuByCategory(int cafeId, int categoryId);
	public List<Menu> searchMenu(String keyword); //메뉴이름, 설명, 키워드
	public List<Menu> searchCafeMenu(int cafeId, String keyword); //(카페별 검색)메뉴이름, 설명, 키워드
	public void addGood(int menuId);
	public void deleteGood(int menuId);
	public int updateMenuTaste(int menuId);
	public int updateMenuGrade(int menuId);
	
}
