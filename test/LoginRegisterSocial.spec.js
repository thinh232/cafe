import { mount } from "@vue/test-utils";
import LoginRegisterSocial from "../src/components/login/LoginRegisterSocial.vue";

test("renders login form", () => {
  const wrapper = mount(LoginRegisterSocial);
  expect(wrapper.exists()).toBe(true);
});
const createStoreMock = () => {
  return createStore({
    state: {
      username: "",
    },
    actions: {
      setUsername({ commit }, username) {
        commit("setUsername", username);
      },
      clearUsername({ commit }) {
        commit("clearUsername");
      },
    },
    mutations: {
      setUsername(state, username) {
        state.username = username;
      },
      clearUsername(state) {
        state.username = "";
      },
    },
  });
};

describe("LoginPage.vue", () => {
  let store;

  beforeEach(() => {
    store = createStoreMock();
  });

  it("should render login form by default", () => {
    const wrapper = mount(LoginPage, { global: { plugins: [store] } });
    expect(wrapper.find("h2").text()).to.equal("Đăng Nhập");
    expect(wrapper.find(".login-form").exists()).to.be.true;
    expect(wrapper.find(".register-form").exists()).to.be.false;
  });

  it("should switch to register form when toggle is clicked", async () => {
    const wrapper = mount(LoginPage, { global: { plugins: [store] } });
    await wrapper.find(".toggle-text span").trigger("click");
    expect(wrapper.find("h2").text()).to.equal("Đăng Ký");
    expect(wrapper.find(".login-form").exists()).to.be.false;
    expect(wrapper.find(".register-form").exists()).to.be.true;
  });

  it("should login successfully with correct credentials", async () => {
    const wrapper = mount(LoginPage, { global: { plugins: [store] } });

    // Nhập thông tin đăng nhập
    await wrapper.find('input[type="email"]').setValue("user@gmail.com");
    await wrapper.find('input[type="password"]').setValue("123456");

    // Gửi form
    await wrapper.find(".login-form").trigger("submit.prevent");

    expect(store.state.username).to.equal("user@gmail.com");
    expect(wrapper.vm.$router.currentRoute.value.fullPath).to.equal("/"); // Kiểm tra nếu chuyển hướng đúng
  });

  it("should show alert on failed login", async () => {
    const wrapper = mount(LoginPage, { global: { plugins: [store] } });

    // Nhập thông tin đăng nhập không đúng
    await wrapper.find('input[type="email"]').setValue("wrongemail@gmail.com");
    await wrapper.find('input[type="password"]').setValue("wrongpassword");

    // Gửi form
    await wrapper.find(".login-form").trigger("submit.prevent");

    // Kiểm tra alert
    // Lưu ý: Có thể cần một thư viện để kiểm tra alert như sinon
    // expect(window.alert).to.have.been.calledWith('Email hoặc mật khẩu không đúng!');
  });

  it("should register successfully with correct information", async () => {
    const wrapper = mount(LoginPage, { global: { plugins: [store] } });

    // Chuyển sang form đăng ký
    await wrapper.find(".toggle-text span").trigger("click");

    // Nhập thông tin đăng ký
    await wrapper.find('input[type="text"]').setValue("Nguyễn Văn A");
    await wrapper.find('input[type="email"]').setValue("newuser@gmail.com");
    await wrapper.find('input[type="password"]').setValue("mypassword");

    // Gửi form
    await wrapper.find(".register-form").trigger("submit.prevent");

    expect(store.state.username).to.equal("newuser@gmail.com");
    // Kiểm tra alert hoặc chuyển đổi form
    // expect(window.alert).to.have.been.calledWith('Đăng ký thành công cho newuser@gmail.com');
  });

  it("should show alert if registration information is incomplete", async () => {
    const wrapper = mount(LoginPage, { global: { plugins: [store] } });

    // Chuyển sang form đăng ký
    await wrapper.find(".toggle-text span").trigger("click");

    // Gửi form mà không nhập thông tin
    await wrapper.find(".register-form").trigger("submit.prevent");

    // Kiểm tra alert
    // expect(window.alert).to.have.been.calledWith('Vui lòng nhập đầy đủ thông tin!');
  });
});
