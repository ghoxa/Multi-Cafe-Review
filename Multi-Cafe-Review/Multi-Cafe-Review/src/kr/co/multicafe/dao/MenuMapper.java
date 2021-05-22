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
	public List<Menu> listViewMenu(@Param("startPageNum") int startPageNum, @Param("endPageNum") int endPageNum);
	public List<Menu> listViewMenuByCondition(@Param("condition") String condition, @Param("startPageNum") int startPageNum, @Param("endPageNum") int endPageNum); //condition은 good(좋아요순), click(조회수순)
	public List<Menu> listViewCafeMenuByCondition(@Param("cafeId") int cafeId, @Param("condition") String condition, @Param("startPageNum") int startPageNum, @Param("endPageNum") int endPageNum);
	public List<Menu> listViewCategoryMenuByCondition(@Param("categoryId") int categoryId, @Param("condition") String condition, @Param("startPageNum") int startPageNum, @Param("endPageNum") int endPageNum);
	public List<Menu> listViewCafeMenu(@Param("cafeId") int cafeId, @Param("startPageNum") int startPageNum, @Param("endPageNum") int endPageNum);
	public List<Menu> listViewCategoryMenu(@Param("categoryId") int categoryId, @Param("startPageNum") int startPageNum, @Param("endPageNum") int endPageNum);
	public List<Menu> listViewCafeMenuByCategory(@Param("cafeId") int cafeId, @Param("categoryId") int categoryId, @Param("startPageNum") int startPageNum, @Param("endPageNum") int endPageNum);
	public List<Menu> listViewCafeCategoryMenuByCondition(@Param("cafeId") int cafeId, @Param("categoryId") int categoryId, @Param("condition") String condition, @Param("startPageNum") int startPageNum, @Param("endPageNum") int endPageNum);
	public List<Menu> searchMenu(@Param("keyword") String keyword, @Param("startPageNum") int startPageNum, @Param("endPageNum") int endPageNum); //메뉴이름, 설명, 키워드
	public List<Menu> searchCafeMenu(@Param("cafeId") int cafeId, @Param("keyword") String keyword, @Param("startPageNum") int startPageNum, @Param("endPageNum") int endPageNum); //(카페별 검색)메뉴이름, 설명, 키워드
	public List<Menu> searchMenuByCondition(@Param("keyword") String keyword, @Param("condition") String condition, @Param("startPageNum") int startPageNum, @Param("endPageNum") int endPageNum); //메뉴이름, 설명, 키워드
	public List<Menu> searchCafeMenuByCondition(@Param("cafeId") int cafeId, @Param("keyword") String keyword, @Param("condition") String condition, @Param("startPageNum") int startPageNum, @Param("endPageNum") int endPageNum); //(카페별 검색)메뉴이름, 설명, 키워드
	public List<Menu> searchCategoryMenuByCondition(@Param("categoryId") int categoryId, @Param("keyword") String keyword, @Param("condition") String condition, @Param("startPageNum") int startPageNum, @Param("endPageNum") int endPageNum); //(카페별 검색)메뉴이름, 설명, 키워드
	public List<Menu> searchCafeCategoryMenuByCondition(@Param("cafeId") int cafeId, @Param("categoryId") int categoryId, @Param("keyword") String keyword, @Param("condition") String condition, @Param("startPageNum") int startPageNum, @Param("endPageNum") int endPageNum); //(카페별 검색)메뉴이름, 설명, 키워드
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
	public int countMenu();
	public int countCafeMenu(int cafeId);
	public int countCategoryMenu(int categoryId);
	public int countCafeCategoryMenu(@Param("cafeId") int cafeId, @Param("categoryId") int categoryId);
	public int countSearchMenu(String keyword);
	public int countSearchCafeMenu(@Param("keyword") String keyword, @Param("cafeId") int cafeId);
	public int countSearchCategoryMenu(@Param("keyword") String keyword, @Param("categoryId") int categoryId);
	public int countSearchCafeCategoryMenu(@Param("keyword") String keyword, @Param("cafeId") int cafeId, @Param("categoryId") int categoryId);

}
