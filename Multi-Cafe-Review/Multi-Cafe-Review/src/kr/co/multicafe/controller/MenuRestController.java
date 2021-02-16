package kr.co.multicafe.controller;

import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kr.co.multicafe.dto.Menu;
import kr.co.multicafe.dto.Users;
import kr.co.multicafe.service.MenuService;
import kr.co.multicafe.service.ReviewService;

@CrossOrigin("*")
@RestController
@RequestMapping(path="/api/menu")
public class MenuRestController {
	
	@Autowired
	private MenuService menuService;
	
	@Autowired
	private ReviewService reviewService;
	
	
	@GetMapping("/{menuId}")
	public Menu getMenu(@PathVariable int menuId) {
		return menuService.getMenu(menuId);
	}
	
	@GetMapping("/check/{menuId}/{userId}")
	public Menu getMenuCheck(@PathVariable int menuId, @PathVariable String userId) {
		return menuService.getMenuCheck(menuId, userId);
	}
	
	@GetMapping
	public List<Menu> listViewMenu() { 
		return menuService.listViewMenu();
	}
	
	@GetMapping("/list/{condition}")
	public List<Menu> listViewMenuByCondition(@PathVariable String condition) { //condition은 good(좋아요순), click(조회수순)
		return menuService.listViewMenuByCondition(condition);
	}

	@GetMapping("/cafe/{cafeId}/{condition}")
	public List<Menu> listViewCafeMenuByCondition(@PathVariable int cafeId, @PathVariable String condition) {
		return menuService.listViewCafeMenuByCondition(cafeId, condition);
	}

	@GetMapping("/category/{categoryId}/{condition}")
	public List<Menu> listViewCategoryMenuByCondition(@PathVariable int categoryId, @PathVariable String condition) {
		return menuService.listViewCategoryMenuByCondition(categoryId, condition);
	}

	@GetMapping("/cafe/{cafeId}")
	public List<Menu> listViewCafeMenu(@PathVariable int cafeId) {
		return menuService.listViewCafeMenu(cafeId);
	}

	@GetMapping("/category/{categoryId}")
	public List<Menu> listViewCategoryMenu(@PathVariable int categoryId) {
		return menuService.listViewCategoryMenu(categoryId);
	}

	@GetMapping("cafe/{cafeId}/category/{categoryId}")
	public List<Menu> listViewCafeMenuByCategory(@PathVariable int cafeId, @PathVariable int categoryId) {
		return menuService.listViewCafeMenuByCategory(cafeId, categoryId);
	}
	
	@GetMapping("cafe/{cafeId}/category/{categoryId}/{condition}")
	public List<Menu> listViewCafeCategoryMenuByCondition(@PathVariable int cafeId, @PathVariable int categoryId, @PathVariable String condition) {
		return menuService.listViewCafeCategoryMenuByCondition(cafeId, categoryId, condition);
	}

	@GetMapping("/search/{keyword}")
	public List<Menu> searchMenu(@PathVariable String keyword) { //메뉴이름, 설명, 키워드
		return menuService.searchMenu(keyword);
	}

	@GetMapping("/search/{cafeId}/{keyword}")
	public List<Menu> searchCafeMenu(@PathVariable int cafeId, @PathVariable String keyword) { //(카페별 검색)메뉴이름, 설명, 키워드
		return menuService.searchCafeMenu(cafeId, keyword);
	}
	
	@GetMapping("/{menuId}/recommend/keyword")
	public List<Menu> listViewRecommendMenuByKeyword(@PathVariable int menuId) {
		return menuService.listViewRecommendMenuByKeyword(menuId);
	}
	
	@GetMapping("/{menuId}/recommend/taste")
	public List<Menu> listViewRecommendMenuByTaste(@PathVariable int menuId, HttpServletResponse response) throws Exception {
		if (reviewService.listViewReview(menuId) == null)
			response.sendError(5001, "메뉴에 대한 리뷰정보가 없습니다. (taste기준 추천 불가능)");
		return menuService.listViewRecommendMenuByTaste(menuId);
	}
	
	@GetMapping("/{menuId}/likecheck")
	public boolean likeCheck(@PathVariable int menuId, HttpSession session) {
		if (session.getAttribute("user") != null)
			if (menuService.getLike(((Users)session.getAttribute("user")).getUserId(), menuId) != null)
				return true;
		return false;
	}
	
	
}
