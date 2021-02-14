package kr.co.multicafe.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import kr.co.multicafe.dto.Admin;

@Mapper
public interface AdminMapper {
	public Admin login(@Param("adminId") String adminId, @Param("pwd") String pwd);
}
