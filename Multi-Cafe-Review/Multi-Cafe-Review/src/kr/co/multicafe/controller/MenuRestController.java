package kr.co.multicafe.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kr.co.multicafe.dto.Menu;
import kr.co.multicafe.service.MenuService;

@RestController
@RequestMapping(path="/api/menu")
public class MenuRestController {
	
	@Autowired
	private MenuService menuService;
	
	@PostMapping //admin으로 가야함
	public int insertMenu(@RequestBody Menu menu) {
		return menuService.insertMenu(menu);
	}
	
	@PutMapping
	public int updateMenu(@RequestBody Menu menu) {
		return menuService.updateMenu(menu);
	}
	
	@DeleteMapping("/{menuId}")
	public int deleteMenu(@PathVariable int menuId) {
		return menuService.deleteMenu(menuId);
	}
	
	@GetMapping("/{menuId}")
	public Menu getMenu(@PathVariable int menuId) {
		return menuService.getMenu(menuId);
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

	@GetMapping("/search/{keyword}")
	public List<Menu> searchMenu(@PathVariable String keyword) { //메뉴이름, 설명, 키워드
		return menuService.searchMenu(keyword);
	}

	@GetMapping("/search/{cafeId}/{keyword}")
	public List<Menu> searchCafeMenu(@PathVariable int cafeId, @PathVariable String keyword) { //(카페별 검색)메뉴이름, 설명, 키워드
		return menuService.searchCafeMenu(cafeId, keyword);
	}
	
	@PutMapping("/good")
	public void updateGood(int menuId) {
		menuService.updateGood(menuId);
	}
	
	@PutMapping("/taste")
	public int updateMenuTaste(int menuId) {
		return menuService.updateMenuTaste(menuId);
	}
	
	@PutMapping("/grade")
	public int updateMenuGrade(int menuId) {
		return menuService.updateMenuGrade(menuId);
	}

}
