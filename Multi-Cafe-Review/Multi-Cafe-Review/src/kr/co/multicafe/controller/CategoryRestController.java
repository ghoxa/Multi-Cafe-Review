package kr.co.multicafe.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kr.co.multicafe.dto.Category;
import kr.co.multicafe.service.CategoryService;

@RestController //ResponseBody라는 것을 붙일 필요 없음
@RequestMapping(path="/api/category")
public class CategoryRestController {
//	public List<Category> listViewCategory();
//	public Category getCategory(int category_id);
	
	@Autowired //Service에게 데이터 얻어오는 부분
	private CategoryService categoryService;
	
	@GetMapping
	public List<Category> listViewCategory(){
		return categoryService.listViewCategory();
	}
	
	@GetMapping("/{categoryId}")
	public Category getCategory(@PathVariable(name="categoryId")int categoryId) {
		return categoryService.getCategory(categoryId);

	}
}
