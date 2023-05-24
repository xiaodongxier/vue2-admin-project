<template>
  <div class="user_box">
    <!-- Form -->
    <!-- 新增/搜索 -->
    <div class="user_header">
      <el-button type="primary" @click="handleBtnClickFrom" size="small">+ 新增</el-button>
      <div class="search_wrap">
        <el-form :model="userSerach" :inline="true">
          <el-form-item>
            <el-input v-model="userSerach.name" placeholder="请输入内容" size="small"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="small" @click="btnClickSerach">搜索</el-button>
          </el-form-item>
        </el-form>
        <!-- form搜索区域 -->
        <!-- <el-form :inline="true" :model="userSerach">
          <el-form-item>
            <el-input placeholder="请输入名称" v-model="userSerach.name"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="btnClickSerach">查询</el-button>
          </el-form-item>
        </el-form> -->

        <!-- 
        <el-form :inline="true" :model="userForm">
                <el-form-item>
                    <el-input placeholder="请输入名称" v-model="userForm.name"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-form> -->
      </div>
    </div>

    <!-- 新增弹窗表单 -->
    <el-dialog :title="userTitle" :visible.sync="dialogFormVisible" width="50%" :before-close="handleClose"
      class="add_table">
      <el-form :model="form" :inline="true" :label-position="labelPosition" :rules="rules" ref="form">
        <el-form-item label="姓名" :label-width="formLabelWidth" prop="name">
          <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="年龄" :label-width="formLabelWidth" prop="age">
          <el-input v-model="form.age" placeholder="请输入年龄"></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth" prop="sex">
          <el-select v-model="form.sex" placeholder="请选择性别">
            <el-option label="男" :value="1"></el-option>
            <el-option label="女" :value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="出生日期" :label-width="formLabelWidth" prop="birth">
          <el-date-picker v-model="form.birth" type="date" placeholder="选择日期" value-format="yyyy-MM-dd">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="地址" :label-width="formLabelWidth" prop="addr">
          <el-input v-model="form.addr" placeholder="请输入地址" type="textarea" :rows="3" maxlength="1000"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel('form')">取 消</el-button>
        <!-- <el-button @click="cancel('form')">取 消</el-button> -->
        <el-button type="primary" @click="submitForm">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 列表渲染 -->
    <el-table :data="tableData" style="width: 100%" height="90%">
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="age" label="年龄" width="180"></el-table-column>
      <el-table-column prop="sex" label="性别" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.sex == '0' ? '女' : '男' }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="birth" label="出生日期" width="180"></el-table-column>
      <el-table-column prop="addr" label="地址"></el-table-column>
      <el-table-column prop="addr" label="操作">
        <template slot-scope="scope">
          <el-button @click="handleBtnEdit(scope.row)" size="mini">编辑</el-button>
          <el-button type="danger" @click="handleBtnDel(scope.row)" size="mini">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination background layout="prev, pager, next" :page-size="pageDate.limit" :total="total"
      @current-change="clickPages">
    </el-pagination>
  </div>
</template>


<script>
import { getUser, addUser, editUser, delUser } from '../api'
export default {
  data() {
    return {
      userTitle: '新增用户',
      labelPosition: 'right',
      dialogFormVisible: false,
      userSerach: {
        name: ''
      },
      form: {
        name: '',
        age: '',
        sex: '',
        birth: '',
        addr: ''
      },
      formLabelWidth: '120px',
      rules: {
        name: [{ required: true, message: '请输入姓名' }],
        age: [{ required: true, message: '请输入年龄' }],
        sex: [{ required: true, message: '请选择性别' }],
        birth: [{ required: true, message: '请选择日期' }],
        addr: [{ required: true, message: '请输入地址' }]
      },
      tableData: [
        // {
        //   name: '1',
        //   age: '',
        //   sex: '',
        //   birth: '',
        //   addr: ''
        // }
      ],
      // 0 新增，1编辑
      modelType: 0,
      total: 0,
      pageDate: {
        page: 1,
        limit: 10
      }
    };
  },
  methods: {
    // 新增add0 ，编辑1
    handleBtnClickFrom() {
      this.userTitle = '新增用户'
      this.dialogFormVisible = true
      this.modelType = 0
      // this.$refs.form.resetFields();
    },
    // 提交，确定
    submitForm() {
      // validate对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise
      this.$refs.form.validate((valid) => {
        console.log('表单是否通过', valid)
        // console.log('this.from', this.from)
        if (valid) {
          // 后续对表单数据的处理
          if (this.modelType === 0) {
            addUser(this.form).then(() => {
              // 重新获取列表的接口
              this.getList()
              this.$message({
                message: '新增成功',
                type: 'success'
              });
            })
          } else {
            editUser(this.form).then(() => {
              // 重新获取列表的接口
              this.getList()
              this.$message({
                message: '编辑成功',
                type: 'success'
              });
            })

          }
          // // 成功关闭弹窗,放在前面获取不到的
          // this.dialogFormVisible = false;
          // this.$refs.form.resetFields();
          this.handleClose()
        }
      })
    },
    // 感觉多余的一步
    handleClose() {
      this.dialogFormVisible = false;
      // this.$refs.form.resetFields();
      // this.$refs[form].resetFields();
      this.$refs['form'].resetFields();
      // 解决重置无效的问题
      // this.$data.form = JSON.parse(JSON.stringify(this.$options.data().form))
      // this.$data.form = 

    },
    // 取消的时候
    cancel() {
      this.handleClose()
      // this.form = {}
    },
    // 编辑
    handleBtnEdit(row) {
      this.userTitle = '编辑用户'
      // console.log("编辑", row)
      this.dialogFormVisible = true
      this.modelType = 1
      // 深拷贝
      // this.form = row
      // 处理清空不生效的问题
      this.$nextTick(() => {
        this.form = JSON.parse(JSON.stringify(row))
      })
    },
    // 删除
    handleBtnDel(row) {
      console.log("删除", row)
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        delUser({ id: row.id }).then(() => {
          this.getList()
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        })

      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    // handleAdd(){
    //   this.modelType = 0
    //   this.dialogFormVisible = true
    // },
    getList() {
      // getUser({ params: this.pageDate }).then((data) => {
      //   console.log(data.data)
      //   this.tableData = data.data.list
      //   this.total = data.data.count
      // })
      // 合并对象属性
      getUser({ params: { ...this.userSerach, ...this.pageDate } }).then(({ data }) => {
        // console.log("------------------------------------------", data.list)
        this.tableData = data.list

        this.total = data.count || 0
      })

    },
    // 切换页数
    clickPages(val) {
      this.pageDate.page = val
      console.log(val)
      this.getList()
      console.log("切换页码", val)
      console.log("切换页码", this.tableData)
    },
    btnClickSerach() {
      this.getList()
    }
  },
  mounted() {
    // getUser().then(function(data){
    //   console.log(data)
    // })
    // getUser().then((data) => {
    //   console.log(data.data.list)
    //   this.tableData = data.data.list
    // })
    this.getList()
  }
};
</script>


<style scoped lang="less">
.user_box {
  height: 90%;

  .user_header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .search_wrap .el-form-item {
      margin-bottom: 0;
    }

    .add_table {

      /deep/.el-form-item__content,
      /deep/.el-select,
      /deep/.el-input {
        width: 240px;
      }
    }
  }

}
</style>


<!-- 
提交时清空数据可能会拿不到数据，可以在打开弹窗时清空
// 重制表单
this.$refs.form.resetFields();
 -->

