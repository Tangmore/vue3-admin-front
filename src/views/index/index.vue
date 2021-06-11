<!--  -->
<template>
  <div> 
     <span>{{state1}}</span>
     <span>{{state2}}</span>
     <span>{{state3}}</span>
     <!-- <span>{{obj5}}</span>
     <span>{{obj5.name}}</span> -->
     <span>{{count}}</span>
     <span>{{name}}</span>
     <!-- <span>{{obj2}}</span> -->
     <button @click="add()">加一</button>
     <button @click="handleClick()">测试reactive</button>
     <button @click="test()">测试reactive2</button>
     <button @click="testRef()">测试Ref</button>
   
     <span>{{dataCp}}</span>
      <!-- mixins -->
     <span>{{count1}}</span>  
     <button @click="increment()">按钮加一</button>
  </div>
</template>

<script> 
import { reactive, ref,onMounted, computed, watch, watchEffect, toRefs, toRaw, toRef } from "vue";
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
// import { mixinDemo2 } from '@/assets/mixins.js';   //vue2.0
import mixins from '@/assets/mixins.js';   //vue3.0
export default {
  // mixins:[mixinDemo2],//vue2.0
  setup() {
    const count=ref(9);
    const router=useRouter(), 
          store=useStore(),
          state=store.state;
    const add=()=>{
      count.value++;
      // router.push('/demo');
      console.log('1')
      console.log(state)
      console.log(router.currentRoute.value)
    } 
    const dataCp=computed(()=>{
      return count.value;
    })
    // vue2.0
    // mounted(){
    //   this.func_one.then(res=>{

    //   })
    // },

    const { count1, double, increment } = mixins();
 

    const watchS=watch(count,(value,old)=>{
        console.log('watch'+value,'watchS'+old)
    })
    const watchE=watchEffect(()=>{
        console.log('watchE'+count.value)
    })

    // const dataCp=computed({
    //   get(){return count.value;},
    //   set(value){
    //       count.value=value;
    //   },...
    // })
    

    onMounted(()=>{
       console.log(count.value)
    })
    const obj1=reactive({
      name:"测试",
      age:12,
      handleClick:()=>{
        obj1.name='测试响应';
      }
    })

     /*
    1.toRaw
    从Reactive 或 Ref中得到原始数据

    2.toRaw作用
    做一些不想被监听的事情(提升性能)
    * */
    let raw=toRaw(obj1);  

    function test(){
        // obj1.name='响应测试';
        raw.name="测试原数据不变"
    }

    // ref toRef  toRefs
    /**
     *   ref->复制   
     *   toRef->引用  创建一个ref类型数据, 并和以前的数据关联
     *   toRefs=> 批量创建ref类型数据, 并和以前数据关联
     */
    let obj5={name:'tom'};
    let state1=ref(obj5.name);
    let state2=toRef(obj5,'name');  //会同时更改obj5原始数据  但是不更新ui
    let state3=toRefs(obj5);  //会同时更改obj5原始数据  但是不更新ui   ???
   
    function testRef(){
      // state1.value='zs';
      // state2.value='zs';
      state3.name.value='zs';
      console.log(obj5)
      // console.log(state1.value)
      console.log(state2.value)
    }
     

     return {
       ...toRefs(obj1),   //可以将一个响应型对象(reactive object) 转化为普通对象(plain object)，同时又把该对象中的每一个属性转化成对应的响应式属性(ref)
       count,
       add,
       dataCp,
       watchS,
       watchE,
       test,
       obj5,
       state1,
       state2,
       state3,
       testRef,

       count1, 
       double, 
       increment,
    };
  }
};
</script>
<style lang="less" scoped>
.version-info {
  margin-top: 20px;
}
</style>