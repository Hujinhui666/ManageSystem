<template>
  <div class="bac">
    <div class="login">
      <!-- 头部区域 -->
      <div class="loginHeader">
        <img src="../assets/touxiang.png" />
        <h2>后台管理系统</h2>
        <p>专业数字化管理与用户运营工具，提高知识付费转化率</p>
        <p>账号密码登录</p>
      </div>
      <!-- 登录框 -->
      <el-form ref="loginForm" :rules="rules" :model="ruleForm">
        <!-- 账号 -->
        <el-form-item prop="username">
          <el-input class="inputText" v-model="ruleForm.username" prefix-icon="el-icon-user-solid" placeholder="账号">
          </el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="pwd">
          <el-input v-model="ruleForm.pwd"
           class="inputText" prefix-icon="el-icon-lock"
            placeholder="密码" @keyup.enter.native="submitLogin"
            show-password></el-input>
        </el-form-item>
      </el-form>
      <!-- 底部区域 -->
      <div class="loginFooter">
        <el-checkbox>自动登录</el-checkbox>
        <el-link type="primary">忘记密码？</el-link>
      </div>
      <el-button type="primary" class="tijiao" @click="submitLogin">提交</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      ruleForm: {
        username: "",
        pwd: ""
      },

      // 表单校验
      rules: {
        username: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        pwd: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 16, message: "长度在 3 到 16 个字符", trigger: "blur" }
        ]
      }
    };
  },
  created() { },
  methods: {
    submitLogin() {
      // 获取表单对象
      this.$refs['loginForm'].validate((valid) => {
        // console.log("查看valid", valid);
        if (valid) {
          if (this.ruleForm.username === 'admin' && this.ruleForm.pwd === "123456") {
            this.$message({ showClose: true, message: '登陆成功', type: 'success' });
            // vuex
            this.$store.commit('SetUserName', this.ruleForm.username)
            this.$store.commit('SetPassword', this.ruleForm.pwd)
            // 跳
            this.$router.push({
              path: '/home',
              query: { username: this.ruleForm.username }
            })
          } else {
            this.$message({showClose: true, message: "登陆失败",type: 'error' });
          }

        }
      })




    }
  }
};
</script>

<style lang="less" scoped>
.bac {
  display: flex;
  height: 100%;
  background: url("@/assets/bsc.png") no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

.loginHeader {
  width: 100%;
  text-align: center;

  p {
    color: gray;
    font-size: 16px;
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-top: -50px;
  }
}

.login {
  width: 510px;
  height: 410px;
  border-radius: 5%;
  transform: rotateX(-25%);
  top: 25%;
  margin-left: 15%;
  position: absolute;
  /* background-color: pink; */
  box-shadow: 0 0px 5px 5px #ddd;
}

/* 底部区域1 */
.loginFooter {
  width: 100%;
  margin-top: 10px;
  margin: 5px;
  display: flex;
  justify-content: space-between;
}

.tijiao {
  // position: absolute;
  margin-top: 20px;
  width: 100%;
}

.inputText {
  font-size: 18px !important;
}
</style>