package com.article.demo.controller;

import com.article.demo.comment.R;
import com.article.demo.entity.user;
import com.article.demo.service.userService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api(description = "用户信息")
@RestController
@RequestMapping(value = "/user")
@CrossOrigin //解决跨域
public class UserController {
    @Autowired
    private userService userservice;
    //1 查询用户信息所有数据
    @ApiOperation(value = "查询用户所用信息")
    @GetMapping("findAllUser")
    public R findAllUser(){
        List<user> list = userservice.list(null);

        return R.ok().data("item",list);
        //链式编程
        //返回对象,因为使用mp的@data封装toString方法
    }

    //2添加用户接口的方法
    @ApiOperation(value = "添加用户信息")
    @PostMapping("adduser")
    public R addTeaUser(@RequestBody user information ) {

        boolean flag = userservice.save(information);
        if(flag){
            return R.ok();

        }else{
            return R.error();
        }
    }
    //3根据id进行查询
    @ApiOperation(value = "根据id查询用户信息")
    @GetMapping("getUser/{id}")
    public R getUser(@PathVariable int id){
        user byId = userservice.getById(id);
        return R.ok().data("user",byId);
    }
    //4个人信息修改功能
    @ApiOperation(value = "修改用户信息")
    @PostMapping("updateUSer")
    public R updateUser(@RequestBody user information){
        boolean flag = userservice.updateById(information);
        if(flag){
            return R.ok();

        }else{
            return R.error();
        }
    }
}
