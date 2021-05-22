package cafe;

import java.util.List;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import kr.co.multicafe.config.ApplicationConfig;
import kr.co.multicafe.dao.ReviewMapper;
import kr.co.multicafe.dto.Cafe;
import kr.co.multicafe.dto.Page;
import kr.co.multicafe.dto.Review;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = ApplicationConfig.class)
public class ReviewMapperTest {
	@Autowired
	private ReviewMapper reviewMapper;
	
	@Test
	public void insertRecent() throws Exception{
		Review review = new Review();
		review.setMenuId(50000497);
		review.setUserId("sunga");
		review.setContent("콜드브루 굿굿");
		System.out.println(review);
		int resultCount = reviewMapper.insertReview(review); 
		Assert.assertEquals(1, resultCount);
	}
	
//	@Test
//	public void listViewReview() throws Exception{
//		List<Review> review = reviewMapper.listViewReviewSortByGood(50000283);
//		Assert.assertEquals(20,review.size());
//	}
	
//	@Test
//	public void listMyReview() throws Exception{
//		Page review = reviewMapper.listMyReview(1,1,"sunga");
//		Assert.assertEquals(20,review.size());
//	}
	
	@Test
	public void plusGood() throws Exception{
		int resultCount = reviewMapper.plusGood(70000013);
		Assert.assertEquals(1, resultCount);
	}
	
	@Test
	public void minusGood() throws Exception{
		int resultCount = reviewMapper.minusGood(70000013);
		Assert.assertEquals(1, resultCount);
	}

}
