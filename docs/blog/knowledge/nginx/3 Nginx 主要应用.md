# ` Nginx` 主要应用

1. 主要应用的场景

   - 静态网站
   - 负载均衡
   - 静态代理
   - 动静分离
   - 虚拟主机
   - 高可用

2.  如何配置静态网站？

   ```javascript
   1. 可以自己先写一个静态的界面，或者网上下载一个ace admin 这么一个静态网站的代码下来也是可以的
   
   2. 配置nginx conf 中的 nginx.conf 文件中的 server 配置 
   
    配置静态网站 主要就是location 里面要找到对应的index.html 启动界面就可以了
   
      # location 是用于匹配路由的，这里的意思就是匹配 为 / 的路由， 因为你访问localhost:8080 的时候就会默认访问带 / 的路由
           # localhost:8080 就是 localhost:8080/ 的缩写显示
           # 这里就是匹配到 / 路由 然后做一个界面的展示  跟前端路的意思差不多
           location / {
               # 这里的root 就相当于 ip + port localhost:8080 = root = ip + port
               root  E:\ace; # root 是配置服务器的默认网站根目录位置，默认为nginx安装主目录下的html目录， 实际中我们要定位到项目的html目录中 例如打包好的dist目录中
               index  index.html index.htm; # 配置首页文件的名称 可省略 会自动去寻找文件夹下的index.html
           }
   ```

   

3. 如何配置负载均衡？

   ```javascript
    主要就是走http协议访问的负载均衡
    
    1. 什么是负载均衡？？？
      在网站创立的初期，我们一般都使用单台机器对外提供集中式服务；
      但是随着业务量的增大，我们一台服务器不够用，这个时候，我们就会把多台服务器组成一个集群对外提供服务；
      但是，我们网站对外提供的访问入口通常只有一个，比如www.xiangdeyizhang.xyz
      那么当用户在浏览器输入上面的这个网址的时候，如何将用户的请求分发到集群中不同的机器上呢？？，这就是负载均衡需要做的事情
      负载均衡通常是指将请求“均匀”分摊到集群的多个服务器节点上执行，这里的均匀是指在一个比较大的统计范围内基本是均匀的，并不是完全均匀。
      
      举例： 餐馆，原来只有一个厨师，没有服务员，当我们顾客去饭店点餐时，直接给厨师说就好了。
      但是随着，客户的越来越多，一个厨师忙不过来了，就多增加了几个厨师，但是每个厨师的工作量又可能多少不均匀，有的厨师忙一天，有的厨师都没活，而且客户也不需要每个厨师都打招呼，进行访问。
      这个时候，我们就加入了一个服务员，从中进行调配，尽量使得每个厨师都有活干，也尽量使每个人的活的多少都是差不多的。
      这个服务员，也就是我们要学的nginx的负载均衡，客户不用直接面对那么多厨师，直接面对服务员就可以了
      
      
     2. 负载均衡的实现方式？？  
        
        硬件负载均衡：
            F5，深信服，Array等
               优点： 有厂商专业的技术服务团队提供支持，性能稳定；
               缺点： 价格昂贵，对于较小的网络应用成本太高；
        软件负载均衡： 
            nginx, LVS, HAProxy等
               优点： 免费开源，成本低廉
               
     3. 如何配置？？？？？？
     
       两步即可：
         # 在conf 文件夹下 的ngxin.conf 文件中 的 http 配置中加入如下配置 不是在server下
         # 可以配置在 gzip  后面 server 之前
         
        第一步       
         # 有几个服务器就可以加几个 server ip+port 权重； 这种配置
          upstream  名称  {
               server ip+port 权重;
               server ip+port 权重;
          }    
        # 一般 名称可以随便起，只要是字符串就可以，一般我们使用的时候都是配成 域名 例如www.xiang.xyz
        
        # 权重 怎么配置 weight=3; 这种方式进行配置。 用于后端服务器性能不均的情况，访问比率约等于权重之比，权重越大，访问的机会就越多
        
        # upstream 是配置nginx 与后端服务器负载均衡非常重要的模块，并且它还能对后端的服务器的健康状态进行检查，若后端服务器的一台发生故障，则前端的请求不会转发到该故障的机器上
        
         # 配置负载均衡 权重策略
   
           upstream www.xiangdeyizhang.xyz {
                server 192.168.1.137:9555 weight=3;
                server 192.168.1.137:9554 weight=1;
                server 192.168.1.137:9553 weight=2;
           }
        
        第二步：
           # 做一个代理转发。 和静态界面那个一样，不过我们需要是做一个转发，将地址转发到要访问的界面
           # 这个是要配置到server 下
           location / {
               # proxy_paxx 后面跟的地址要和  upstream 后面跟的名称要是一样的
               # 例如： upstream abcde   那么 proxy_pass http://abcde
                proxy_pass http://www.xiangdeyizhang.com  
           }
        
               
     3. 常用的负载均衡策略
     
          轮询（默认）: # 不做任何配置，默认就是轮询策略。每个请求轮流分配到不同到的后端服务器，如果后端服务器down掉， 将自动剔除。
           upstream www.xiangdeyizhang.xyz {
                server 192.168.1.137:9555;
                server 192.168.1.137:9554;
                server 192.168.1.137:9553;
           }
      
          权重：# weight
           upstream www.xiangdeyizhang.xyz {
                server 192.168.1.137:9555 weight=3;
                server 192.168.1.137:9554 weight=1;
                server 192.168.1.137:9553 weight=2;
           }
      
          ip_hash: # ip绑定策略， 每个请求安访问ip的hash值分配， 这样每个访问客户端会固定访问一个后端服务器， 可以解决会话session丢失的问题。
          # 也就是说，固定ip 访问固定的后端服务器
          # hash(ip) % 服务器个数 ------- 取余 
          # 用余数来判断，这个ip 固定访问那个服务器
            upstream www.xiangdeyizhang.xyz {
                ip_hash;
                server 192.168.1.137:9555;
                server 192.168.1.137:9554;
                server 192.168.1.137:9553;
           }
   
   
           最少连接：# least_conn; web请求会被转发到连接数最少的服务器上
           upstream www.xiangdeyizhang.xyz {
                least_conn;
                server 192.168.1.137:9555;
                server 192.168.1.137:9554;
                server 192.168.1.137:9553;
           }
   
   
   
   4. 负载均衡的其他几个配置
       ①：# backup 备份， 只有当其他机器都关闭的时候，才会访问这个备份的服务器
        upstream www.xiangdeyizhang.xyz {
            server 192.168.1.137:9555;
            server 192.168.1.137:9554;
            server 192.168.1.137:9553 backup;
        }
   
       ②：# down 表示关闭，当前的服务器是down状态，不参与负载均衡  这个不是说是这个机器坏掉了，只是表示这个服务器是down状态，也是正常运行的状态，只是就不参与负载均衡了
        upstream www.xiangdeyizhang.xyz {
            server 192.168.1.137:9555;
            server 192.168.1.137:9554;
            server 192.168.1.137:9553 down;
        }
       
   ```

   

