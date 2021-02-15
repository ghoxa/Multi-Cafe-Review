package kr.co.multicafe.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import kr.co.multicafe.dto.Menu;
import kr.co.multicafe.dto.Recent;

@Mapper
public interface RecentMapper {
	public List<Menu> listViewRecent(String userId);
	public int insertRecent(Recent recent);
	public int deleteRecent(int recentId);
	public Recent getRecent(@Param("userId")String userId, @Param("menuId")int menuId);
	//public List<Recent> listViewMyRecent(String userId);
	public int countMyRecent(String userId);
	public Recent getRecentPast(String userId);
}
