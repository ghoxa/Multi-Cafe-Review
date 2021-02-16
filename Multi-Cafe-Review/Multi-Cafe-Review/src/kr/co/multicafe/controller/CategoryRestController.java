package kr.co.multicafe.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kr.co.multicafe.dto.Category;
import kr.co.multicafe.service.CategoryService;

@CrossOrigin("*")
@RestController 
@RequestMapping(path="/api/category")
public class CategoryRestController {

	@Autowired 
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
