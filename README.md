# vue3-admin-front

管理员 admin 密码 123456
编辑者 editor 密码 123456
权限不同，根据vue-router4的addRoute分配路由权限 

**版本信息**

| 使用库包       | 版本号     | 新特性                       |
| -------------- | ---------- | ---------------------------- |
| vue            | 3.0.0      | compositionAPI响应式数据     |
| vue-router     | 4.0.1      | 动态路由控制解决用户登录权限 |
| vuex           | 4.0.0-rc.2 | 数据缓存                     |
| ant design vue | 2.0.0-rc.3 | admin-UI                     |
| echarts        | 5.0.2      | 提供admin图表                |



**安装**

```
yarn install
```

### 
```
yarn serve
```

gitee 

1.找到你自己本地的项目文件，右键打开 git bash here

2.然后在窗口输入 git init  这时候文件夹会多出一个.git文件夹，看不到文件夹的，点击鼠标右键选择“显示不显示隐藏的文件”就可以看到这个文件夹了

3.进入码云新建的项目里面，复制框框里面的路径

4.然后输入  git remote add origin '刚刚复制的路径'

5.继续输入git pull origin master ，将码云上的仓库pull到本地文件夹
（此时有可能会报错，提示you do not have permission to pull the repository）你没有这个权限
进入你的码云 设置-SSH公匙-添加就行了     
生成公匙步骤
ssh-keygen -t rsa -C "xxxxx@xxxxx.com"  （你仓库地址）
三次回车后
cat ~/.ssh/id_rsa.pub  可以查看你的公匙
复制生成后的 ssh key，通过仓库主页 「管理」->「部署公钥管理」->「添加个人公钥」 ，添加生成的 public key 添加到仓库中。

继续输入git pull origin master 

6.git add .   //将文件保存到缓存区

7.git commit -m '描述'   

8.git push origin master


