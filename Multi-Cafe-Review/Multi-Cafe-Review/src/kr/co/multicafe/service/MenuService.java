package kr.co.multicafe.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kr.co.multicafe.dao.LikesMapper;
import kr.co.multicafe.dao.MenuMapper;
import kr.co.multicafe.dto.Likes;
import kr.co.multicafe.dto.Menu;

@Service
@Transactional
public class MenuService {
	
	@Autowired
	private MenuMapper menuMapper;
	
	@Autowired
	private LikesMapper likesMapper;
	
	public int insertMenu(Menu menu) {
		return menuMapper.insertMenu(menu);
	}
	
	public int updateMenu(Menu menu) {
		return menuMapper.updateMenu(menu);
	}
	
	public int deleteMenu(int menuId) {
		return menuMapper.deleteMenu(menuId);
	}
	
	public Menu getMenu(int menuId) {
		return menuMapper.getMenu(menuId);
	}
	
	public List<Menu> listViewMenu() { 
		return menuMapper.listViewMenu();
	}
	
	public List<Menu> listViewMenuByCondition(String condition) { //condition은 good(좋아요순), click(조회수순)
		return menuMapper.listViewMenuByCondition(condition);
	}
	
	public List<Menu> listViewCafeMenuByCondition(int cafeId, String condition) {
		return menuMapper.listViewCafeMenuByCondition(cafeId, condition);
	}
	
	public List<Menu> listViewCategoryMenuByCondition(int categoryId, String condition) {
		return menuMapper.listViewCategoryMenuByCondition(categoryId, condition);
	}
	
	public List<Menu> listViewCafeMenu(int cafeId) {
		return menuMapper.listViewCafeMenu(cafeId);
	}
	
	public List<Menu> listViewCategoryMenu(int categoryId) {
		return menuMapper.listViewCategoryMenu(categoryId);
	}
	
	public List<Menu> listViewCafeMenuByCategory(int cafeId, int categoryId) {
		return menuMapper.listViewCafeMenuByCategory(cafeId, categoryId);
	}
	
	public List<Menu> searchMenu(String keyword) { //메뉴이름, 설명, 키워드
		return menuMapper.searchMenu(keyword);
	}
	
	public List<Menu> searchCafeMenu(int cafeId, String keyword) { //(카페별 검색)메뉴이름, 설명, 키워드
		return menuMapper.searchCafeMenu(cafeId, keyword);
	}

	public List<Menu> listViewLike(String userId) {
		return likesMapper.listViewLike(userId);
	}
	
	@Transactional
	public int insertOrDeleteLike(String userId, int menuId) {
		Likes likes = likesMapper.getLike(userId, menuId);
		if (likes == null) {
			menuMapper.addGood(menuId);
			likes = new Likes();
			likes.setUserId(userId);
			likes.setMenuId(menuId);
			return likesMapper.insertLike(likes);
		} else {
			menuMapper.minusGood(menuId);
			return likesMapper.deleteLike(likes.getLikeId());
		}
	}
	
}