4. 静态代理

   ```javascript
   1. 什么是静态处理？？
     把所有静态资源的访问，原先是去访问服务器，现在改为访问nginx,  因为nginx更擅长于静态资源的处理，性能更好，效率更高
     所以在实际项目中，我们把静态资源，比如图片，css,html,js 等交给nginx处理，而不是交由服务器处理
     # 就是将静态资源放置到nginx 下，
     
   2. 如何实现静态代理？？
      # 通过在nginx.conf文件  server下进行配置即可
      
      方式一： # 配置 location 基于文件的后缀进行匹配
      
        location ~ .*\.(js|css|html|gif|jpg|png|jpeg|rar|zip|txt|mid|doc|docx|pdf)$ {
             root E:\static
        }
   
         #  ~ 代表 正则匹配，即~后面的内容可以使正则表达式
         #  . 第一个 . 表示任意字符
         #  * 表示一个或者多个字符
         #  \. 表示转义字符，是后面这个点的转义字符
         #  | 表示或者
         #  $ 表示结尾
       整体表示就 任意字符开头， 以后面后缀结尾的文件，都去下面的这个地址进行获取和访问
   
             
       方式二： # 还是location  但是这次是基于访问路由进行的匹配 
              # xxx/ccs  xxx/js  xxx/img xxx/images
       
          location ~ .*/(css|js|img|images) {
              root E:\public
          }
            
             
         
   ```

   

