<template>
    <el-form :model="form" label-width="auto" style="width: 100%">
        <el-input v-model="form.title" style="width: 240px" placeholder="Please input title" />
        <el-mention v-model="form.content" type="textarea" style="width: 320px" placeholder="Please input content" />
        <el-button type="primary" size="large" @click="onSubmit">create</el-button>
    </el-form>
    <el-table style="width: 100%" tooltip-effect="dark" :data="tableData" row-key="ID">
        <el-table-column align="left" label="標題" prop="title" width="120" />
        <el-table-column align="left" label="內容" prop="content" width="120" />
        <el-table-column align="left" label="作者" prop="userID" width="120" />
    </el-table>
</template>
<script setup>
import { reactive, ref } from 'vue'
import { getTestList, createTest } from '@/plugin/test/api/info'

defineOptions({ name: 'Test' })

const form = reactive({ title: '', content: '', userID: 0 })
const tableData = ref([])
const onSubmit = () => {
    createTest(form)
    getTableData()
}
const getTableData = () => getTestList().then(res => {
    tableData.value = res.data.list
})
getTableData()
</script>