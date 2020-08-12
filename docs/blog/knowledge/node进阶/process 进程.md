# process 进程

**首先要明白，进程和线程的关系**

- 进程是根据`cpu`的处理能力来看， 可以产生多个进程，负责处理不同的任务。
- 线程是进程的子集，**一个进程可以有一个或者多个线程**
- 在单核 CPU 系统之上我们采用 `单进程 + 单线程` 的模式来开发
- 在多核 CPU 系统之上，可以用过 `child_process.fork` 开启多个进程（`Node.js` 在` v0.8` 版本之后新增了Cluster 来实现多进程架构，多个线程有各自的调用栈（call stack），自己的寄存器环境（register context），自己的线程本地存储（thread-local storage)

**注意：开启多进程不是为了解决高并发，主要是解决了单进程模式下 `Node.js CPU` 利用率不足的情况，充分利用多核 CPU 的性能。**



1.  process介绍

   ​        `Node.js` 中的进程 Process 是一个全局对象，无需 require 直接使用，给我们提供了当前进程中的相关信息

2. 常用的一些命令

    ```javascript
    1. process.env  环境变量， 例如通过process.env.NODE_ENV 可以获取环境项目配置信息。
    2. process.nextTick   其实跟vue的 this.$nextTick()方法内部机制有些类似，就是当前面所有的时间执行完成之后。
    3. process.pid   当前进程的id
    4. process.ppid   当前进程对应的父进程的id
    5. process.cwd()   获取当前进程的工作目录
    6. process.platform 获取当前进行运行的操作系统平台
    7. process.uptime()  当前进程已运行时间， 例如pm2 守护进程的uptime值
    8. 进程事件 
        process.on("uncaughtException", cb) 捕获异信息
        process.on("exit", cb) 进程退出监听
    9. 三个标准流
        process.stdout 标准输出
        process.stdin  标准输入
        process.stderr 标准错误输出
        
        
        
        
   总结： 
    1. js是单线程的，但是作为宿主环境的nodejs并不是
    2. 由于单线程的缘故，一些复杂的，小号cpu的资源的一些任务不要交给nodejs进行处理，当你的业务需要大量计算，视频编码解码等cpu密集型的任务，可以使用其他的后端语言进行
    3. node.js 和 nginx 都是事件驱动方式，避免了多线程的线程创建，线程上下文切换的开销，如果你的业务大多数是基于I/O操作，那么你可以选择nodejs来开发。
   
   
    ```

   

   