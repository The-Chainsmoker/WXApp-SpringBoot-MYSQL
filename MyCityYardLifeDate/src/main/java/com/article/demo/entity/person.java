package com.article.demo.entity;


import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import java.io.Serializable;

@Data
@EqualsAndHashCode(callSuper = false)
//开启链式编程
@Accessors(chain = true)
public class person implements Serializable {
    @ApiModelProperty(value = "姓名")
    @TableId
    private String name;
    @ApiModelProperty(value = "年龄")
    private String age;
    @ApiModelProperty(value = "电话")
    private String phone;
    @ApiModelProperty(value = "地址")
    private String address;
    @ApiModelProperty(value = "点赞")
    private int dianzan;
    @ApiModelProperty(value = "自我介绍")
    private String introduce;
    @ApiModelProperty(value = "口号")
    private String slogan;
    @ApiModelProperty(value = "标题")
    private String title;
    @ApiModelProperty(value = "城院的经历")
    private String experience;


}
