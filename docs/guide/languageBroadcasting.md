# uni-app扫码带提示音

##  一、背景

部分客户由于扫码时网络的不稳定性等情况导致扫码有时数据丢失、或者是不知道什么时候扫码成功了，极大的影响了客户的工作效率。

##  二、解决方案

### uni.createInnerAudioContext()

 uni.createInnerAudioContext()是uni-app自带的音频组件控制API，相当于一个容器，可将需要播放的音频放入容器中。

## 三、使用

1、创建容器

```javascript
const innerAudioContext = uni.createInnerAudioContext();
```

2、放入音频

```javascript
innerAudioContext.src = 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3';
// 在vue2版本的uni-app中的音频不能直接将路径赋值给容器需要引入
```

* 错误用法1

```javascript
innerAudioContext.src = 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3';
```

* 错误用法2

```javascript
innerAudioContext.src = '../images/radio.wav';
```

* 正确用法

```javascript
import successAudio from '../../assets/audio/success.wav';
innerAudioContext.src = successAudio;
```

3、播放

```
innerAudioContext.play();
```

4、连在一起使用

```javascript
// 头部引入音频
import successAudio from '../../assets/audio/success.wav';
// 创建音频容器
const innerAudioContext = uni.createInnerAudioContext();
// 将引入的音频放入容器中
innerAudioContext.src = successAudio;
// 播放
innerAudioContext.play();
// 播放结束后要立马销毁当前容器，避免多次播报导致内存不足
innerAudioContext.onEnded(() => {
    innerAudioContext.destroy();
});
```

5、音频需要自己录音或者去腾讯云合成，推荐去腾讯云合成

[腾讯云路径](https://console.cloud.tencent.com/tts/complexaudio))

扫码登录即可使用

6、扩展延伸

[更多具体可参考uni-app官方描述]([uni.createInnerAudioContext() | uni-app官网 (dcloud.io)](https://uniapp.dcloud.io/api/media/audio-context.html#createinneraudiocontext))