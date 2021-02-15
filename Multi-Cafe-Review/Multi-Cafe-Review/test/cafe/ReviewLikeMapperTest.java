package cafe;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import kr.co.multicafe.config.ApplicationConfig;
import kr.co.multicafe.dao.ReviewLikeMapper;
import kr.co.multicafe.dao.ReviewMapper;
import kr.co.multicafe.dto.Review;
import kr.co.multicafe.dto.ReviewLike;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = ApplicationConfig.class)
public class ReviewLikeMapperTest {
	@Autowired
	private ReviewLikeMapper reviewLikeMapper;
	
	@Test
	public void insertReviewLike() throws Exception{
		ReviewLike reviewLike = new ReviewLike();
		reviewLike.setReivewId(70000013);
		reviewLike.setUserId("sunga");
		System.out.println(reviewLike);
		int resultCount = reviewLikeMapper.insertReviewLike(reviewLike); 
		Assert.assertEquals(1, resultCount);
	}
	
	@Test
	public void getReviewLike() throws Exception{
		//ReviewLike reviewLlike = reviewLikeMapper.getReviewLike(70000013, "sunga");
		Assert.assertNotNull(reviewLikeMapper.getReviewLike(70000013, "sunga"));

	}
	
	@Test
	public void deleteReviewLike() throws Exception{
		int resultCount = reviewLikeMapper.deleteReviewLike(80000004);
		Assert.assertEquals(1, resultCount);
	}
}
