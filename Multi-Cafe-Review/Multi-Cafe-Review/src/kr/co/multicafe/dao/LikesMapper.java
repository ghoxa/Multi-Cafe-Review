package kr.co.multicafe.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import kr.co.multicafe.dto.Likes;
import kr.co.multicafe.dto.Menu;

@Mapper
public interface LikesMapper {
	public int countUserLike(String userId);
	public List<Menu> listViewLike(@Param("userId") String userId, @Param("startPageNum") int startPageNum, @Param("endPageNum") int endPageNum);
	public int insertLike(Likes likes);
	public int deleteLike(int likeId);
	public Likes getLike(@Param("userId") String userId, @Param("menuId") int menuId);
}
