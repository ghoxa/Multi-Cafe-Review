package kr.co.multicafe.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kr.co.multicafe.dao.MenuMapper;
import kr.co.multicafe.dao.ReportMapper;
import kr.co.multicafe.dao.ReviewLikeMapper;
import kr.co.multicafe.dao.ReviewMapper;
import kr.co.multicafe.dao.UsersMapper;
import kr.co.multicafe.dto.Page;
import kr.co.multicafe.dto.Report;
import kr.co.multicafe.dto.Review;
import kr.co.multicafe.dto.ReviewLike;

@Service
@Transactional
public class ReviewService {

	
	@Autowired
	private ReviewMapper reviewMapper;
	
	@Autowired
	private ReviewLikeMapper reviewLikeMapper;
	
	@Autowired
	private MenuMapper menuMapper;
	
	@Autowired
	private ReportMapper reportMapper;
	
	@Autowired
	private UsersMapper usersMapper;
	
	@Value("5")
	private int PAGE_SIZE;
	@Value("10")
	private int BLOCK_SIZE;
	
	public Page pageInfo(int count, int pageno) {
		int countOfPage = count / PAGE_SIZE + 1;
		if (count % PAGE_SIZE == 0) countOfPage--;
		if (pageno > countOfPage) pageno = countOfPage;
		int startPageNum = (pageno-1) * PAGE_SIZE + 1;
		int endPageNum = pageno * PAGE_SIZE;
		if (pageno * PAGE_SIZE > count) endPageNum = count;
		int blockNo = pageno / BLOCK_SIZE + 1;
		if (pageno % BLOCK_SIZE == 0) blockNo--;
		int prev = (blockNo-1) * BLOCK_SIZE;
		int start = prev + 1;
		int end = blockNo * BLOCK_SIZE;
		int next = end + 1;
		if (blockNo * BLOCK_SIZE > countOfPage) {
			end = countOfPage;
			next = 0;
		}
		
		return new Page(pageno, count, start, end, prev, next, startPageNum, endPageNum);
	}
	
	
	//리뷰 추가
	@Transactional
	public int insertReview(Review review) throws RuntimeException{
		int result=0;

		try {
			result=reviewMapper.insertReview(review);
			menuMapper.updateMenuGrade(review.getMenuId());
			menuMapper.updateMenuTaste(review.getMenuId());
	
		}catch(Exception e) {
			e.printStackTrace();
			result = 0;
		}
		return result;
		
	}
	
	//이미 작성한 메뉴의 리뷰인지 체크
	public boolean isWriteReview(String userId, int menuId) {
		Review review_tmp = reviewMapper.getReview(userId, menuId);
		if(review_tmp!=null) { //이미 작성한 리뷰가 있으면
			return false;
		}
		else { //작성한 리뷰가 없으면
			return true;
		}
	}
	
	
	
	//리뷰 업데이트
	@Transactional
	public int updateReview(Review review) throws RuntimeException{
		int result = 0;
		
		try {
			result = reviewMapper.updateReview(review);
			menuMapper.updateMenuGrade(review.getMenuId());
			menuMapper.updateMenuTaste(review.getMenuId());
	
		}catch(Exception e) {
			e.printStackTrace();
			result = 0;
		}
		return result;
	}
	
	
	//리뷰 삭제 (리뷰를 참조하는 report, reviewLike 테이블 데이터도 같이 삭제)
	public int deleteReview(int reviewId) throws RuntimeException{
		int result = 0;
		try {
			reportMapper.deleteReportByReviewId(reviewId);
			reviewLikeMapper.deleteReviewLikeByReviewId(reviewId);
			result = reviewMapper.deleteReview(reviewId);
	
		}catch(Exception e) {
			e.printStackTrace();
			result = 0;
		}
		
		return result;
	}
	
	//메뉴에 대한 리뷰 목록 
	public List<Review> listViewReview(int menuId){
		return reviewMapper.listViewReview(menuId);
	}
	
//	public List<Review> listViewReviewPage(Page page){
//		
//		return reviewMapper.listViewReviewPage(page);
//	}
	
	public Page listViewReviewPage(int menuId, int pageno) { 
		Page page = pageInfo(reviewMapper.countMenuReview(menuId), pageno);
		page.setReviewList(reviewMapper.listViewReviewPage(page.getStartPageNum(), page.getEndPageNum(),menuId));
		
		return page;
	}
	
	//메뉴에 대한 리뷰 목록(정렬)	
	
