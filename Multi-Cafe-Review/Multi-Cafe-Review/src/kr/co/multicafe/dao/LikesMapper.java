package kr.co.multicafe.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import kr.co.multicafe.dto.Likes;

@Mapper
public interface LikesMapper {
	public List<Likes> listViewLike(int userId);
	public int insertLike(int userId, int menuId);
	public int deleteLike(int likeId);
}
