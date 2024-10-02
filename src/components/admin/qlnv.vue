<template>
    <div class="sb-nav-fixed">
      <!-- Navbar -->
      <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <a class="navbar-brand ps-3" href="#">Quản lí quán cà phê</a>
        <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" @click="toggleSidebar">
          <i class="fas fa-bars"></i>
        </button>
        <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown"
              aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Settings</a></li>
              <li><a class="dropdown-item" href="#">Activity Log</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><router-link to="login" class="dropdown-item" href="#">Logout</router-link></li>
            </ul>
          </li>
        </ul>
      </nav>
  
      <!-- Sidebar and content -->
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
              <div class="row mt-3">
                <div class="col-4">
                  <button type="button" class="btn btn-success">Thêm nhân viên</button>
                </div>
                <div class="col-4">
                  <button type="button" class="btn btn-success">Xóa nhân viên</button>
                </div>
                <div class="col-4">
                  <button type="button" class="btn btn-success">Xem nhân viên</button>
                </div>
              </div>
              <table class="table table-bordered border-dark mt-3">
                <thead>
                  <tr>
                    <th scope="col">Tên nhân viên</th>
                    <th scope="col">Số ngày làm</th>
                    <th scope="col">Số ngày nghỉ</th>
                    <th scope="col">Tháng</th>
                    <th scope="col">Tiền lương</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Lê Bống</th>
                    <td>30</td>
                    <td>1</td>
                    <td>5</td>
                    <td class="text-center">3tr VND</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>
          <footer class="py-4 bg-light mt-auto">
            <div class="container-fluid px-4">
              <div class="d-flex align-items-center justify-content-between small">
                <div>
                  <a href="#">Privacy Policy</a> &middot; <a href="#">Terms & Conditions</a>
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
        // Sidebar toggle logic can be implemented here
      }
    }
  };
  </script>
  
  <style scoped>
  @import url("https://cdn.jsdelivr.net/npm/simple-datatables@7.1.2/dist/style.min.css");
  @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css");
  </style>
  