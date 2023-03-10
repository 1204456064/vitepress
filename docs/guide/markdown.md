
# markdown使用指南
1. Markdown 语言在 2004 由约翰·格鲁伯（英语：John Gruber）创建。
2. Markdown 编写的文档可以导出 HTML 、Word、图像、PDF、Epub 等多种格式的文档。
3. Markdown 编写的文档后缀为 .md, .markdown。
## 1、markdown有序列表和无序列表
1. 有序列表(数字 + . + 空格)  
例: 1. 
2. 无序列表(三种方式)
* 我是 * + 空格
* 我是 + + 空格
* 我是 - + 空格
## 2、markdown标题
1. 一级标题  
#+空格+一级标题内容
2. 二级标题  
##+空格+二级标题内容
3. 以此类推，没加一个#号，标题加一，标题最多6级
## 3、markdown段落格式
1. markdown的换行是两个以上的空格加回车。
2. 也可以用空行来重新开始一个段落<br/>
## 4、Markdown字体
### 斜体两种方式
1. _所要输入的内容 _ 即为斜体文本  
_我是斜体_
2. *我是斜体 *  
*我是斜体*
### 字体加粗
1. **文字 **  
**粗体**
2. __内容 __  
__粗体__
3. 斜体加粗: ___内容 ___ 或 ***内容 ***  
___我是粗斜体___  
***我是粗斜体***

## 5、Markdown代码
1. 用``来包裹代码  
`
console.log(‘我是markdown代码’)
`
## 6、Markdown代码块
1. 三个```来包裹代码
```
console.log('我是markdown代码')
```
2. 可指定一种语言
```ts
console.log('我是markdown代码')
```
## 7、链接
1. 网址(https://www.baidu.com/)  
[百度](https://www.baidu.com/)  
2. 本地(../info/codeReview/README.md)  
[万物智汇前端巅峰交流会](../info/codeReview/README.md)
## 8、图片
1. 网址(https://v2.vuepress.vuejs.org/images/hero.png)  
   ![alt 属性文本](https://v2.vuepress.vuejs.org/images/hero.png)
2. 本地(../assets/images/git-guide/file-introduce.png)  
   ![alt 属性文本](../assets/images/git-guide/file-introduce.png)

## 9、表格
1. 您可以用竖线 | 和横线 - 创建表格。 横线用于创建每列的标题，而竖线用于分隔每列。必须在表格前包含空白链接，以便其正确呈现。
```
|  表头   | 表头  |
|  ----  | ----  |
| 单元格  | 单元格 |
| 单元格  | 单元格 |
```
|  表头   | 表头  |
|  ----  | ----  |
| 单元格  | 单元格 |
| 单元格  | 单元格 |
2. 对齐方式
> -: 设置内容和标题栏居右对齐。  
> :- 设置内容和标题栏居左对齐。  
> :-: 设置内容和标题栏居中对齐。
```
| 左对齐 | 右对齐 | 居中对齐 |
| :-----| ----: | :----: |
| 单元格 | 单元格 | 单元格 |
| 单元格 | 单元格 | 单元格 |
```
| 左对齐dsdsdsd | 右对齐dsdssds | 居中对齐sdsfdsdffdsfd |
| :-----| ----: | :----: |
| 单元格 | 单元格 | 单元格 |
| 单元格 | 单元格 | 单元格d |

## 10、区块
1. 在段落开头使用 >符号 ，然后后面紧跟一个空格符号：  
> 我们有点帅
> 我们有点帅

2. 区块的嵌套：一个 > 符号是最外层，两个 > 符号是第一层嵌套，以此类推。
> 我是一级引用
>> 我是二级引用
>>> 我是二级引用
