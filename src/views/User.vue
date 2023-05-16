<template>
  <div class="user_box">
    <!-- Form -->
    <el-button type="primary" @click="dialogFormVisible = true" size="small">+ 新增</el-button>

    <el-dialog title="新增用户" :visible.sync="dialogFormVisible" width="50%">
      <el-form :model="form" :inline="true" :label-position="labelPosition" :rules="rules"  ref="form">
        <el-form-item label="姓名" :label-width="formLabelWidth"  prop="name">
          <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="年龄" :label-width="formLabelWidth"  prop="age">
          <el-input v-model="form.age" placeholder="请输入年龄"></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth"   prop="sex">
          <el-select v-model="form.sex" placeholder="请选择性别">
            <el-option label="男" value="1"></el-option>
            <el-option label="女" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="出生日期" :label-width="formLabelWidth"   prop="birth">
          <el-date-picker v-model="form.birth" type="date" placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="地址" :label-width="formLabelWidth"   prop="address">
          <el-input v-model="form.address" placeholder="请输入地址" type="textarea" :rows="3"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <!-- <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button> -->
        <el-button type="primary" @click="submitForm()">确 定</el-button>
        
      </div>
    </el-dialog>
  </div>
</template>


<script>
export default {
  data() {
    return {
      labelPosition: 'right',
      dialogFormVisible: false,
      form: {
        name: '',
        age: '',
        sex: '',
        birth: '',
        address: ''
      },
      formLabelWidth: '120px',
      rules: {
        name: [{required: true,message: '请输入姓名'}],
        age: [{required: true,message: '请输入年龄'}],
        sex: [{required: true,message: '请选择性别'}],
        birth: [{required: true,message: '请选择日期'}],
        address: [{required: true,message: '请输入地址'}]
      }
    };
  },
  methods: {
    submitForm(){
      // this.dialogFormVisible = false;
      // alert("ttt")
      this.$refs.form.validate ( (valid)=> {
        console.log('表单是否通过',valid)
        if(valid){

        }
      })
      // this.$refs[form].validate( (valid)=> {
      //   console.log('validvalidvalidvalidvalidvalid',valid)
      // })
    }
  }
};
</script>


<style scoped lang="less">
.user_box {

  /deep/.el-form-item__content,
  /deep/.el-select,
  /deep/.el-input {
    width: 240px;
  }
}
</style>