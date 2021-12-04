package com.article.demo.service.impl;

import com.article.demo.entity.user;
import com.article.demo.mapper.userMapper;
import com.article.demo.service.userService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

@Service
public class UserServicelmpl extends ServiceImpl<userMapper, user>
        implements userService {

}
