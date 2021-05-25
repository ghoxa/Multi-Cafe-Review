package kr.co.multicafe.dto;

import java.util.List;

public class Page {
	private int pageno;
	private int count;
	private int start;
	private int end;
	private int prev;
	private int next;
	private int startPageNum;
	private int endPageNum;
	private List<Menu> list;
	private List<Review> reviewList;
	
	public Page(int pageno, int count, int start, int end, int prev, int next, int startPageNum, int endPageNum) {
		super();
		this.pageno = pageno;
		this.count = count;
		this.start = start;
		this.end = end;
		this.prev = prev;
		this.next = next;
		this.startPageNum = startPageNum;
		this.endPageNum = endPageNum;
	}

	public int getPageno() {
		return pageno;
	}

	public void setPageno(int pageno) {
		this.pageno = pageno;
	}

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}

	public int getStart() {
		return start;
	}

	public void setStart(int start) {
		this.start = start;
	}

	public int getEnd() {
		return end;
	}

	public void setEnd(int end) {
		this.end = end;
	}

	public int getPrev() {
		return prev;
	}

	public void setPrev(int prev) {
		this.prev = prev;
	}

	public int getNext() {
		return next;
	}

	public void setNext(int next) {
		this.next = next;
	}

	public int getStartPageNum() {
		return startPageNum;
	}

	public void setStartPageNum(int startPageNum) {
		this.startPageNum = startPageNum;
	}

	public int getEndPageNum() {
		return endPageNum;
	}

	public void setEndPageNum(int endPageNum) {
		this.endPageNum = endPageNum;
	}

	public List<Menu> getList() {
		return list;
	}

	public void setList(List<Menu> list) {
		this.list = list;
	}
	
	public void setReviewList(List<Review> list){
		this.reviewList = list;
	}
	
	public List<Review> getReviewList() {
		return reviewList;
	}
	
}
