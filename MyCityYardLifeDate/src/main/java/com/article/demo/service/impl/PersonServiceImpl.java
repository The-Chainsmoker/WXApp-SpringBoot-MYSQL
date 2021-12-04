package com.article.demo.service.impl;

import com.article.demo.entity.person;
import com.article.demo.mapper.personMapper;
import com.article.demo.service.personService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;


@Service
public class PersonServiceImpl extends ServiceImpl<personMapper, person>
        implements personService {

}
