# mixins 混入

1. 简介

   混入就是，定义一些与.vue文件JS 部分中，相同的参数，例如 data ,  methods等属性，和.vue 文件进行融合

   - 如果融合时，data 会以递归的方式进行融合，如果发生冲突的时候，以组件内部的data优先， 
   
     不光是data, 别的属性的融合，如果冲突，以组件的为准
   
   - 同名钩子函数将合并为一个数组，因此都将被调用。另外，混入对象的钩子将在组件自身钩子**之前**调用。
   
     先调用混入的钩子，后调用组件的钩子
   
2. 使用

   ```javascript
   // mixin.js
   export default {
       data(){
           reutrn {
               message: "123"
           }
       },
       methods: {
           getList(){
               ...
           }
       }
   }
       
       
   // 如何在组件中使用
     <template>
         <div></div>
     </template>
       
    <script>
       import mixin from "./mixin.js";
      export default {
        mixmins: [mixin],
         data(){
             return {
                 list: []
             }
         }
      }   
    </script>
   ```

   

