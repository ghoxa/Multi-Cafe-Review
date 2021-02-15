package cafe;

import java.util.List;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import kr.co.multicafe.config.ApplicationConfig;
import kr.co.multicafe.dao.CafeMapper;
import kr.co.multicafe.dto.Cafe;


@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = ApplicationConfig.class)
public class CafeMapperTest {
	@Autowired
	private CafeMapper cafeMapper;
	
	//테스트코드
	@Test
	public void getCafe() throws Exception{
		Cafe cafe = cafeMapper.getCafe(2004);
		System.out.println(cafe);
		Assert.assertNotNull(cafe);
		Assert.assertEquals("커피빈", cafe.getName());
	}
	
	@Test
	public void listViewCafe() throws Exception{
		List<Cafe> cafe = cafeMapper.listViewCafe();
		Assert.assertEquals(8,cafe.size());
	}
	
	@Test
	public void insertCafe() throws Exception{
		Cafe cafe = new Cafe();
		cafe.setCafeId(2010);
		cafe.setName("빽다방");
		System.out.println(cafe);
		int resultCount = cafeMapper.insertCafe(cafe); //insert하면 1건 입력했다고 리턴함(한번에 1개만 입력 가능하므로 성공하면 1)
		Assert.assertEquals(1, resultCount);
		Assert.assertNotNull(cafeMapper.getCafe(cafe.getCafeId()));
	}
	
	@Test
	public void deleteCafe() throws Exception{
		int resultCount = cafeMapper.deleteCafe(2010);
		Assert.assertEquals(1,resultCount);
	}
}
