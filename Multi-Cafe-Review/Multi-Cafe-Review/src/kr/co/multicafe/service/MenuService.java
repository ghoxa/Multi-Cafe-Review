package kr.co.multicafe.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kr.co.multicafe.dao.LikesMapper;
import kr.co.multicafe.dao.MenuMapper;
import kr.co.multicafe.dao.RecentMapper;
import kr.co.multicafe.dao.ReviewMapper;
import kr.co.multicafe.dao.UsersMapper;
import kr.co.multicafe.dto.Likes;
import kr.co.multicafe.dto.Menu;
import kr.co.multicafe.dto.Page;
import kr.co.multicafe.dto.Recent;
import kr.co.multicafe.dto.Taste;

@Service
@Transactional
public class MenuService {
	
	@Value("21")
	private int PAGE_SIZE;
	@Value("10")
	private int BLOCK_SIZE;
	
	@Autowired
	private MenuMapper menuMapper;
	
	@Autowired
	private LikesMapper likesMapper;
	
	@Autowired
	private RecentMapper recentMapper;

	@Autowired
	private UsersMapper usersMapper;
	
	public int insertMenu(Menu menu) {
		return menuMapper.insertMenu(menu);
	}
	
	public int updateMenu(Menu menu) {
		return menuMapper.updateMenu(menu);
	}
	
	public int deleteMenu(int menuId) {
		return menuMapper.deleteMenu(menuId);
	}
	
	@Transactional
	public Menu getMenu(int menuId) {
//		if (reviewMapper.listViewReview(menuId) == null) {
//			System.out.println("리뷰없음 리셋");
//			menuMapper.updateMenuReset(menuId);
//		} else {
//			System.out.println("리뷰있음 업뎃");
//		}
		menuMapper.addClick(menuId);
		menuMapper.updateMenuGrade(menuId);
		menuMapper.updateMenuTaste(menuId);
		return menuMapper.getMenu(menuId);
	}
	
	//메뉴 가져올때 로그인한 사용자의 최근 본 메뉴에 추가
	@Transactional
	public Menu getMenuCheck(int menuId, String userId) {
		menuMapper.addClick(menuId);
		menuMapper.updateMenuGrade(menuId);
		menuMapper.updateMenuTaste(menuId);
		if(userId!=null) {	//회원이 메뉴 클릭시 => 최근 본 메뉴에 추가
			Recent recent =recentMapper.getRecent(userId,menuId); 
			
			//이미 최근 본 메뉴에 있는 경우 삭제
			if(recent!=null){ 				
				recentMapper.deleteRecent(recent.getRecentId());
			}
			
			//최근 본 메뉴가 20개 이상일 경우 가장 오래된 recent 삭제
			else if(recentMapper.countMyRecent(userId)>=20) { 
				Recent tmp = recentMapper.getRecentPast(userId);
				recentMapper.deleteRecent(tmp.getRecentId());
			}

			recent = new Recent();
			recent.setUserId(userId);
			recent.setMenuId(menuId);
			recentMapper.insertRecent(recent);
			return menuMapper.getMenu(menuId);
		}
		else { //비회원이 메뉴 클릭시 => 메뉴 보여주기만 수행
			return menuMapper.getMenu(menuId);
		}
	}
	
	public int countMenu() {
		return menuMapper.countMenu();
	}
	
	public int countCafeMenu(int cafeId) {
		return menuMapper.countCafeMenu(cafeId);
	}
	
	public int countCategoryMenu(int categoryId) {
		return menuMapper.countCategoryMenu(categoryId);
	}
	
	public int countCafeCategoryMenu(int cafeId, int categoryId) {
		return menuMapper.countCafeCategoryMenu(cafeId, categoryId);
	}
	
	public int countSearchMenu(String keyword) {
		return menuMapper.countSearchMenu(keyword);
	}
	
	public int countSearchCafeMenu(String keyword, int cafeId) {
		return menuMapper.countSearchCafeMenu(keyword, cafeId);
	}
	
	public int countSearchCategoryMenu(String keyword, int categoryId) {
		return menuMapper.countSearchCategoryMenu(keyword, categoryId);
	}
	
