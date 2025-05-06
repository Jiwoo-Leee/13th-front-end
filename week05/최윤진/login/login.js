const loginId = document.getElementById("login-id");
const password = document.getElementById("password");
const loginBtn = document.getElementById("login-btn");

const color = () => {
  if (
    loginId.value.length > 0 &&
    loginId.value.indexOf("@") !== -1 &&
    password.value.length > 5
  ) {
    loginBtn.style.backgroundColor = "#E67800";
    loginBtn.disabled = false;
  } else {
    loginBtn.style.backgroundColor = "#F5F5F5";
    loginBtn.disabled = true;
  }
};

loginId.addEventListener("keyup", color);
password.addEventListener("keyup", color);

// GPT
const popup = document.getElementById("login-popup");
const loginSection = document.getElementById("login-section");
const confirmBtn = document.getElementById("confirm-btn");

// 로그인 버튼 클릭 시 팝업 띄우기
loginBtn.addEventListener("click", () => {
  // 로그인 조건 충족 시에만 팝업 띄움 (여기선 단순 시뮬레이션)
  loginSection.style.display = "block"; // 힌트에 따라 flex → block
  popup.style.display = "flex"; // 팝업창 block → flex
});

// 확인 버튼 클릭 시 다시 로그인 화면으로
confirmBtn.addEventListener("click", () => {
  loginSection.style.display = "flex"; // 로그인 화면 block → flex
  popup.style.display = "none"; // 팝업창 flex → none
});
// 확인 버튼 클릭 시 다시 로그인 화면으로
confirmBtn.addEventListener("click", () => {
  loginSection.style.display = "flex"; // 로그인 화면 보이기
  popup.style.display = "none"; // 팝업 숨기기

  // 👉 아이디, 비밀번호 초기화
  loginId.value = "";
  password.value = "";

  // 👉 로그인 버튼 색상 초기화
  loginBtn.style.backgroundColor = "#F5F5F5";
  loginBtn.disabled = true;
});
