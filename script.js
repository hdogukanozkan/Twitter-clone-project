const mainPage = document.querySelector(".main-page");
const loginPage = document.querySelector(".login-page");
const middleContent = document.querySelector(".middle-content");
const btnTop = document.querySelector(".btn-top");
const newsFeedPage = document.querySelector(".feeds-page");
const loginModal = document.querySelector(".login-modal");
const loginClosed = document.querySelector(".fa-times");
const loginBtn = document.querySelector(".login-form-btn");
const postBtn = document.querySelector(".post-btn");
const modelWrapper = document.querySelector(".modal-wrapper");
const modal = document.querySelector(".modal");
const postModalX = document.querySelector(".modal-header i");
const modalPostBtn = document.querySelector(".modal-header button");
const modalFooterPlus = document.querySelector(".modal-footer span");
const modalInput = document.querySelector(".modal-input")
const user = document.querySelector(".user");
const sidebar = document.querySelector(".sidebar")
const sidebarWrapper = document.querySelector(".sidebar-wrapper")
const xBtn = document.querySelector(".sidebar-header i")
const toggle = document.querySelector(".toggle");
const circle = document.querySelector(".circle");

const goToLoginPage = () => {
    mainPage.style.display = "none";
    loginPage.style.display = "grid"
}

middleContent.addEventListener("click", e => {
    console.log(e.target.classList)
    if (e.target.classList[0] === "log-in" || e.target.classList[1] === "log-in") {
        goToLoginPage();
    }

});

btnTop.addEventListener("click", () => {
    const inputUserInfo = document.querySelector(".user-info");
    const inputPassword = document.querySelector(".password");

    if (inputUserInfo.value !== '' && inputPassword.value !== '') {
        mainPage.style.display = "none";
        newsFeedPage.style.display = "block"
    }
    else {
        goToLoginPage();
        loginModal.style.display = "block";
    }

});


loginClosed.addEventListener("click", () => {
    loginModal.style.display = "none";
})

loginBtn.addEventListener("click", () => {
    const input1 = document.querySelector(".user-info-login-input");
    const input2 = document.querySelector(".user-password-login-input");

    if (input1.value !== "" && input2.value !== "") {
        loginPage.style.display = "none";
        newsFeedPage.style.display = "block";

    }
    else {
        loginModal.style.display = "block"
    }
})


postBtn.addEventListener("click", () => {
    modal.style.display = "block";
    modelWrapper.classList.add("modal-wrapper-display");
})

const changeOpacity = (x) => {
    modalPostBtn.style.opacity = x;
    modalFooterPlus.style.opacity = x;
}

postModalX.addEventListener("click", () => {
    modal.style.display = "none";
    modelWrapper.classList.remove("modal-wrapper-display");

    if (modalInput.value !== "") {
        modalInput.value = "";
        changeOpacity(0.5)
    }
})

modalInput.addEventListener("keypress", (e) => {
    if (e.target.value !== "") {
        changeOpacity(1)
    }
})

modalInput.addEventListener("blur", (e) => {
    if (e.target.value === "") {
        changeOpacity(0.5)
    }
})

user.addEventListener("click", () => {
    sidebarWrapper.classList.add("sidebar-wrapper-display");
    sidebar.classList.add("sidebar-display");
})

xBtn.addEventListener("click", () =>{
    sidebar.classList.remove("sidebar-display");
    sidebarWrapper.classList.remove("sidebar-wrapper-display")
})





//dark mode
const darkElements1=document.querySelectorAll(".dark-mode-1");
const darkElements2=document.querySelectorAll(".dark-mode-2");

toggle.addEventListener("click", () =>{
    circle.classList.toggle("move");

    Array.from(darkElements1).map((darkEl1) => darkEl1.classList.toggle("dark-1"));
    Array.from(darkElements2).map((darkEl2) => darkEl2.classList.toggle("dark-2"));

})

