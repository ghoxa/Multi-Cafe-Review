package kr.co.multicafe.config;

import javax.sql.DataSource;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.jdbc.datasource.SimpleDriverDataSource;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@ComponentScan(basePackages = {"kr.co.multicafe.dao", "kr.co.multicafe.service"})
@Import({MyBatisConfig.class})
@EnableTransactionManagement
public class ApplicationConfig {
	
	@Bean
	public DataSource dataSource() {
		SimpleDriverDataSource dataSource = new SimpleDriverDataSource();
		dataSource.setDriverClass(oracle.jdbc.driver.OracleDriver.class);
		//dataSource.setUrl("jdbc:oracle:thin:@m5cafe.cowdwiadhrlr.ap-northeast-2.rds.amazonaws.com:1521:M5CAFE");
		dataSource.setUrl("jdbc:oracle:thin:@3.35.208.147:1521:XE");
		dataSource.setUsername("multicafe");
		dataSource.setPassword("multicafe2021");
		return dataSource;
	}
	
	@Bean
	public PlatformTransactionManager transactionManager() {
		return new DataSourceTransactionManager(dataSource());
	}

}
