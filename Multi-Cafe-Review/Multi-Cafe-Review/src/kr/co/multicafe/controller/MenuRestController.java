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
import kr.co.multicafe.dto.Page;
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
	
	@GetMapping("/list/{pageno}")
	public Page listViewMenu(@PathVariable int pageno) { 
		return menuService.listViewMenu(pageno);
	}
	
	@GetMapping("/list/{condition}/{pageno}")
	public Page listViewMenuByCondition(@PathVariable String condition, @PathVariable int pageno) { //condition은 good(좋아요순), click(조회수순)
		return menuService.listViewMenuByCondition(condition, pageno);
	}

	@GetMapping("/cafe/{cafeId}/{condition}/{pageno}")
	public Page listViewCafeMenuByCondition(@PathVariable int cafeId, @PathVariable String condition, @PathVariable int pageno) {
		return menuService.listViewCafeMenuByCondition(cafeId, condition, pageno);
	}

	@GetMapping("/category/{categoryId}/{condition}/{pageno}")
	public Page listViewCategoryMenuByCondition(@PathVariable int categoryId, @PathVariable String condition, @PathVariable int pageno) {
		return menuService.listViewCategoryMenuByCondition(categoryId, condition, pageno);
	}

	@GetMapping("/cafe/{cafeId}/{pageno}")
	public Page listViewCafeMenu(@PathVariable int cafeId, @PathVariable int pageno) {
		return menuService.listViewCafeMenu(cafeId, pageno);
	}

	@GetMapping("/category/{categoryId}/{pageno}")
	public Page listViewCategoryMenu(@PathVariable int categoryId, @PathVariable int pageno) {
		return menuService.listViewCategoryMenu(categoryId, pageno);
	}

	@GetMapping("cafe/{cafeId}/category/{categoryId}/{pageno}")
	public Page listViewCafeMenuByCategory(@PathVariable int cafeId, @PathVariable int categoryId, @PathVariable int pageno) {
		return menuService.listViewCafeMenuByCategory(cafeId, categoryId, pageno);
	}
	
	@GetMapping("cafe/{cafeId}/category/{categoryId}/{condition}/{pageno}")
	public Page listViewCafeCategoryMenuByCondition(@PathVariable int cafeId, @PathVariable int categoryId, @PathVariable String condition, @PathVariable int pageno) {
		return menuService.listViewCafeCategoryMenuByCondition(cafeId, categoryId, condition, pageno);
	}

	@GetMapping("/search/{keyword}/{pageno}")
	public Page searchMenu(@PathVariable String keyword, @PathVariable int pageno) { //메뉴이름, 설명, 키워드
		return menuService.searchMenu(keyword, pageno);
	}

	@GetMapping("/cafe/{cafeId}/search/{keyword}/{pageno}")
	public Page searchCafeMenu(@PathVariable int cafeId, @PathVariable String keyword, @PathVariable int pageno) { //(카페별 검색)메뉴이름, 설명, 키워드
		return menuService.searchCafeMenu(cafeId, keyword, pageno);
	}

	@GetMapping("/search/{keyword}/{condition}/{pageno}")
	public Page searchMenuByCondition(@PathVariable String keyword, @PathVariable String condition, @PathVariable int pageno) { //메뉴이름, 설명, 키워드
		return menuService.searchMenuByCondition(keyword, condition, pageno);
	}

	@GetMapping("/cafe/{cafeId}/search/{keyword}/{condition}/{pageno}")
	public Page searchCafeMenuByCondition(@PathVariable int cafeId, @PathVariable String keyword, @PathVariable String condition, @PathVariable int pageno) { //(카페별 검색)메뉴이름, 설명, 키워드
		return menuService.searchCafeMenuByCondition(cafeId, keyword, condition, pageno);
	}

	@GetMapping("/category/{categoryId}/search/{keyword}/{condition}/{pageno}")
	public Page searchCategoryMenuByCondition(@PathVariable int categoryId, @PathVariable String keyword, @PathVariable String condition, @PathVariable int pageno) { //(카페별 검색)메뉴이름, 설명, 키워드
		return menuService.searchCategoryMenuByCondition(categoryId, keyword, condition, pageno);
	}

	@GetMapping("/cafe/{cafeId}/category/{categoryId}/search/{keyword}/{condition}/{pageno}")
	public Page searchCafeCategoryMenuByCondition(@PathVariable int cafeId, @PathVariable int categoryId, @PathVariable String keyword, @PathVariable String condition, @PathVariable int pageno) { //(카페별 검색)메뉴이름, 설명, 키워드
		return menuService.searchCafeCategoryMenuByCondition(cafeId, categoryId, keyword, condition, pageno);
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
	
	@GetMapping("/recommend/{userId}")
	public List<Menu> listViewRecommendMenuByUser(@PathVariable String userId) {
		return menuService.listViewRecommendMenuByUser(userId);
	}
	
	
}
