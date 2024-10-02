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
            <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown">
              <i class="fas fa-user fa-fw"></i>
            </a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Settings</a></li>
              <li><a class="dropdown-item" href="#">Activity Log</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><router-link to="login" class="dropdown-item" href="#">Logout</router-link></li>
            </ul>
          </li>
        </ul>
      </nav>
  
      <!-- Sidebar -->
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
  
        <!-- Main content -->
        <div id="layoutSidenav_content">
          <main>
            <div class="container-fluid px-4">
              <div class="row">
                <!-- Search Form -->
                <div class="col-2 mt-3">
                  <form @submit.prevent="searchProduct">
                    <div class="mb-3">
                      <label class="form-label">Mã sản phẩm</label>
                      <input type="text" class="form-control" v-model="productCode" placeholder="Nhập vào mã sản phẩm" />
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Tên sản phẩm</label>
                      <input type="text" class="form-control" v-model="productName" placeholder="Nhập vào tên sản phẩm" />
                    </div>
                    <div class="row">
                      <div class="col-6">
                        <button type="submit" class="btn btn-outline-success">Tìm kiếm</button>
                      </div>
                      <div class="col-6">
                        <button type="reset" class="btn btn-outline-danger">Hủy</button>
                      </div>
                    </div>
                  </form>
                </div>
  
                <!-- Product Table -->
                <div class="col-10">
                  <table class="table table-bordered border-dark mt-3">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Mã sản phẩm</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(product, index) in products" :key="index">
                        <td>{{ index + 1 }}</td>
                        <td>{{ product.code }}</td>
                        <td>{{ product.name }}</td>
                        <td>{{ product.price }}</td>
                        <td class="text-center">
                          <button class="btn btn-outline-success" @click="editProduct(index)">Edit</button>
                          <button class="btn btn-outline-danger" @click="deleteProduct(index)">Delete</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </main>
          <!-- Footer -->
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
    name:"quanlisanpham-page",
    data() {
      return {
        productCode: '',
        productName: '',
        products: [
          { code: 'Cafe01', name: 'Cafe đen', price: '22.000đ' },
          { code: 'Cafe02', name: 'Cafe Latte', price: '22.000đ' }
        ]
      };
    },
    methods: {
      toggleSidebar() {
        // Logic to toggle sidebar
      },
      searchProduct() {
        // Logic for searching a product
        console.log('Searching for', this.productCode, this.productName);
      },
      editProduct(index) {
        // Logic for editing a product
        console.log('Edit product at index', index);
      },
      deleteProduct(index) {
        // Logic for deleting a product
        console.log('Delete product at index', index);
      }
    }
  };
  </script>
  
  <style scoped>
@import url(styles.css);
  </style>
  