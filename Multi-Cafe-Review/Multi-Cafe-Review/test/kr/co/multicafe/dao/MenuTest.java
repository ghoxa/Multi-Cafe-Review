package kr.co.multicafe.dao;

import static org.junit.Assert.*;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import kr.co.multicafe.config.ApplicationConfig;
import kr.co.multicafe.dto.Menu;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = ApplicationConfig.class)
public class MenuTest {
	
	@Autowired
	private MenuMapper menuMapper;
	
	@Test
	public void getMenu() throws Exception {
		Menu menu = menuMapper.getMenu(50000171);
		System.out.println(menu);
		assertNotNull(menu);
		assertEquals("바닐라딜라이트", menu.getName());
	}

}