5. 动静分离（重点）

   ```javascript
   1.  什么是动静分离？？？
       # 就是负载均衡 和 静态代理 结合在一起
       动态资源： 如jsp， 接口数据 由服务器或其他web服务器完成
       静态资源： 如图片， js, css， 前端代码 由nginx服务器完成
       
   2. 如何进行动静分离配置？？
       
      #  我们将静态文件放置到nginx上, 将nginx.conf 文件复制多份，起不同名字 所以我们可以配置多个静态资源服务器，然后在配置一个负载均衡服务器
       -  nginx.conf  负载均衡
       -  nginx81.conf  静态资源
       -  nginx82.conf  静态资源
      
      # 即： 后端服务器 + nginx服务器 （多个静态服务器 和 一个负载均衡）
      
      # 启动的时候 就要根据不同的.conf 文件 单独去启动
      
      
   3. 如何配置负载均衡？？？
      
       动态资源的负载均衡
         
       # 配置负载均衡 权重策略
   
       upstream www.xiangdeyizhang.xyz {
            server 192.168.1.137:9555 weight=3;
            server 192.168.1.137:9554 weight=1;
            server 192.168.1.137:9553 weight=2;
       }
   
       静态资源的负载均衡
      
       # 配置负载均衡
   
       upstream static {
            server 192.168.1.137:81 weight=3;
            server 192.168.1.137:82 weight=1;
       }
   
   
       ### 配置路由拦截
       
       动态负载均衡路由拦截
        location / {
             proxy_pass http://www.xiangdeyizhang.xyz;
        }
   
       静态负载均衡路由拦截
       
       # 配置静态代理  匹配路由是否包含某个片段  xxx/ccs  xxx/js  xxx/img xxx/images
        location ~ .*/(css|js|img|images) {
               proxy_pass http://static;
        } 
   
   
   ```



6. 虚拟主机 （用的不是特别多）

   ```javascript
   1. 什么是虚拟主机？？
      # 就是把一台物理服务器划分成多个 “虚拟” 的服务器， 这样一台物理服务器就可以当做多个服务器来使用，从而可以配置多个网站
      
      # nginx 提供虚拟主机的功能，就是为了让我们不需要安装多个nginx, 就可以运行多个网站
      
      # nginx下 nginx.conf 中一个 server标签 就是一个虚拟主机
      
      # 其实就是每个server都有一个listen 端口，来区分不同的网站， 还有就是server_name 域名不同
   2. 如何配置虚拟主机？？
       方式一： # 基于域名的虚拟主机  端口号相同，域名不同
         server {
           listen       80;  # 配置监听端口号  范围为 0 - 65535
           server_name  www.gogle.com; # 配置服务名  localhost 表示任何ip都是可以进行访问的
         }
   
         server {
           listen       80;  # 配置监听端口号  范围为 0 - 65535
           server_name  www.baidu.com; # 配置服务名  localhost 表示任何ip都是可以进行访问的
         }
   
       方式二： # 基于端口的虚拟主机  端口号不同，域名相同
         server {
           listen       90;  # 配置监听端口号  范围为 0 - 65535
           server_name  www.baidu.com; # 配置服务名  localhost 表示任何ip都是可以进行访问的
         }
   
         server {
           listen       80;  # 配置监听端口号  范围为 0 - 65535
           server_name  www.baidu.com; # 配置服务名  localhost 表示任何ip都是可以进行访问的
         }
   
       方式三： # 端口号  和 域名  都不一样
        
       server {
           listen       90;  # 配置监听端口号  范围为 0 - 65535
           server_name  www.gogle.com; # 配置服务名  localhost 表示任何ip都是可以进行访问的
         }
   
         server {
           listen       80;  # 配置监听端口号  范围为 0 - 65535
           server_name  www.baidu.com; # 配置服务名  localhost 表示任何ip都是可以进行访问的
         }
   
       
   ```




7. 高可用

   ```javascript
   1. 什么是高可用？？
      当我有一个nginx 反向代理进行转发，但是nginx宕机了怎么办？？
      那nginx 就不能转发了
      
      高可用就是，有多个nginx 反向代理服务器， 其中一个宕机了，会立马切换到另外一个nginx 反向代理服务器
      
   2. 怎么配置呢？？
       
       准备工作：
         （1） 需要两台服务器 例如： 192.168.1.137 和 192.168.1.150
         （2） 两台服务器都需要安装nginx
         （3） 两台服务器都需要安装keepalived   
   ```

   