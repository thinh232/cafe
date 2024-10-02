<template>
    <div>
      <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <a class="navbar-brand ps-3" href="#">Quản lí quán cà phê</a>
        <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" @click="toggleSidebar">
          <i class="fas fa-bars"></i>
        </button>
        <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="fas fa-user fa-fw"></i>
            </a>
            <ul class="dropdown-menu dropdown-menu-end">
              <li><a class="dropdown-item" href="#!">Settings</a></li>
              <li><a class="dropdown-item" href="#!">Activity Log</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><router-link to="login" class="dropdown-item" href="#!">Logout</router-link></li>
            </ul>
          </li>
        </ul>
      </nav>
  
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <nav class="sb-sidenav accordion sb-sidenav-dark">
            <div class="sb-sidenav-menu">
              <div class="nav">
                <router-link to="quanlysanpham" class="nav-link mt-3">
                  <i class="fas fa-tachometer-alt"></i> Quản lý sản phẩm
                </router-link>
                <router-link to="quanlytaikhoan" class="nav-link mt-3">
                  <i class="fas fa-tachometer-alt"></i> Quản lý tài khoản
                </router-link>
                <router-link to="quanlynhanvien" class="nav-link mt-3">
                  <i class="fas fa-tachometer-alt"></i> Quản lý nhân viên
                </router-link>
                <router-link to="quanlydoanhthu" class="nav-link mt-3">
                  <i class="fas fa-tachometer-alt"></i> Quản lý doanh thu
                </router-link>
              </div>
            </div>
          </nav>
        </div>
  
        <div id="layoutSidenav_content">
          <main>
            <div class="container-fluid px-4">
              <div class="row mt-2">
                <h3>Quản lý tài khoản</h3>
              </div>
              <div class="row">
                <table class="table table-bordered border-dark mt-3">
                  <thead>
                    <tr>
                      <th scope="col">STT</th>
                      <th scope="col">Tên đăng nhập</th>
                      <th scope="col">Mật khẩu</th>
                      <th scope="col">Trạng thái</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>admin@gmail.com</td>
                      <td>123456</td>
                      <td class="text-center">
                        <button type="button" class="btn btn-success">Sửa</button>
                        <button type="button" class="btn btn-success">Xóa</button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">1</th>
                      <td>user@gmail.com</td>
                      <td>123456</td>
                      <td class="text-center">
                        <button type="button" class="btn btn-success">Sửa</button>
                        <button type="button" class="btn btn-success">Xóa</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </main>
          <footer class="py-4 bg-light mt-auto">
            <div class="container-fluid px-4">
              <div class="d-flex align-items-center justify-content-between small">
                <div>
                  <a href="#">Privacy Policy</a> &middot; <a href="#">Terms &amp; Conditions</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "AdminCoffeeShop",
    methods: {
      toggleSidebar() {
        // Add your sidebar toggle logic here
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  