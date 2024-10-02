<template>
    <headerView></headerView>
    <div class="contact-page">
      <div class="contact-header">
        <h1>Liên Hệ Chúng Tôi</h1>
        <p>Chúng tôi rất vui lòng được hỗ trợ bạn. Hãy gửi tin nhắn cho chúng tôi!</p>
      </div>
  
      <div class="contact-content">
        <div class="contact-form">
          <h2>Gửi Tin Nhắn</h2>
          <form @submit.prevent="handleSubmit">
            <div class="input-group">
              <label for="name">Tên của bạn</label>
              <input v-model="form.name" type="text" id="name" placeholder="Nhập tên của bạn" required />
            </div>
  
            <div class="input-group">
              <label for="email">Email</label>
              <input v-model="form.email" type="email" id="email" placeholder="Nhập email của bạn" required />
            </div>
  
            <div class="input-group">
              <label for="phone">Số điện thoại</label>
              <input v-model="form.phone" type="tel" id="phone" placeholder="Nhập số điện thoại" />
            </div>
  
            <div class="input-group">
              <label for="message">Tin nhắn</label>
              <textarea v-model="form.message" id="message" placeholder="Nhập tin nhắn của bạn" rows="5" required></textarea>
            </div>
  
            <div class="input-group">
              <button type="submit" class="submit-button">Gửi tin nhắn</button>
            </div>
          </form>
        </div>
  
        <div class="contact-info">
          <h2>Thông Tin Liên Hệ</h2>
          <ul>
            <li><strong>Địa chỉ:</strong> 123 Đường ABC, Quận XYZ, Thành phố Đà Nẵng</li>
            <li><strong>Email:</strong> support@example.com</li>
            <li><strong>Số điện thoại:</strong> 0123-456-789</li>
          </ul>
  
          <div class="social-links">
            <h3>Kết Nối Với Chúng Tôi</h3>
            <a href="#" class="social-button facebook">Facebook</a>
            <a href="#" class="social-button twitter">Twitter</a>
            <a href="#" class="social-button instagram">Instagram</a>
            <a href="#" class="social-button linkedin">LinkedIn</a>
          </div>
  
          <div class="map-container">
            <h3>Bản Đồ</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509444!2d144.95373531549036!3d-37.81627937975179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577e288e642d99e!2zVmljdG9yaWEgQmFycmFjaywgU291dGggVGVycmFjZSBTdGFkaXVtLCBNZWxib3VybmUsIFZJQyAyMDAwLCBBdXN0cmFsaWE!5e0!3m2!1sen!2s!4v1633072003325!5m2!1sen!2s"
              width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import headerView from './headerView.vue';
  export default {
    name: 'contact-view',
    components: {
      headerView
    },
    data() {
      return {
        form: {
          name: "",
          email: "",
          phone: "",
          message: ""
        }
      };
    },
    methods: {
      handleSubmit() {
        alert(`Cảm ơn ${this.form.name}, chúng tôi đã nhận được tin nhắn của bạn!`);
        // Reset form
        this.form = {
          name: "",
          email: "",
          phone: "",
          message: ""
        };
      }
    }
  };
  </script>
  
  <style scoped>
  .contact-page {
    font-family: 'Arial', sans-serif;
    padding: 70px;
    background-color: #1a1a2e;
    color: #fff;
  }
  
  .contact-header {
    text-align: center;
    margin-bottom: 50px;
  }
  
  .contact-header h1 {
    font-size: 36px;
    color: #ffffff;
  }
  
  .contact-header p {
    font-size: 18px;
    color: #b8b8d4;
  }
  
  .contact-content {
    display: flex;
    justify-content: space-between;
    gap: 40px;
  }
  
  .contact-form, .contact-info {
    background-color: #0f3460;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
    flex: 1;
  }
  
  .contact-form h2, .contact-info h2 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #ffffff;
  }
  
  .input-group {
    margin-bottom: 20px;
  }
  
  .input-group label {
    display: block;
    font-size: 16px;
    margin-bottom: 5px;
    color: #ffcc29;
  }
  
  .input-group input, .input-group textarea {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #16213e;
    border-radius: 5px;
    background-color: #1a1a2e;
    color: #fff;
    transition: border-color 0.3s ease;
  }
  
  .input-group input:focus, .input-group textarea:focus {
    border-color: #ffcc29;
  }
  
  .submit-button {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    background-color: #ffcc29;
    color: #1a1a2e;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .submit-button:hover {
    background-color: #ffd86a;
  }
  
  .contact-info ul {
    list-style-type: none;
    padding: 0;
  }
  
  .contact-info ul li {
    margin-bottom: 10px;
    font-size: 16px;
    color: #b8b8d4;
  }
  
  .contact-info ul li strong {
    color: #ffcc29;
  }
  
  .social-links {
    margin-top: 30px;
  }
  
  .social-links h3 {
    font-size: 18px;
    margin-bottom: 15px;
    color: #ffcc29;
  }
  
  .social-button {
    display: inline-block;
    margin-right: 10px;
    padding: 8px 12px;
    background-color: #ffcc29;
    color: #1a1a2e;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }
  
  .social-button:hover {
    background-color: #ffd86a;
  }
  
  .map-container {
    margin-top: 30px;
  }
  
  .map-container h3 {
    font-size: 18px;
    margin-bottom: 15px;
    color: #ffcc29;
  }
  
  iframe {
    border-radius: 10px;
    border: 2px solid #ffcc29;
  }
  </style>
  