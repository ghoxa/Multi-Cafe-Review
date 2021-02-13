package kr.co.multicafe.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import kr.co.multicafe.dto.Likes;
import kr.co.multicafe.dto.Menu;

@Mapper
public interface LikesMapper {
	public List<Menu> listViewLike(int userId);
	public int insertLike(Likes likes);
	public int deleteLike(int likeId);
}
