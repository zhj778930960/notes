# 手写new的过程

new 运算符**创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。 ——（来自于MDN）**

1.  new 创建的实例有以下两个目的

   - 访问到构造函数里的属性
   - 访问到原型的属性

2. 模拟实现过程  也就是 new Foo(...)  的过程

   - 一个继承自Foo.prototype的新对象被创建；就是说，我们需要一个新的对象，然后把这个新对象的原型指向构造函数的原型
   - 使用指定的参数调用构造函数Foo, 并将this绑定到新创建的对象。new  Foo等同于  new Foo(),  也就是说没有指定参数列表，Foo不带任何参数调用的情况
   - 由构造函数返回的对象，也就是new 表达式的结果，如果构造函数没有返回一个对象则使用步骤1创建的对象

   ```javascript
   // 逻辑过程   要明白 new 最后返回的是一个对象，这样你才能以对象的方式访问其中的属性
   1. 先创建一个对象  new Object();
   2. 将要new 的外面的构造函数 传进来， 然后获取到这个构造函数
   3. 将 新对象的prototype 指向 获取到的构造函数的prototype上
   4. 最后将构造函数的this 指向 新建的对象
   5. 将对象return
   
   
   
   
   // 第一版
   function create(){
       // 创建一个空对象 这个其实就是实例对象
       var obj = new Object();
       // 获得构造函数，argumengts中除去第一个参数  因为第一个 参数是要实例的函数  就是拿到构造函数
       Con = [].shift.call(arguments);
       // 链接到原型，obj可以访问到构造函数中的属性  把实例对象的原型指向构造函数的原型
       obj.__proto__ = Con.prototype;
       // 绑定this  实现继承， 最后将构造函数的this  指向obj
       Con.apply(obj, arguments);
       
       return obj
   }
   ```

3.  构造函数返回值有如下三种情况：

   - 情况1: 构造函数，内部有return方法，返回了一个对象， 只能访问到对象中的属性，访问不到构造函数中的属性

     ```javascript
     function Car(color, name){
         this.color = color;
         // 但是这里有return 一个对象, 这样导致我们拿到的 访问的时候，访问不到color属性，只能访问到name
         return {
             name: name
         }
     }
     ```

   - 情况2：构造函数， 内部有return 方法，返回的不是对象类型,  那么就只能访问到构造函数中的属性

     ```javascript
     function Car(color, name){
         this.color = color;
         return "fajkf"
     }
     ```

   - 情况3： 构造函数，没有return, 返回undefined,  只能访问到**构造函数中的属**

     ```javascript
     function Car(color, name) {
         this.color = color;
     }
     ```

   

   4.  最终版

      ```javascript
      // 讲最终版之前 说一下Object.create()
      //1 生成一个新对象， 这个对象很干净，没有prototype 是一个完全的空对象
      // null 没有原型，所以 对象a 也就没有原型
       var a =  Object.create(null); 
      
      
      // 2 根据obj对象创建一个新对象， 会直接指向obj的原型上
        var obj ={
            name: "123",
            age: 123
        }
        var b = Object.create(obj); // 对象b的原型直接指向了obj.原型
        b.prototype  === obj.prototype  // true
      
      
      
      // 最终版 就用到Object.create();
      
      function create(){
          
          // 1. 先获取到传进来的构造函数
          Con = [].shift.call(arguments); // 数组的shift方法 截取, 原数组第一个值去除，改变原数组
        
          // 2. 创建一个对象，并且将这个对象的原型指向，构造函数的原型
          var obj = Object.create(Con.prototype);\
          
          // 3. 将构造函数的this 指向obj 对象 完成实例的创建, 并且，传入剩余的参数
          // 此时的arguments 已经是没有了第一个 参数的参数集合,arguments 是个数组，所以用apply
          // 需要判断，构造函数的返回，因为有三种返回情况
          var ret = Con.apply(obj, arguments);
          
          //4. 判断构造函数返回的是不是一个对象，如果不是，直接把obj返回，只需要拿到prototype的属性就可以了， 如果是一个对象，那么就返回ret ,既可以访问到构造函数的属性，也可访问到prototype的属性
          return ret instanceof Objcet ? ret : obj;
          
      }
         
      ```

      

   

