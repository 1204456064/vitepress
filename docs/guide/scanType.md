# 扫码方式之广播录入

##  一、背景

部分客户反应app扫码会出现偶尔数据丢失原因，初步排查是焦点录入方式有时会出现扫码信息丢失情况

##  二、解决方案

### 将扫码方式改为广播录入方式

PDA扫描枪对扫码有强大支持，在原生自带的扫描服务中可以配置多种扫描模式，广播传递扫码结果是相对先进的。
首先PAD扫描枪在扫码解析后是会自动发送广播的，注册监听事件，可以在扫码解析后获取到扫码信息。

## 三、使用

1、mounted注册监听

```javascript
 // 获取原生对象
 mounted() {
        // 获取原生对象/获取应用主Activity实例对象
        this.nativeMain = plus.android.runtimeMainActivity();
        
        // 实现Interface的方法
        this.receiver = plus.android.implements('io.dcloud.feature.internal.reflect.BroadcastReceiver', { onReceive: this.doReceive });
        
        // 导入Java类对象
        const IntentFilter = plus.android.importClass('android.content.IntentFilter');

        const filter = new IntentFilter();

        filter.addAction(process.env.VUE_APP_BROADCAST_ACTION);// 监听扫描
        this.nativeMain.registerReceiver(this.receiver, filter);// 注册监听
    },
```

2、接收函数

```javascript
doReceive(context, intent) {
            plus.android.importClass(intent);
            const code = intent.getStringExtra(process.env.VUE_APP_NATIVE_SCANNER_DATA);
            const codeType = intent.getStringExtra(process.env.VUE_APP_NATIVE_CODE_TYPE);
            console.log(code, codeType);
            // 监听到广播后调用此方法
            this.handlePDAScan(code || '');
    },
```

3、使用后销毁

```
destroyed() {
        this.nativeMain.unregisterReceiver(this.receiver);
    },
```