	public Page listViewReviewByOptionPage(int menuId, int option, String userId, int pageno) {
		Page page = pageInfo(reviewMapper.countMenuReview(menuId), pageno);
		if(option==0)
			page.setReviewList(reviewMapper.listViewReviewPage(page.getStartPageNum(), page.getEndPageNum(),menuId));
		else if(option==1)
			page.setReviewList(reviewMapper.listViewReviewSortByGood(page.getStartPageNum(), page.getEndPageNum(), menuId));
		else if(option==2)
			page.setReviewList(reviewMapper.listViewReviewSortByScore(page.getStartPageNum(), page.getEndPageNum(), menuId, userId));
		return page;
	}
	
	
	//내가 쓴 리뷰 보여주기
	public Page listMyReview(String userId, int pageno){	
		Page page = pageInfo(reviewMapper.countMyReview(userId), pageno);
		page.setReviewList(reviewMapper.listMyReview(page.getStartPageNum(), page.getEndPageNum(),userId));
		return page;
	}

	
	//좋아요 많은 순서로 리뷰 보여주기
	public List<Review> goodListReview(int menuId){
		return reviewMapper.goodListReview(menuId);
	}

	
	/** 리뷰 좋아요 **/
	
	//리뷰 좋아요 업데이트
	@Transactional
	public int updateGood(int reviewId,String userId) {
		ReviewLike reviewLike = reviewLikeMapper.getReviewLike(reviewId,userId);
		if(reviewLike==null) { //리뷰 좋아요 테이블에 (사용자 Id, 리뷰 Id) 데이터가 없음
			reviewMapper.plusGood(reviewId);
			reviewLike=new ReviewLike();
			reviewLike.setReivewId(reviewId);
			reviewLike.setUserId(userId);
			return reviewLikeMapper.insertReviewLike(reviewLike);
		}else { //리뷰 좋아요 테이블에 (사용자 Id, 리뷰 Id) 데이터 있음 => 이미 좋아요 한 리뷰
			reviewMapper.minusGood(reviewId);
			return reviewLikeMapper.deleteReviewLike(reviewLike.getReviewLikeId());
		}
	}
	
	//메뉴 클릭시 리뷰 좋아요 체크
	public int[] isAlreadyGoodReview(int menuId, String userId) {
		List<Review> myList = reviewMapper.listViewReview(menuId);
		int[] idx = new int[myList.size()];
		
		ReviewLike reviewLike;

		for(int i=0;i<myList.size();i++) {
			reviewLike = reviewLikeMapper.getReviewLike(myList.get(i).getReviewId(),userId);
			System.out.println(reviewLike);
			if(reviewLike!=null) {
				idx[i]=1;
				System.out.println(i);
			}
			else {
				idx[i]=0;
			}
		}
		return idx;
	}
	
	//리뷰 좋아요 상태 체크
	public boolean reviewGoodCheck(int reviewId, String userId) {
		ReviewLike reviewLike= reviewLikeMapper.getReviewLike(reviewId,userId);
		if(reviewLike==null) { //좋아요 할 수 있는 상태 (좋아요 하지 않음)

			return false;
		}
		else { //좋아요 할 수 없는 상태(좋아요 한 상태)
			return true;
		}
	}
	
	//내 리뷰인지 체크
	public boolean isMyReview(int reviewId, String userId) {
		Review review = reviewMapper.getReviewById(reviewId);
		if(userId.equals(review.getUserId())) { //좋아요 할 수 없는 상태 (내가 쓴 리뷰임)
			return true;
		}
		else { //좋아요 할 수 있는 상태(내가 쓴 리뷰 아님)
			return false;
		}
	}
	
	//신고 횟수 업데이트시 처리할 일
	@Transactional
	public int updateReport(String userId, int reviewId) {
		int result=0;
		Review reportReview = reviewMapper.getReviewById(reviewId);
		try {
			Report report = new Report();
			reviewMapper.updateReport(reviewId); //신고 횟수 증가
			usersMapper.updateReport(reportReview.getUserId()); //신고되는 리뷰의 사용자ID 신고횟수 증가
			report.setReviewId(reviewId);
			report.setUserId(userId);
			result=reportMapper.insertReport(report); //report 테이블에 추가
	
		}catch(Exception e) {
			e.printStackTrace();
			result = 0;
		}
		return result;
	}
	
	//Report 테이블에 (userId, reviewId)에 해당하는 데이터가 있는지 확인
	public int getReportCnt(String userId, int reviewId) {
		int result=0;

		try {
			if(reportMapper.getReportCnt(userId, reviewId)==1) { //데이터 있음
				result=1;
			}
			else
				result=0;
	
		}catch(Exception e) {
			e.printStackTrace();
			result = 0;
		}
		return result;

	}

	public Page getReportedReview(int pageno) {
		Page page = pageInfo(reportMapper.countReportedReview(), pageno);
		page.setReviewList(reviewMapper.listReportedReview(page.getStartPageNum(), page.getEndPageNum()));
		return page;
	}
	


}
