package com.openData;

import com.spring4all.swagger.EnableSwagger2Doc;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;

@SpringBootApplication
@MapperScan("com.openData.openData.dao.mapper")
@EnableSwagger2Doc
@ServletComponentScan
public class OpenDataApplication {

    public static void main(String[] args) {
        SpringApplication.run(OpenDataApplication.class, args);
    }

}
