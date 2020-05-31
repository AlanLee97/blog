# npm install 命令参数的一些简写方式

在使用 npm install 命令时，有许多指定参数的命令是可以进行缩写的，本文就简单梳理一下。

npm install本身有一个别名，即npm i，可以使用这种缩写方式来运行命令，打到简化的效果。

以下为指定的一些命令行参数的缩写方式：

**-g**
 --global，缩写为-g，表示安装包时，视作全局的包。安装之后的包将位于系统预设的目录之下，一般来说



**-S**
 --save，缩写为-S，表示安装的包将写入package.json里面的dependencies。



**-D**
 --save-dev，缩写为-D，表示将安装的包将写入packege.json里面的devDependencies。



**-O**
 --save-optional缩写为-O，表示将安装的包将写入packege.json里面的optionalDependencies。



**-E**
 --save-exact缩写为-E，表示安装的包的版本是精确指定的。



**-B**
 --save-bundle缩写为-B，表示将安装的包将写入packege.json里面的bundleDependencies。

