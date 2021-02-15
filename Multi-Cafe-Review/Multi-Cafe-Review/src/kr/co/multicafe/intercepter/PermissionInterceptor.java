package kr.co.multicafe.intercepter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;

public class PermissionInterceptor implements HandlerInterceptor{

//	@Override
//	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
//			throws Exception {
//		HandlerMethod method = (HandlerMethod)handler;
//		Permission permission = method.getMethodAnnotation(Permission.class);
//		if(permission==null) {
//			return true;
//		}
//
//		String authority = (String)request.getSession().getAttribute("authority");
//		
//	
//		if(permission.authority().equals(MemberType.ADMIN)) {
//			if(authority.equals(MemberType.ADMIN.name()))
//				return true;
//		}
//
//		throw new RuntimeException("No access");
//	}
	
}
