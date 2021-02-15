package cafe;

import java.util.List;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import kr.co.multicafe.config.ApplicationConfig;
import kr.co.multicafe.dao.CategoryMapper;
import kr.co.multicafe.dto.Cafe;
import kr.co.multicafe.dto.Category;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = ApplicationConfig.class)
public class CategoryMapperTest {
	@Autowired
	private CategoryMapper categoryMapper;
	
	//테스트코드
	@Test
	public void getCategory() throws Exception{
		Category category = categoryMapper.getCategory(3000);
		System.out.println(category);
		Assert.assertNotNull(category);
		Assert.assertEquals("커피", category.getName());
	}
	
	@Test
	public void listViewCategory() throws Exception{
		List<Category> category = categoryMapper.listViewCategory();
		Assert.assertEquals(8,category.size());
	}
}
