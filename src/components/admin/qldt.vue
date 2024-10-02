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
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="fas fa-user fa-fw"></i>
            </a>
            <ul class="dropdown-menu dropdown-menu-end">
              <li><a class="dropdown-item" href="#">Settings</a></li>
              <li><a class="dropdown-item" href="#">Activity Log</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><router-link to="login" class="dropdown-item" href="#">Logout</router-link></li>
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
  
        <main id="layoutSidenav_content">
          <div class="container-fluid px-4">
            <h1 class="mt-2">Quản lý doanh thu theo tháng</h1>
  
            <div class="row">
              <div class="col-2">
                <div class="row">
                  <select v-model="selectedMonth" class="form-select">
                    <option value="">Chọn tháng</option>
                    <option v-for="month in months" :key="month" :value="month">{{ month }}</option>
                  </select>
                </div>
                <div class="row mt-2">
                  <select v-model="selectedYear" class="form-select">
                    <option value="">Chọn năm</option>
                    <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
                  </select>
                </div>
              </div>
  
              <div class="col-2 mt-2">
                <button @click="fetchStatistics" type="button" class="btn btn-success">Thống kê</button>
              </div>
            </div>
  
            <div class="row mt-2">
              <table class="table table-bordered border-dark mt-3">
                <thead>
                  <tr>
                    <th scope="col">Ngày</th>
                    <th scope="col">Tên món</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col">Tổng thu</th>
                    <th scope="col">Tổng chi</th>
                    <th scope="col">Doanh thu thực tế</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in statistics" :key="item.id">
                    <th scope="row">{{ item.day }}</th>
                    <td>{{ item.productName }}</td>
                    <td>{{ item.quantity }}</td>
                    <td>{{ item.totalRevenue }}</td>
                    <td>{{ item.totalCost }}</td>
                    <td>{{ item.actualRevenue }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
  
            <div class="row mt-3">
              <div class="col-2">
                <h6>Tổng doanh thu:</h6>
              </div>
              <div class="col-2">
                <input v-model="totalRevenue" type="text" readonly class="form-control" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name:'qkdt-page',
    data() {
      return {
        months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        years: [2023, 2022, 2021, 2020],
        selectedMonth: '',
        selectedYear: '',
        statistics: [],
        totalRevenue: '',
      };
    },
    methods: {
      toggleSidebar() {
      },
      fetchStatistics() {
        this.statistics = [
          { id: 1, day: 20, productName: 'Cà phê sữa', quantity: 1, totalRevenue: '18.000đ', totalCost: '5.000đ', actualRevenue: '13.000đ' },
        ];
        this.totalRevenue = '13.000đ'; 
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  