	public int countSearchCafeCategoryMenu(String keyword, int cafeId, int categoryId) {
		return menuMapper.countSearchCafeCategoryMenu(keyword, cafeId, categoryId);
	}
	
	public int countUserLike(String userId) {
		return likesMapper.countUserLike(userId);
	}
	
	public Page pageInfo(int count, int pageno) {
		int countOfPage = count / PAGE_SIZE + 1;
		if (count % PAGE_SIZE == 0) countOfPage--;
		if (pageno > countOfPage) pageno = countOfPage;
		int startPageNum = (pageno-1) * PAGE_SIZE + 1;
		int endPageNum = pageno * PAGE_SIZE;
		if (pageno * PAGE_SIZE > count) endPageNum = count;
		int blockNo = pageno / BLOCK_SIZE + 1;
		if (pageno % BLOCK_SIZE == 0) blockNo--;
		int prev = (blockNo-1) * BLOCK_SIZE;
		int start = prev + 1;
		int end = blockNo * BLOCK_SIZE;
		int next = end + 1;
		if (blockNo * BLOCK_SIZE > countOfPage) {
			end = countOfPage;
			next = 0;
		}
		
		return new Page(pageno, start, end, prev, next, startPageNum, endPageNum);
	}
	
	public Page listViewMenu(int pageno) { 
		Page page = pageInfo(menuMapper.countMenu(), pageno);
		page.setList(menuMapper.listViewMenu(page.getStartPageNum(), page.getEndPageNum()));
		
		return page;
	}
	
	public Page listViewMenuByCondition(String condition, int pageno) { //condition은 good(좋아요순), click(조회수순)
		Page page = pageInfo(menuMapper.countMenu(), pageno);
		page.setList(menuMapper.listViewMenu(page.getStartPageNum(), page.getEndPageNum()));
		
		return page;
	}
	
	public Page listViewCafeMenuByCondition(int cafeId, String condition, int pageno) {
		Page page = pageInfo(menuMapper.countCafeMenu(cafeId), pageno);
		page.setList(menuMapper.listViewCafeMenuByCondition(cafeId, condition, page.getStartPageNum(), page.getEndPageNum()));
		
		return page;
	}
	
	public Page listViewCategoryMenuByCondition(int categoryId, String condition, int pageno) {
		Page page = pageInfo(menuMapper.countCategoryMenu(categoryId), pageno);
		page.setList(menuMapper.listViewCategoryMenuByCondition(categoryId, condition, page.getStartPageNum(), page.getEndPageNum()));
		
		return page;
	}
	
	public Page listViewCafeMenu(int cafeId, int pageno) {
		Page page = pageInfo(menuMapper.countCafeMenu(cafeId), pageno);
		page.setList(menuMapper.listViewCafeMenu(cafeId, page.getStartPageNum(), page.getEndPageNum()));
		
		return page;
	}
	
	public Page listViewCategoryMenu(int categoryId, int pageno) {
		Page page = pageInfo(menuMapper.countCategoryMenu(categoryId), pageno);
		page.setList(menuMapper.listViewCategoryMenu(categoryId, page.getStartPageNum(), page.getEndPageNum()));
		
		return page;
	}
	
	public Page listViewCafeMenuByCategory(int cafeId, int categoryId, int pageno) {
		Page page = pageInfo(menuMapper.countCafeCategoryMenu(cafeId, categoryId), pageno);
		page.setList(menuMapper.listViewCafeMenuByCategory(cafeId, categoryId, page.getStartPageNum(), page.getEndPageNum()));
		
		return page;
	}
	
	public Page listViewCafeCategoryMenuByCondition(int cafeId, int categoryId, String condition, int pageno) {
		Page page = pageInfo(menuMapper.countCafeCategoryMenu(cafeId, categoryId), pageno);
		page.setList(menuMapper.listViewCafeCategoryMenuByCondition(cafeId, categoryId, condition, page.getStartPageNum(), page.getEndPageNum()));
		
		return page;
	}
	
	public Page searchMenu(String keyword, int pageno) { //메뉴이름, 설명, 키워드
		Page page = pageInfo(menuMapper.countSearchMenu(keyword), pageno);
		page.setList(menuMapper.searchMenu(keyword, page.getStartPageNum(), page.getEndPageNum()));
		
		return page;
	}
	
