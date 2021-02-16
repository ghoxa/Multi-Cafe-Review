package kr.co.multicafe.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kr.co.multicafe.dao.AdminMapper;
import kr.co.multicafe.dao.UsersMapper;
import kr.co.multicafe.dto.Admin;
import kr.co.multicafe.dto.Users;

@Service
@Transactional
public class UsersService {
	
	@Autowired
	private UsersMapper usersMapper;
	@Autowired
	private AdminMapper adminMapper;
	
	public int insertUser(Users user) {
		return usersMapper.insertUser(user);
	}
	
	public int updateUser(Users user) {
		return usersMapper.updateUser(user);
	}
	
	public int deleteUser(String userId) {
		return usersMapper.deleteUser(userId);
	}
	
	public Users loginUser(String userId, String pwd) {
		return usersMapper.login(userId, pwd);
	}
	
	public Admin loginAdmin(String adminId, String pwd) {
		return adminMapper.login(adminId, pwd);
	}
	
	public Admin getAdmin() {
		return adminMapper.getAdmin();
	}
	
	public Users checkIdForRegister(String userId) {
		return usersMapper.checkIdForRegister(userId);
	}
}
