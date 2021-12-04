package com.article.demo.entity;

import com.baomidou.mybatisplus.annotation.FieldFill;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import java.io.Serializable;
import java.util.Date;

@Data
@EqualsAndHashCode(callSuper = false)
//开启链式编程
@Accessors(chain = true)
public class user implements Serializable {
    @TableId(value = "id", type = IdType.ID_WORKER_STR)
    @ApiModelProperty(value = "用户标识")
    private int id;

    @ApiModelProperty(value = "用户名")
    private String name;

    @ApiModelProperty(value = "密码")
    private String password;

    @ApiModelProperty(value = "权限")
    private boolean power;

    @ApiModelProperty(value = "点赞")
    private int dianzan;

    @ApiModelProperty(value = "视频")
    private String video;

    @ApiModelProperty(value = "图片")
    private String image;

    @ApiModelProperty(value = "address")
    private String address;

    @ApiModelProperty(value = "评论")
    private String content;

    @ApiModelProperty(value = "创建时间")
    @TableField(fill = FieldFill.INSERT)
    private Date gmtCreate;

}