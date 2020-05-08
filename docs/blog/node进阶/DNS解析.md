# `DNS `解析

#### 什么是`DNS `解析？

首先，当我们访问，某一个地址的时候，例如`www.baidu.com` ，但是我们也知道，服务器是不识别这个的，他识别的只是`127.0.0.1` 这些`ip`,  所以，从`www.baidu.com`解析对应的`ip`地址，就是`DNS`的解析。

#### 如何解析`DNS`？

1. 浏览器`DNS`缓存

   - 当我们访问一个`URL`的时候，优先会访问浏览器的`DNS`缓存，如果找到了就回返回，如果找不到，就会进行下一步的寻找。

2. 系统（`os`）缓存

   - 如果浏览器里面并没有找到对应的`DNS`缓存，那么就回去操作系统中去找有没有对应的`ip`地址。位于操作系统的`hosts`文件

     - `windows:   C:/windows/system32/drivers/etc/hosts`

       ```javascript
       # Copyright (c) 1993-2009 Microsoft Corp.
       #
       # This is a sample HOSTS file used by Microsoft TCP/IP for Windows.
       #
       # This file contains the mappings of IP addresses to host names. Each
       # entry should be kept on an individual line. The IP address should
       # be placed in the first column followed by the corresponding host name.
       # The IP address and the host name should be separated by at least one
       # space.
       #
       # Additionally, comments (such as these) may be inserted on individual
       # lines or following the machine name denoted by a '#' symbol.
       #
       # For example:
       #
       #      102.54.94.97     rhino.acme.com          # source server
       #       38.25.63.10     x.acme.com              # x client host
       
       # localhost name resolution is handled within DNS itself.
       #	127.0.0.1       localhost
       #	::1             localhost
       #              127.0.0.1     xmind.net
       #              127.0.0.1     www.xmind.net
       
       ```

       

     - `mac: /private/ect/hosts`

     - `ubunto: /ect/hosts`



3.   路由器缓存

   - 当 **浏览器 `DNS `缓存** 与 **系统（OS）缓存** 均无映射，则请求会发送到路由器缓存中检查

4. `ISP DNS `缓存

   - `ISP `为互联网服务提供商，目前我国有三大基础运营商：中国电信、中国移动和中国联通，在以上的三种情况下均找不到域名对应 `IP `地址，就会进行到这一步 `IPS `的 `DNS `缓存查找。

     举个例子，假设你用的中国联通服务提供商，则会进入联通的 `DNS` 缓存服务器中查找。

   

   

   

   

   

   

   

   

   

   

   

   

   

   

   

   

   

   

   

   

   

   

   

   