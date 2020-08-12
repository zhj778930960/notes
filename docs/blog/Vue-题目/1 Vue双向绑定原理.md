# Vue 双向绑定原理

1.  核心： Object.defineProperty()

   ```javascript
   Object.defineProperty(obj, key, descriptor);  
   
   // 接收三个参数
   1. obj: 要劫持的对象，可以是一个变量，或者直接是一个对象
   2. key: 要给对象添加的属性
   3. descriptor： 描述符， 其实就是一些固定的属性，都有固定的作用
      属性列表：
            1. configurable： 默认值为false, 当为true时, 此时这个属性，才可以被修改，或者被删除
            2. enumerable: 可枚举，默认为false, 当为true时， 像 for  in  或者 Object.keys 方法才能够访问到这个属性
            3. value: 可选属性， 该属性对应的值，可以是任何有效的值
            4. writable: 可选属性， 默认为false, 当为true时，上面的value值，才可以被赋值运算符改变
   
   4. 基本用法
     Object.defineProperty({}, "name", {
         value: "",
         configurable: false,
         enumerable: false,
         writable: false
     })
   ```

2. Vue 使用的是数据劫持的方式 Observer- Watcher - Complier

   - 实现Observer

     ```javascript
     // Observer 就是为了将所有的对象内的属性 转换为getter 和 setter 的方法
     
     // 先定义一个将 对象属性，都转换成 getter 和 setter 的方法 这个只能转换单个
     
     // 所以需要类来，循环生成
     function defineReactive(data, key, val){
         // 如果值还是一个对象，那么递归去继续遍历
         if(typeof val === "object"){
             new Obsever(val);
         }
         
         // 先定义一个Dep 类  这里改造一下函数，收集和通知依赖
         let dep = new Dep();
         
         Object.defineProperty(data, key {
            enumerable: true,
            configurable: true,
            get: function() {
               // 收集依赖
               dep.depend();
               return val
            },
            set: function(newVal) {
               if(val === newVal) return;   
                 val = newVal
                  // 通知依赖
                 dep.notify()
             }
         })
     }
     
     // 上面的方式 只能侦测到数据中的某一个属性，我们希望检测到所有的属性，所以封装一个Obsever类
     
     class Observer {
         constructor(value) {
             this.value = value;
             // 不是数组的情况下去生成getter 和 setter
             if(!Array.isArray(value)){
                 this.walk(value);
             }
             if(Array.isArray(value)){
                 value.__proto__ = arrProto; // 在下面
              }
         }
         
         // 这个方法只有是对象的时候才能被使用，数组不可以
         walk(){
             const keys = Object.keys(obj);
             keys.forEach(item => {
                 defineReactive(obj, item, obj.item)
             })
         }
     }
     
     
     
     
     
     // 如何收集依赖呢？？ 也就是当属性值改变的时候，需要通知的地方
       1. 收集依赖肯定是要在getter 里面
       2. 触发依赖，是要在setter 里面
       3. 实现， 利用类的方式，在defineReactive new 一个类，然后在getter 和 setter 里收集和触发
       
       class  Dep {
           contructor(){
               this.subs = [];
           }
           // 收集依赖
           addSub (sub){
               this.subs.push(sub);
           }
           
           // remove 去除收集的依赖
           removeSub(sub){
               this.subs.forEach((item, index) => {
                   if(item === sub){
                       this.subs.splice(index, 1);
                   }
               })
           }
           // 获取对象， 执行添加依赖的函数
           depend() {
               if(window.target){
                   this.addSub(window.target)
               }
           }
           
           // 通知依赖，有变化
           notify(){
               this.subs.forEach(sub => {
                   sub.update();
               })
           }
       }
     ```

   -  实现watcher

     ```javascript
     //  我们本身可以通知到所有的使用者 可是为啥要使用一个watcher 专门去通知呢？？？？
     // 这是因为，使用者 使用的方式可能有很多，有可能是模板，是用户写的watch等，所以，我们将在使用者和收集通知者 之间 加一个观察者，专门处理不的东西
     
     // 收集者/通知 Observer   ------- 通知给 观察者watcher --------- 观察者 通知给使用者complier
     
     
     class  Watcher {
         constructor(vm, expOrFn, cb) {
             this.vm = vm;
             // expOrFn 可能还是一个嵌套的对象，如果我想拿到更深层次的属性，就需要继续遍历
             this.getter = parsePath(expOrFn);
             this.cb = cb;
             this.value = this.get();
         }
         
         get(){
             window.target = this;
             let value = this.getter.call(this.vm, this.vm);
             window.target = undefined;
             return value
         }
         
         update(){
             const oldValue = this.value;
             this.value = this.get();
             this.cb.call(this.vm, this.value, oldvalue)
         }
     }
     
     
     const bailRE = /[^\w.$]/
     function parsePath(path){
         if(bailRE.test(path)){
             return 
         }
          const segments = path.split('.');
         return function(obj){
             for (let i = 0, i < segements.length; i++){
                 if (!obj) return;
                 obj = obj[segments[i]]; 
             }
             return obj
         }
     }
     
     
     
     ```

3. 问题

   - Object.defineProperty 无法检测，更深层次的数据的添加和删除， 提供了this.$set 和 this.$delete 来解决
   - 对于数组的监控，上面的方式是没有办法实现的，需要进行劫持

4. 如何解决数组的侦测 （待完善）

   ```javascript
   // 利用数组的Array.prototype 原型上的方法
   // 创建一个新对象 将对象的方法指向数组的原型, 创建的新对象不影响原型
   
   const arrayPrototype = Array.prototype;
   const arrProto = Object.create(arrayPrototype);
   
   // 然后对这个新对象，扩展一些新的方法，例如push, prop 等
   
   ['push', 'pop', 'shift', 'unshift', 'splice'].forEach(item => {
       arrProto[item] = function(){
           // 这个对像上的方法，一是要触发视图更新
           // 二是要利用Array.prototype 原型上的方法 去处理数据
           
           updateView();
           arrayPrototype[item].call(this, ...argments);
       }
   })
   ```

   