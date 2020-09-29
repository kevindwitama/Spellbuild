let errorMsg = document.getElementById("errorMsg");

function validate() {
    if (checkName() == false) {
        return;
    } else if (checkEmail() == false) {
        return;
    } else if (checkUser() == false) {
        return;
    } else if (checkPass() == false) {
        return;
    } else if (confirmPass() == false) {
        return;
    } else if (checkGender() == false) {
        return;
    } else if (checkQty() == false) {
        return;
    } else if (checkAddress() == false) {
        return;
    } else if (checkAgreement() == false) {
        return;
    } else {
        errorMsg.innerHTML = "";
        alert("Submit Success!")
    }
    resetForm();
}

function checkName() {
    name = document.getElementById("inputName").value;
    if (name.length == 0) {
        errorMsg.innerHTML = "Name must be filled!";
        return false;
    }

    let containsSymbol = false;

    for (let i = 0; i < name.length; i++) {
        let checkChar = name.charCodeAt(i);
        if (checkChar != 32) {
            if (checkChar <= 64 || checkChar >= 91 && checkChar <= 96 || checkChar >= 123) {
                containsSymbol = true;
            }
        }
    }

    if (containsSymbol == true) {
        errorMsg.innerHTML = "Name must be alphabetical only!";
        return false;
    } else if (containsSymbol == false) {
        errorMsg.innerHTML = "";
        return true;
    }
}

function checkEmail() {
    email = document.getElementById("inputEmail").value;
    if (email.length == 0) {
        errorMsg.innerHTML = "Email must be filled!";
        return false;
    }

    containsSymbol = false;

    for (let i = 0; i < email.length; i++) {
        checkChar = email.charCodeAt(i);
        if (checkChar != 64 && checkChar != 46) {
            if (checkChar < 48 || checkChar > 57 && checkChar < 64 || checkChar > 122) {
                containsSymbol = true;
            }
        }
    }

    if (containsSymbol == true) {
        errorMsg.innerHTML = "Email cannot contain symbols other than &apos;&commat;&apos; and &apos;&#46;&apos;!";
        return false;
    } else if (!email.includes("@") || !email.includes(".")) {
        errorMsg.innerHTML = "Email must contain &apos;&commat;&apos; and &apos;&#46;&apos; symbols!";
        return false;
    } else if (email.includes("@.") || email.includes(".@")) {
        errorMsg.innerHTML = "&apos;&commat;&apos; and &apos;&#46;&apos; symbols cannot be side by side in email!";
        return false;
    } else {
        errorMsg.innerHTML = "";
        return true;
    }
}

function checkUser() {
    user = document.getElementById("inputUser").value;
    if (user.length == 0 || user.length < 6) {
        errorMsg.innerHTML = "Username must be greater than 6 characters!";
        return false;
    } else if (user.includes(" ")) {
        errorMsg.innerHTML = "Username cannot contain space character!";
        return false;
    } else {
        errorMsg.innerHTML = "";
        return true;
    }
}

function checkPass() {
    pass = document.getElementById("inputPass").value;
    if (pass.length < 8) {
        errorMsg.innerHTML = "Password must be greater than 8 characters!";
        return false;
    }

    let containsNum = false;
    let containsAlpha = false;

    for (let i = 0; i < pass.length; i++) {
        checkChar = pass.charCodeAt(i);
        if (checkChar > 47 && checkChar < 58) {
            containsNum = true;
        } else if (checkChar > 64 && checkChar < 91 || checkChar > 96 && checkChar < 123) {
            containsAlpha = true;
        }
    }

    if (!containsNum || !containsAlpha) {
        errorMsg.innerHTML = "Password must be alphanumeric!";
        return false;
    } else {
        errorMsg.innerHTML = "";
        return true;
    }
}

function confirmPass() {
    pass = document.getElementById("inputPass").value;
    passCopy = document.getElementById("inputPassConf").value;
    if (passCopy != pass) {
        errorMsg.innerHTML = "Passwords do not match!";
        return false;
    } else {
        errorMsg.innerHTML = "";
        return true;
    }
}

function checkGender() {
    let genderF = document.getElementById("radioF");
    let genderM = document.getElementById("radioM");
    let genderO = document.getElementById("radioO");

    if (!genderF.checked && !genderM.checked && !genderO.checked) {
        errorMsg.innerHTML = "Gender must be selected!";
        return false;
    } else {
        errorMsg.innerHTML = "";
        return true
    }
}

function checkQty() {
    qty = document.getElementById("inputQty").value;
    if (qty == 0) {
        errorMsg.innerHTML = "Quantity must be filled&#47;greater than 0!";
        return false;
    } else {
        errorMsg.innerHTML = "";
        return true;
    }
}

function checkAddress() {
    address = document.getElementById("inputAddress").value;
    if (!address.endsWith(" Street")) {
        errorMsg.innerHTML = "Address must end with &apos; Street!&apos;";
        return false;
    } else {
        errorMsg.innerHTML = "";
        return true;
    }
}

function checkAgreement() {
    if (!document.getElementById("inputAgree").checked) {
        errorMsg.innerHTML = "User Agreement must be checked!";
        return false;
    } else {
        errorMsg.innerHTML = "";
        return true;
    }
}

function resetForm() {
    document.getElementById("inputName").value = "";
    document.getElementById("inputEmail").value = "";
    document.getElementById("inputUser").value = "";
    document.getElementById("inputPass").value = "";
    document.getElementById("inputPassConf").value = "";
    document.getElementById("radioF").checked = false;
    document.getElementById("radioM").checked = false;
    document.getElementById("radioO").checked = false;
    document.getElementById("inputQty").value = "";
    document.getElementById("inputAddress").value = "";
    document.getElementById("inputAgree").checked = false;
    errorMsg.innerHTML = "Form reset!";
}