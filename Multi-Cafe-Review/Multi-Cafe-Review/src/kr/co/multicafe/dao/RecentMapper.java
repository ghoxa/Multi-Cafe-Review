package kr.co.multicafe.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import kr.co.multicafe.dto.Recent;

@Mapper
public interface RecentMapper {
	public List<Recent> listViewRecent();
	public int insertRecent(int menuId);
}