	public Page searchCafeMenu(int cafeId, String keyword, int pageno) { //(카페별 검색)메뉴이름, 설명, 키워드
		Page page = pageInfo(menuMapper.countSearchCafeMenu(keyword, cafeId), pageno);
		page.setList(menuMapper.searchCafeMenu(cafeId, keyword, page.getStartPageNum(), page.getEndPageNum()));
		
		return page;
	}
	
	public Page searchMenuByCondition(String keyword, String condition, int pageno) { //메뉴이름, 설명, 키워드
		Page page = pageInfo(menuMapper.countSearchMenu(keyword), pageno);
		page.setList(menuMapper.searchMenuByCondition(keyword, condition, page.getStartPageNum(), page.getEndPageNum()));
		
		return page;
	}
	
	public Page searchCafeMenuByCondition(int cafeId, String keyword, String condition, int pageno) { //(카페별 검색)메뉴이름, 설명, 키워드
		Page page = pageInfo(menuMapper.countSearchCafeMenu(keyword, cafeId), pageno);
		page.setList(menuMapper.searchCafeMenuByCondition(cafeId, keyword, condition, page.getStartPageNum(), page.getEndPageNum()));
		
		return page;
	}
	
	public Page searchCategoryMenuByCondition(int categoryId, String keyword, String condition, int pageno) {
		Page page = pageInfo(menuMapper.countSearchCategoryMenu(keyword, categoryId), pageno);
		page.setList(menuMapper.searchCategoryMenuByCondition(categoryId, keyword, condition, page.getStartPageNum(), page.getEndPageNum()));
		
		return page;
	}

	public Page searchCafeCategoryMenuByCondition(int cafeId, int categoryId, String keyword, String condition, int pageno) {
		Page page = pageInfo(menuMapper.countSearchCafeCategoryMenu(keyword, cafeId, categoryId), pageno);
		page.setList(menuMapper.searchCafeCategoryMenuByCondition(cafeId, categoryId, keyword, condition, page.getStartPageNum(), page.getEndPageNum()));
		
		return page;
	}

	
	@Transactional
	public List<Menu> listViewRecommendMenuByKeyword(int menuId) {
		String keyword = menuMapper.getMenu(menuId).getKeyword();
		if (keyword != null) {
			String[] list = keyword.split(" ");
			for (String l : list) {
				System.out.println(l);
			}
			return menuMapper.listViewRecommendMenuByKeyword(menuId, list);
		} else {
			return null;
		}
	}
	
	@Transactional
	public List<Menu> listViewRecommendMenuByTaste(int menuId) {
		Taste taste = menuMapper.getMenuTaste(menuId); 
	       System.out.println(taste); 
	      Map<String, Double> map = new HashMap<String, Double>();
	       if (taste != null) { 
	         map.put("sweet", taste.getSweet());
	         map.put("bitter", taste.getBitter());
	         map.put("sour", taste.getSour());
	          return menuMapper.listViewRecommendMenuByTaste(menuId, map); 
	       } else { 
	          return null; 
	       } 

	}
	
	@Transactional
	public List<Menu> listViewRecommendMenuByUser(String userId) {
		Taste taste = usersMapper.getTaste(userId); 
	       System.out.println(taste); 
	      Map<String, Double> map = new HashMap<String, Double>();
	       if (taste != null) { 
	         map.put("sweet", taste.getSweet());
	         map.put("bitter", taste.getBitter());
	         map.put("sour", taste.getSour());
	         map.put("coffee_sour", taste.getCoffee_sour());
	          return menuMapper.listViewRecommendMenuByUser(userId, map); 
	       } else { 
	          return null; 
	       } 

	}

	public Page listViewLike(String userId, int pageno) {
		Page page = pageInfo(likesMapper.countUserLike(userId), pageno);
		page.setList(likesMapper.listViewLike(userId, page.getStartPageNum(), page.getEndPageNum()));
		
		return page;
	}
	
	public Likes getLike(String userId, int menuId) {
		return likesMapper.getLike(userId, menuId);
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
