<template>
  <a-table
      :columns="columns"
      :dataSource="dataSource">
      <template #action="{record}">
        <span>　 
          <a @click="handleEdit(record.key)">编辑</a>
          <a @click="handleEdit(record.key)">删除</a>
        </span>
      </template>
</a-table>
</template>
<script>
const dataSource = [
  {
    key: '1',
    name: 'John', 
    age: '12',
    addr:'深圳市'
  }, 
  {
    key: '2',
    name: 'Tom', 
    age: '22',
    addr:'重庆市'
  }, 
   
];
const columns = [
    {
      title: 'name',
      dataIndex: 'name',　　// dataIndex的值对应的是，列数据在数据项中对应的 key      　 
      key: 'name',　 
      align: 'left' 
    },
    {
      title: 'age',
      dataIndex: 'age',　　// dataIndex的值对应的是，列数据在数据项中对应的 key      
      key: 'age',　 
      align: 'left' 
    },
    {
      title: '操作',　　　 
      key: 'action',
      dataIndex: 'action',
      slots: { customRender: 'action' },    //这一行自定义渲染这一列
      align: 'center',
      fixed:'right'
    }
 ]

export default {

    setup(){
      return{
        dataSource,
        columns
      }
    }
};
</script>
