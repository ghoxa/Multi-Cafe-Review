package kr.co.multicafe.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import kr.co.multicafe.dto.Menu;
import kr.co.multicafe.dto.Recent;

@Mapper
public interface RecentMapper {
	public List<Menu> listViewRecent(int userId);
	public int insertRecent(Recent recent);
}
