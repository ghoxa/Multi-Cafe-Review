package kr.co.multicafe.dao;

import static org.junit.Assert.*;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import kr.co.multicafe.config.ApplicationConfig;
import kr.co.multicafe.dto.Menu;
import kr.co.multicafe.dto.Report;
import kr.co.multicafe.service.ReviewService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = ApplicationConfig.class)
public class MenuTest {
	
	@Autowired
	private MenuMapper menuMapper;
	
	@Autowired
	private ReportMapper reportMapper;
	
	@Autowired
	private ReviewService reviewService;
	
	@Test
	public void getMenu() throws Exception {
		Menu menu = menuMapper.getMenu(50000171);
		System.out.println(menu);
		assertNotNull(menu);
		assertEquals("바닐라딜라이트", menu.getName());
	}
	
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
	public void updateReport() {
		int count = reviewService.updateReport("sunga", 70000150);
		assertEquals(1, count);
	}

}
