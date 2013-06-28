# 起因

[Bootstrap](http://twitter.github.io/bootstrap/) 自带的按钮样式看起来太挫了，所以一直都是基于此做一些修改。改的次数多了也是蛮烦的，也一直想要重新定义一套自己喜欢的样式。

这次看到了 [alexwolfe 做的一套按钮](http://alexwolfe.github.io/Buttons/)，觉得蛮合我胃口的，不过他是采用的scss，我决定参照其样式，重新用 bootstrap 的模式实现一下，采用 bootstrap 的命名规则。

# 说明

此样式定义基于 Bootstrap v2.3.2，不过默认颜色均更换。

在原有样式基础上增加如下几种样式，可组合使用：

- btn：默认模式改为方形边框
- btn-round：圆角按钮
- btn-flat：Flat模式的按钮，就是纯色，没任何特效
- btn-pill：药丸形状，两头是半圆
- btn-circle：圆形按钮，挺大的，宽高为 120px

具体用法参见示例： http://someok.github.io/bootstrap-buttons
