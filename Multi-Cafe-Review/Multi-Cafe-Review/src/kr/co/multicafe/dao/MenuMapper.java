package kr.co.multicafe.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import kr.co.multicafe.dto.Menu;
import kr.co.multicafe.dto.Taste;

@Mapper
public interface MenuMapper {
	
	public int insertMenu(Menu menu);
	public int updateMenu(Menu menu);
	public int deleteMenu(int menuId);
	public Menu getMenu(int menuId);
	public List<Menu> listViewMenu();
	public List<Menu> listViewMenuByCondition(String condition); //condition은 good(좋아요순), click(조회수순)
	public List<Menu> listViewCafeMenuByCondition(@Param("cafeId") int cafeId, @Param("condition") String condition);
	public List<Menu> listViewCategoryMenuByCondition(@Param("categoryId") int categoryId, @Param("condition") String condition);
	public List<Menu> listViewCafeMenu(int cafeId);
	public List<Menu> listViewCategoryMenu(int categoryId);
	public List<Menu> listViewCafeMenuByCategory(@Param("cafeId") int cafeId, @Param("categoryId") int categoryId);
	public List<Menu> listViewCafeCategoryMenuByCondition(@Param("cafeId") int cafeId, @Param("categoryId") int categoryId, @Param("condition") String condition);
	public List<Menu> searchMenu(String keyword); //메뉴이름, 설명, 키워드
	public List<Menu> searchCafeMenu(@Param("cafeId") int cafeId, @Param("keyword") String keyword); //(카페별 검색)메뉴이름, 설명, 키워드
	public List<Menu> searchMenuByCondition(@Param("keyword") String keyword, @Param("condition") String condition); //메뉴이름, 설명, 키워드
	public List<Menu> searchCafeMenuByCondition(@Param("cafeId") int cafeId, @Param("keyword") String keyword, @Param("condition") String condition); //(카페별 검색)메뉴이름, 설명, 키워드
	public void addGood(int menuId);
	public void minusGood(int menuId);
	public void addClick(int menuId);
	public int updateMenuTaste(int menuId);
	public int updateMenuGrade(int menuId);
	public int updateMenuReset(int menuId);
	public List<Menu> listViewRecommendMenuByKeyword(@Param("menuId") int menuId, @Param("list") String[] list);
	public Taste getMenuTaste(int menuId);
	public List<Menu> listViewRecommendMenuByTaste(@Param("menuId") int menuId, @Param("map") Map<String, Double> map);
	public List<Menu> listViewRecommendMenuByUser(@Param("userId") String userId, @Param("map") Map<String, Double> map);
	
}
