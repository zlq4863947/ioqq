# ioqq上手指南

**ioqq**为调用**酷Q** 的 DLL 接口来操作qq，从而使qq可通过编程编写成qq机器人的API库。
**酷Q**安装环境可使用**ioqq**提供的命令一键安装及运行。

## 前提环境

- 安装[docker](https://www.docker.com/)

> 也可以直接安装[酷Q](https://cqp.cc/t/23253)，不过建议安装[docker](https://www.docker.com/)，便于使用ioqq管理酷Q环境


## 环境安装

### 1、安装ioqq模块
运行 `npm install ioqq`

### 2、安装并运行酷Q
运行 `npm explore ioqq -- npm run docker:up` 
![](https://upload-images.jianshu.io/upload_images/5664775-97735822a8c614e7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

> 运行`npm explore ioqq -- npm run docker:stop`，可以停止运行docker的酷Q容器
> 运行`npm explore ioqq -- npm run docker:down`，可以停止并删除docker的酷Q容器

### 3、配置酷Q，登录希望被程序控制的QQ

- 使用浏览器进入`127.0.0.1:9000`地址
![](https://upload-images.jianshu.io/upload_images/5664775-f298a5ce4b740886.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 输入默认密码: `PAsSwoRd`, 点击`Send Password`按钮
![](https://upload-images.jianshu.io/upload_images/5664775-f263c921e1684b6b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 输入qq账号和密码，建议使用小号（Q龄尽量别太小），登录的QQ需要开启安全设备锁。
![](https://upload-images.jianshu.io/upload_images/5664775-141ca5356ad8a17d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 填写正确qq号及密码并点击确定按钮后，会提示安全验证（没开启设备锁的同学，会被提示要求开启设备锁），点击`是`,输入正确验证码后，点击确定
![](https://upload-images.jianshu.io/upload_images/5664775-b51771cf99ff1b8d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 成功在酷Q上登录qq
![](https://upload-images.jianshu.io/upload_images/5664775-abc12dfb0f9e239e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 使用方法

- 手动创建`test.js`文件后，复制以下代码:

```
var { Rest } = require("ioqq");

var rest = new Rest("http://127.0.0.1:5700");
rest.sendPrivateMessage(123456, `测试的消息,t=${Date.now()}`);
```
> Rest中的`http://127.0.0.1:5700`为默认http接口地址
> `sendPrivateMessage`为给指定好友发送私有消息，其中第一个参数为对方QQ号码

- 运行 `node test`
![](https://upload-images.jianshu.io/upload_images/5664775-1918974e3562e3a3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 运行结果
![](https://upload-images.jianshu.io/upload_images/5664775-5f8a3275585c4c05.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

以上就是安装及使用ioqq的教程，其他详细信息，请参考[ioqq](https://github.com/zlq4863947/ioqq)项目说明。

### 常用方法

- sendGroupMessage
发送Q群消息

- sendPrivateMessage
发送个人消息

- getGroupList
获取所有已加入Q群的信息