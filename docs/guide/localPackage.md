# uni-app本地打包指南



## 一、操作流程

### 1、下载HbuilderX

-[下载地址](https://www.dcloud.io/hbuilderx.html)

### 2、下载AndroidStudio

 -[下载地址](https://developer.android.com/studio) 

### 3、SDK下载地址

-[App离线打包SDK 下载](https://nativesupport.dcloud.net.cn/AppDocs/download/android)

#### 4、jre运行环境

* AndroidStudio安装成功后自带
* 也可以自己安装jre运行环境

### 5、AndroidStudio打开SDK

​	sdk下载好后将其解压，解压后可得到如下图示文件，并用AndroidStudio打开

![image-20220828153026829](/assets/images/localPackaging/one.png)

![image-20220828153654974](/assets/images/localPackaging/two.png)

![image-20220828161139500](/assets/images/localPackaging/three.png)

最后生成大致文件如下图所示即是成功

![image-20220828160849716](/assets/images/localPackaging/four.png)



### 6、生成keystore

* keystore是JAVA的密钥库，keystore里包含密钥实体和可信任的证书实体。

```shell
# 生成keystore文件命令(当前目录下生成)
keytool -genkey -alias xxx -keyalg RSA -keysize 2048 -validity 36500 -keystore xxx.keystore

# 查看keystore信息
keytool -list -v -keystore  xxx.keystore
```

![image-20220828160102951](/assets/images/localPackaging/five.png)

![image-20220828160212397](/assets/images/localPackaging/six.png)

将生成的keystore文件复制或者剪切到simpleDemo目录下如下图所示

![image-20220828161236837](/assets/images/localPackaging/seven.png)

## 二、生成本地资源

### 1、生成APP本地打包资源

![image-20220828152056709](/assets/images/localPackaging/eight.png)

![image-20220828161544809](/assets/images/localPackaging/nine.png)

![image-20220828161728810](/assets/images/localPackaging/ten.png)

![image-20220828161816926](/assets/images/localPackaging/eleven.png)

![image-20220828162010311](/assets/images/localPackaging/twelve.png)

![image-20220828162200210](/assets/images/localPackaging/thirteen.png)

![image-20220828162457144](/assets/images/localPackaging/fourteen.png)

## 三、打包准备 

### 1、生成Android

​	先进入[uni-app开发者中心](https://dev.dcloud.net.cn/#/)

![image-20220828163536200](/assets/images/localPackaging/fifteen.png)

![image-20220828163706314](/assets/images/localPackaging/sixteen.png)

![image-20220828163940774](/assets/images/localPackaging/seventeen.png)

![image-20220828164045750](/assets/images/localPackaging/eighteen.png)

2、配置打包文件

![image-20220828164301379](/assets/images/localPackaging/nineteen.png)

![image-20220828164519736](/assets/images/localPackaging/twenty.png)

![image-20220828164645221](/assets/images/localPackaging/twenty-one.png)

![image-20220828164733858](/assets/images/localPackaging/twenty-two.png)

![image-20220828165041122](/assets/images/localPackaging/twenty-three.png)

## 四、打包发布

前面准备工作都做好了，接下来就是打包打包分为内测(测试)版和发布(正式)版

### 1、内测(测试)版打包流程

![image-20220828165319320](/assets/images/localPackaging/twenty-four.png)

![image-20220828165350830](/assets/images/localPackaging/twenty-five.png)

### 2、发布(正式)版打包流程

![image-20220828165503404](/assets/images/localPackaging/twenty-six.png)

![image-20220828165643110](/assets/images/localPackaging/twenty-seven.png)

![image-20220828165904745](/assets/images/localPackaging/twenty-eight.png)

![image-20220828165956254](/assets/images/localPackaging/twenty-nine.png)

![image-20220828170111749](/assets/images/localPackaging/thirty.png)