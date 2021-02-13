package kr.co.multicafe.dao;

import java.util.List;


import org.apache.ibatis.annotations.Mapper;

import kr.co.multicafe.dto.Category;

@Mapper
public interface CategoryMapper {
	public List<Category> listViewCategory();
	public Category getCategory(int categoryId);
}
