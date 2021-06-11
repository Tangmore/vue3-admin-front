<template>
<div>
  <form>
    <input type="text" v-model="newState.item.name">
    <input type="text" v-model="newState.item.age">
    <input type="submit" @click="addItem">
  </form>
  <ul>
    <li v-for="(item, index) in state.items" :key="item.name" @click="removeItem(index)">
      No.{{index}} - {{item.name}} - {{item.age}}
    </li>
  </ul>
</div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'App',
  setup() {
    let {state, removeItem} = originalData();
    let {newState, addItem} = newData(state);
    return {
      state,
      removeItem,
      newState,
      addItem
    };
  }
}
function originalData() {
  let state = reactive({
    items: [
      {
        name: 'GuanYu',
        age: '56'
      },
      {
        name: 'ZhangFei',
        age: '54'
      },
      {
        name: 'MaChao',
        age: '77'
      }
    ]
  });
  function removeItem(i) {
    state.items = state.items.filter((currentValue, index) => index != i);
  }
  return {
    state,
    removeItem
  };
}

function newData(state) {
  let newState = reactive({
    item: {
      name: '',
      age: ''
    }
  });
  function addItem(e) {
    e.preventDefault();
    state.items.push(Object.assign({}, newState.item));
    console.log(Object.assign({}, newState.item)) //转换Proxy-Object
    newState.item.name = '';
    newState.item.age = '';
  }
  return {
    newState,
    addItem
  };
}
</script>