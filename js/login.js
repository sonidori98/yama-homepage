function handleLogin() {
    const correctUsername = "admin";
    const correctPassword = "sisiyusidokeisekki";

    const enteredUsername = document.getElementById("username").value;
    const enteredPassword = document.getElementById("password").value;
    const rememberMeCheckbox = document.getElementById("remember-me");

    if (enteredUsername === correctUsername && enteredPassword == correctPassword) {
        if (rememberMeCheckbox.checked) {
            setCookie("rememberedUsername", enteredUsername, 7);
        } else {
            deleteCookie("rememberedUsername");
        }
        window.location.href = "admin.html";
    } else {
        alert("ユーザー名またはパスワードが間違っています");
    }
}

window.onload = function() {
    const rememberedUsername = getCookie("rememberedUsername");
    if (rememberedUsername) {
        document.getElementById("username").value = rememberedUsername;
        document.getElementById("remember-me").checked = true;
    }

    const registerLink = document.getElementById("register-link");
    const forgotPassword = document.getElementById("forgot-password");

    if (registerLink) {
        registerLink.addEventListener("click", function(event) {
            event.preventDefault();
            alert("そんな機能はない");
        });
    }

    if (forgotPassword) {
        forgotPassword.addEventListener("click", function(event) {
            event.preventDefault();
            alert("頑張って探してね");
        });
    }
}

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function deleteCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}
