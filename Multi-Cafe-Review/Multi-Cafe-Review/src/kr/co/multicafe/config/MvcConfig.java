package kr.co.multicafe.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.ViewResolverRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import kr.co.multicafe.common.interceptor.AdminInterceptor;
import kr.co.multicafe.common.interceptor.LoginInterceptor;


@Configuration
@EnableWebMvc
@ComponentScan(basePackages = "kr.co.multicafe.controller")
public class MvcConfig implements WebMvcConfigurer {

	@Override
	public void configureViewResolvers(ViewResolverRegistry registry) {
		registry.jsp("/WEB-INF/views/", ".jsp");
	}
	
	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		registry.addResourceHandler("/img/**").addResourceLocations("classpath:/static/img/");
	}
	
	@Override
	public void addViewControllers(ViewControllerRegistry registry) {
		registry.addRedirectViewController("/", "/hi");
	}

//	@Override
//	public void addInterceptors(InterceptorRegistry registry) {
//		registry.addInterceptor(new LoginInterceptor()).addPathPatterns("/api/user/**");
////		registry.addInterceptor(new LoginInterceptor()).addPathPatterns("/api/menu/*/like");
//		registry.addInterceptor(new AdminInterceptor()).addPathPatterns("/api/admin/**");
//	}
//	
	
	
}
