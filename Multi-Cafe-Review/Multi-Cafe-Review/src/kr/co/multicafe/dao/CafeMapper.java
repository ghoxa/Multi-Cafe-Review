package kr.co.multicafe.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import kr.co.multicafe.dto.Cafe;

@Mapper
public interface CafeMapper {
	public List<Cafe> listViewCafe();
	public Cafe getCafe(int cafeId);
	public int insertCafe(Cafe cafe);
	public int deleteCafe(int cafeId);
	
}
