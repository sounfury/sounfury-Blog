# css

## 一.元素分类

+ #### 块级元素

  独占一行，任意设置，常用``<div>,<view> ``

+ #### 内联元素

  同一行，不可设置，常用：``<a>, < br >,<span>``

+ #### 内联块级

  同一行，可设置，常用``<Img>, , <input>`` display:inline block ;

  float :left /right; position: absolute/ 可以将元素设置为内联块级 元素（ BFC）      

## 二.盒子模型

![盒子模型][1]

###   

1. ***box***-
   ***sizing: content box ( 默认）***
     ***此时，***
     ***元素的 width=content 的宽度***
2. ***box***-
   ***sizing: border box***
     ***此时，***
     ***元素的 width= content 的宽度 + padding + border***
     ***自己会膨胀***
     ***自己不会膨胀***          

### 注

> 1.两个盒子模型跟margin 没有关系
>
> 2.建议优先级如下
> width > padding > margin
>
> 3.对于 行级元素 margin top 和 margin bottom 无效
>
> 4.外边距合并：左右排挤，上下合并——————用 flex布局解决

## 三.定位

| absolute     | 绝对定位；脱离文档流的布局，遗留下来的空间由后面的元素填充。定位的起始位置为最近的父元素 postion 不为 static，否则为 Body ⽂ 档本身。 |
| ------------ | ------------------------------------------------------------ |
| **relative** | **相对定位，相当于加了 top, bottom, left, right 和 z index的static**，**定位的起始位置为此元素原先在文档流的位置** |
| **fixed**    | **固定定位；类似于absolute ，但不随着滚动条的移动 ⽽ 改变位置。** |
| **static**   | **默认值；默认布局。忽略 top, bottom, left, right 和 z index** |
| **sticky**   | **类似relative 和 fixed 的结合体**                           |

> 注：z index值大的在上面，小的在下面

## 四.布局

### flex布局(display:flex)

### 容器

+ flex-direction 容器内子元素的排列方向

  row(横排) |row reverse(逆横排) |column（竖排）| column reverse（逆竖排）

![image-20230725153728740.png](https://s2.loli.net/2023/07/25/JCzbLKo4nXSHfTB.png)
> 注：如果设置为``column``,那么主轴交叉轴颠倒，justify-content与align-items使用也颠倒

+ flex-wrap 元素放不下了是否换行

  nowrap (不换)|wrap（换）| wrap reverse（逆换）

+ justify-content

  ![image-20230725153728740](https://s2.loli.net/2023/07/25/aMRiPvnuTmfC2lc.png)

+ align-items 属性定义项目在 交叉轴上 如何对齐

![image-20230725154027887.png](https://s2.loli.net/2023/07/25/xXk1PjAp7QMLr4U.png)

+ align-content 属性定义了 多根轴线 的对齐方式。
![image-20230725154106419.png](https://s2.loli.net/2023/07/25/QiLlRE5hgxYtOMX.png)

### 项目属性

1. order
2. flex-grow
3. flex-shrink
4. flex-basis
5. flex (2, 3和 4 的简写形式
6. align-self



### 参考视频
https://www.bilibili.com/video/BV1P7411G7BW/
https://www.bilibili.com/video/BV1t7411E7tn



  [1]: https://s2.loli.net/2023/07/25/Jex25GYmUnNDcwA.png

















