# keep-alive

1. 缓存组件
2. 频繁切换， 不需要重复渲染
3. Vue常见性能优化

```javascript
<template>
    <div>
      <keep-alive>
        // include 缓存哪些组件 先会寻找组件的name  如果不可用就去找 component中的key值
         <router-view :include='['a', 'b']'></router-view>

        // exclude 不缓存哪些组件 先会寻找组件的name  如果不可用就去找 component中的key值
         <router-view :exclude='['a', 'b']'></router-view>

        // 
      </keep-alive>
    </div>
</template>

<scripte scoped>
    export default {
         data(){
             return {
                 
             }
         }
    }
</script>
```

- include 缓存某些组件

  ```javascript
  <template>
      <div>
        <keep-alive>
          // include 缓存哪些组件 先会寻找组件的name  如果不可用就去找 component中的key值
           <router-view :include='['a', 'b']'></router-view>
        </keep-alive>
      </div>
  </template>
  
  <scripte scoped>
      export default {
           data(){
               return {
                   
               }
           }
      }
  </script>
  ```

- exclude 不缓存某些组件

  ```javascript
  <template>
      <div>
        <keep-alive>
          // exclude 不缓存哪些组件 先会寻找组件的name  如果不可用就去找 component中的key值
           <router-view :exclude='['a', 'b']'></router-view>
        </keep-alive>
      </div>
  </template>
  
  <scripte scoped>
      export default {
           data(){
               return {
                   
               }
           }
      }
  </script>
  ```

- max 最大的缓存个数

  ```javascript
  <template>
      <div>
       <keep-alive :max="10">
          //最多可以缓存多少组件实例。一旦这个数字达到了，在新实例被创建之前，已缓存组件中最久没有被访问的实例会被销毁掉。
          // <keep-alive> 不会在函数式组件中正常工作，因为它们没有缓存实例。
           <component :is="view"></component>
       </keep-alive>
      </div>
  </template>
  
  <scripte scoped>
      export default {
           data(){
               return {
                  isView: "" 
               }
           }
      }
  </script>
  ```

  

