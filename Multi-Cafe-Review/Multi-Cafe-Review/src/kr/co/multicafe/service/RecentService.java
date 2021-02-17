package kr.co.multicafe.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kr.co.multicafe.dao.RecentMapper;
import kr.co.multicafe.dto.Menu;
import kr.co.multicafe.dto.Recent;

@Service
@Transactional
public class RecentService {
	@Autowired
	private RecentMapper recentMapper;
	
	
	//최근 본 메뉴 보여주기
	public List<Menu> listViewRecent(String userId){
		return recentMapper.listViewRecent(userId);
	}
	
	//최근 본 메뉴에 추가
	public int insertRecent(Recent recent) {
		return recentMapper.insertRecent(recent);
	}	
	
	
}
