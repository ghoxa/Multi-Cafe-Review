package kr.co.multicafe.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import kr.co.multicafe.dto.Taste;
import kr.co.multicafe.dto.Users;

@Mapper
public interface UsersMapper {
	public int insertUser(Users user);
	public int updateUser(Users user);
	public int deleteUser(String userId);
	public Users getUser(String userId);
	public Taste getTaste(String userId); 
	public Users login(@Param("userId") String userId, @Param("pwd") String pwd);
}
