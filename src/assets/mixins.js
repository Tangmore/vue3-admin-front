// vue2.0
// export const mixinDemo2={
//      data(){
//          return{
//             num:1
//          }
//      },
//      methods:{
//          async func_one(){
//              let result=await new Promise((resolve,reject)=>{
//                  setTimeout(()=>{
//                      resolve(1)
//                  })
//              })
//              return result
//          }
//      }
     
// } 
// vue3.0
import { ref, computed } from "vue";

export default function () {
  const count1 = ref(0);
  const double = computed(() => count1 * 2)
  function increment() {
    count1.value++;
  }
  return {
    count1,
    double,
    increment
  }
} 