<template>
  <div class="auth-page">
    <button @click="goBack" class="back-button">← Quay lại</button> <!-- Nút quay lại -->
    <div class="auth-container">
      <div class="auth-forms">
        <!-- Form Đăng Nhập -->
        <form v-if="isLogin" @submit.prevent="handleLogin" class="form login-form">
          <h2>Đăng Nhập</h2>
          <div class="input-group">
            <label for="email">Email:</label>
            <input type="email" v-model="loginEmail" placeholder="Nhập email" required />
          </div>
          <div class="input-group">
            <label for="password">Mật khẩu:</label>
            <input type="password" v-model="loginPassword" placeholder="Nhập mật khẩu" required />
          </div>
          <button type="submit" class="auth-button">Đăng Nhập</button>
          <p class="toggle-text">
            Chưa có tài khoản?
            <span @click="toggleForm">Đăng ký ngay</span>
          </p>
          <div class="social-login">
            <button class="google-btn" @click="socialLogin('Google')">
              <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" />
              Đăng nhập bằng Google
            </button>
            <button class="facebook-btn" @click="socialLogin('Facebook')">
              <img src="https://img.icons8.com/color/16/000000/facebook-new.png" alt="Facebook" />
              Đăng nhập bằng Facebook
            </button>
          </div>
        </form>

        <!-- Form Đăng Ký -->
        <form v-else @submit.prevent="handleRegister" class="form register-form">
          <h2>Đăng Ký</h2>
          <div class="input-group">
            <label for="name">Tên đầy đủ:</label>
            <input type="text" v-model="registerName" placeholder="Nhập tên đầy đủ" required />
          </div>
          <div class="input-group">
            <label for="email">Email:</label>
            <input type="email" v-model="registerEmail" placeholder="Nhập email" required />
          </div>
          <div class="input-group">
            <label for="password">Mật khẩu:</label>
            <input type="password" v-model="registerPassword" placeholder="Nhập mật khẩu" required />
          </div>
          <button type="submit" class="auth-button">Đăng Ký</button>
          <p class="toggle-text">
            Đã có tài khoản?
            <span @click="toggleForm">Đăng nhập</span>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  name: 'login-page',
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
  data() {
    return {
      isLogin: true,
      loginEmail: '',
      loginPassword: '',
      registerName: '',
      registerEmail: '',
      registerPassword: '',
    };
  },
  methods: {
    ...mapActions(['setUsername', 'clearUsername']),
    toggleForm() {
      this.isLogin = !this.isLogin;
    },
    handleLogin() {
      if (this.loginEmail === 'user@gmail.com' && this.loginPassword === '123456') {
        this.setUsername('user@gmail.com');
        alert('Đăng nhập thành công!');
        this.$router.push('/');
      } else if (this.loginEmail === 'admin@gmail.com' && this.loginPassword === '123456') {
        alert('Đăng nhập thành công!');
        this.$router.push('/quanlysanpham');
      } else {
        alert('Email hoặc mật khẩu không đúng!');
      }
    },
    handleRegister() {
      if (this.registerName && this.registerEmail && this.registerPassword) {
        this.setUsername(this.registerEmail);
        alert(`Đăng ký thành công cho ${this.registerEmail}`);
        this.toggleForm();
      } else {
        alert('Vui lòng nhập đầy đủ thông tin!');
      }
    },
    socialLogin(platform) {
      alert(`Đăng nhập bằng ${platform} (Chức năng này sẽ được tích hợp với API thực)`);
    },
    goBack() {
      this.$router.back(); // Quay lại trang trước đó
    },
  },
};
</script>
<style scoped>
body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(135deg, #76b852, #8DC26F);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
}

.auth-page {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.back-button {
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: #8DC26F;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 30px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.back-button:hover {
  background-color: #76b852;
}

.auth-container {
  background: white;
  padding: 60px;
  border-radius: 15px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
  width: 400px;
  text-align: center;
  position: relative;
}

.auth-forms {
  position: relative;
}

.form {
  opacity: 0;
  position: absolute;
  width: 100%;
  transition: opacity 0.3s ease-in-out;
}

.form.login-form {
  opacity: 1;
  position: relative;
}

h2 {
  font-size: 28px;
  color: #333;
  margin-bottom: 30px;
}

.input-group {
  margin-bottom: 20px;
}

.input-group label {
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
  display: block;
}

.input-group input {
  width: 100%;
  padding: 12px;
  border: 2px solid #ddd;
  border-radius: 25px;
  font-size: 16px;
  outline: none;
  transition: border 0.3s ease;
}

.input-group input:focus {
  border-color: #76b852;
  box-shadow: 0px 0px 5px rgba(118, 184, 82, 0.5);
}

.auth-button {
  width: 100%;
  padding: 12px;
  border-radius: 25px;
  background: linear-gradient(135deg, #76b852, #8DC26F);
  color: white;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.auth-button:hover {
  background: linear-gradient(135deg, #8DC26F, #76b852);
}

.social-login {
  margin-top: 20px;
}

.google-btn, .facebook-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px;
  border-radius: 25px;
  margin-top: 10px;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.3s ease;
  border: none;
  font-weight: bold;
}

.google-btn {
  background-color: #db4a39;
  color: white;
}

.google-btn:hover {
  background-color: #c1392b;
}

.facebook-btn {
  background-color: #4267B2;
  color: white;
}

.facebook-btn:hover {
  background-color: #365899;
}

.toggle-text {
  margin-top: 15px;
  color: #555;
  font-size: 14px;
}

.toggle-text span {
  color: #76b852;
  cursor: pointer;
  font-weight: bold;
  transition: color 0.3s;
}

.toggle-text span:hover {
  color: #8DC26F;
}
</style>
