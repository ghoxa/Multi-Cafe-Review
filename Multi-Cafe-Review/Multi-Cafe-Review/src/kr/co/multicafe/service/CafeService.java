package kr.co.multicafe.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kr.co.multicafe.dao.CafeMapper;
import kr.co.multicafe.dto.Cafe;


@Service
@Transactional
public class CafeService {
	@Autowired
	private CafeMapper cafeMapper;
	

	public List<Cafe> listViewCafe(){
		return cafeMapper.listViewCafe();
	}
	
	public Cafe getCafe(int cafeId) {
		return cafeMapper.getCafe(cafeId);
	}
	
	public int insertCafe(Cafe cafe) throws RuntimeException{
		try {
			return cafeMapper.insertCafe(cafe);
	
		}catch(Exception e) {
			e.printStackTrace();
			return 0;
		}
	}
	
	public int deleteCafe(int cafeId) throws RuntimeException{
		try{
			return cafeMapper.deleteCafe(cafeId);
		}catch(Exception e) {
			e.printStackTrace();
			return 0;
		}
	}
}
