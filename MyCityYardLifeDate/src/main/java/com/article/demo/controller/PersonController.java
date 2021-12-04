package com.article.demo.controller;

import com.article.demo.comment.R;
import com.article.demo.entity.person;
import com.article.demo.service.personService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api(description = "个人信息")
@RestController
@RequestMapping(value = "/person")
@CrossOrigin //解决跨域
public class PersonController {
    @Autowired
    private personService personservice;
    //1 查询个人信息所有数据

    @ApiOperation(value = "个人所有信息")//前端web页面的findAllPerson的注解
    @GetMapping("findAllPerson")//(等于/findAll)
    public R findAllPerson(){
        List<person> list = personservice.list(null);

        return R.ok().data("item",list);
        //链式编程
        //返回对象,因为使用mp的@data封装toString方法
    }

    //2根据name进行查询
    @ApiOperation(value = "根据id查询个人信息")
    @GetMapping("getPerson/{id}")
    public R getPerson(@PathVariable String id){
        person byId = personservice.getById(id);
        return R.ok().data("person",byId);
    }


}
