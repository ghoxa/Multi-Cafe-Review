package kr.co.multicafe.common.utils;

import javax.servlet.http.HttpSession;

import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import kr.co.multicafe.dto.Admin;
import kr.co.multicafe.dto.Users;

public class UserUtil {

	public static boolean isAdmin() {
	    ServletRequestAttributes servletRequestAttribute = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
	    HttpSession httpSession = servletRequestAttribute.getRequest().getSession(true);
	    if( ((Admin)httpSession.getAttribute("admin")).getAdminId().equals("cafeadmin") && ((Admin)httpSession.getAttribute("admin")).getPwd().equals("ohcafe")) {
	        return true;
	    }else {
	        return false;
	    }
	}

	public static Users getCurrentUsers() {
	    ServletRequestAttributes servletRequestAttribute = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
	    HttpSession httpSession = servletRequestAttribute.getRequest().getSession(true);
	    return (Users)httpSession.getAttribute("users");
	}


	public static String getCurrentUserId() {
	    ServletRequestAttributes servletRequestAttribute = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
	    HttpSession httpSession = servletRequestAttribute.getRequest().getSession(true);
	    return( (Users)httpSession.getAttribute("users")).getUserId();
	}

	
}
