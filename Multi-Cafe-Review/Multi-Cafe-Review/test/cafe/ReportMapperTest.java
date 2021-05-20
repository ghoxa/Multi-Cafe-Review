package cafe;

import static org.junit.Assert.assertEquals;

import java.util.List;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import kr.co.multicafe.config.ApplicationConfig;
import kr.co.multicafe.dao.ReportMapper;
import kr.co.multicafe.dao.ReviewMapper;
import kr.co.multicafe.dto.Report;
import kr.co.multicafe.dto.Review;
import kr.co.multicafe.service.ReviewService;

@WebAppConfiguration
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = ApplicationConfig.class)
public class ReportMapperTest {
	@Autowired
	ReportMapper reportMapper;
	
	@Autowired
	ReviewMapper reviewMapper;
	
	@Autowired
	ReviewService reviewService;
	
	@Test
	public void insertReport() throws Exception{
		Report report = new Report();
		report.setReportId(90000001);
		report.setReviewId(70000150);
		report.setUserId("sunga");
		int result = reportMapper.insertReport(report);
		assertEquals(1,result);
	}
	
	@Test
	public void getReport() throws Exception{
		List<Review> reviewList = reviewMapper.listReportedReview();
		Assert.assertEquals(1,reviewList.size());
	}
	
	@Test
	public void getReportService() throws Exception{
		List<Review> reviewList = reviewService.getReportedReview();
		Assert.assertEquals(2, reviewList.size());
	}
}
