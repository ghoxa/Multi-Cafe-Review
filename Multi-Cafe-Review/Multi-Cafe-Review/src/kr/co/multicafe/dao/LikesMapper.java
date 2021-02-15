package kr.co.multicafe.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import kr.co.multicafe.dto.Likes;
import kr.co.multicafe.dto.Menu;

@Mapper
public interface LikesMapper {
	public List<Menu> listViewLike(String userId);
	public int insertLike(Likes likes);
	public int deleteLike(int likeId);
	public Likes getLike(@Param("userId") String userId, @Param("menuId") int menuId);
}
