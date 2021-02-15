package cafe;

import java.util.List;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import kr.co.multicafe.config.ApplicationConfig;
import kr.co.multicafe.dao.RecentMapper;
import kr.co.multicafe.dto.Cafe;
import kr.co.multicafe.dto.Menu;
import kr.co.multicafe.dto.Recent;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = ApplicationConfig.class)
public class RecentMapperTest {
	@Autowired
	private RecentMapper recentMapper;
	
	@Test
	public void listViewRecent() throws Exception{
		List<Menu> menu = recentMapper.listViewRecent("sunga");
		Assert.assertEquals(1,menu.size());
		for(Menu data : menu) {
			System.out.println(data);
		}

	}
	
	@Test
	public void insertRecent() throws Exception{
		Recent recent = new Recent();
		recent.setMenuId(50000126);
		recent.setUserId("sunga");
		System.out.println(recent);
		int resultCount = recentMapper.insertRecent(recent); 
		Assert.assertEquals(1, resultCount);
		Assert.assertEquals(1,recentMapper.listViewRecent("sunga").size());
	}
	
	@Test
	public void deleteRecent() throws Exception{
		int resultCount = recentMapper.deleteRecent(60000060);
		Assert.assertEquals(1, resultCount);
	}
	
	@Test
	public void getRecent() throws Exception{
		Recent recent = recentMapper.getRecent("sunga",50000345);
		System.out.println(recent);
		Assert.assertNotNull(recent);
		Assert.assertEquals(60000060, recent.getRecentId());
	}
}
