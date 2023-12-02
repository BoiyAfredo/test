function loginUser() {
    // Add your login logic here
    // For now, let's simulate a successful login
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Add your actual login validation here
    if (username === "a" && password === "s") {
        // Hide login container
        document.getElementById("loginContainer").style.display = "none";
        // Show brand container
        document.getElementById("brandContainer").style.display = "block";
        return false; // Prevent form submission
    } else {
        alert("Login failed. Please check your credentials.");
        return false; // Prevent form submission
    }
}

function changePassword() {
    // Add your change password logic here
    // For now, let's simulate a successful password change
    var currentPassword = document.getElementById("currentPassword").value;
    var newPassword = document.getElementById("newPassword").value;

    // Add your actual password change validation here
    if (currentPassword === "s") {
        alert("Password changed successfully!");
        return false; // Prevent form submission
    } else {
        alert("Current password is incorrect. Please try again.");
        return false; // Prevent form submission
    }
}

// Mendefinisikan variabel global untuk menyimpan informasi harga
// Mendefinisikan variabel global untuk menyimpan informasi harga
var prices = {
    "Baju": 50,
    "Celana": 30,
    "Tas": 40,
    "Jas": 80,
    "Sepatu": 60
};

function processPayment() {
    var amountPaid = parseFloat(document.getElementById("amountPaid").value);

    // Mendapatkan item dari atribut data-item
    var item = document.getElementById("processPayment").getAttribute("data-item");

    // Mendapatkan total harga dari variabel global prices
    var totalPrice = prices[item];

    if (isNaN(amountPaid) || amountPaid < 0) {
        alert("Masukkan jumlah uang yang valid.");
    } else if (amountPaid < totalPrice) {
        alert("Uang yang dimasukkan tidak cukup.");
    } else {
        var change = amountPaid - totalPrice;

        if (change > 0) {
            alert("Pembayaran berhasil! Kembalian Anda: $" + change);
        } else {
            alert("Pembayaran berhasil!");
        }

        // Mengembalikan ke halaman brand setelah pembayaran selesai
        document.getElementById("paymentContainer").style.display = "none";
        document.getElementById("brandContainer").style.display = "block";
    }
}
function redirectToPaymentForm(item) {
    // Menyembunyikan kontainer brand
    document.getElementById("brandContainer").style.display = "none";

    // Menampilkan halaman pembayaran
    document.getElementById("paymentContainer").style.display = "block";

    // Menyiapkan detail pembayaran
    var paymentDetails = document.getElementById("paymentDetails");

    // Mendapatkan jumlah barang dari input
    var quantity = parseInt(document.getElementById("quantity").value);

    if (isNaN(quantity) || quantity <= 0) {
        alert("Masukkan jumlah barang yang valid.");
        return;
    }

    // Menghitung total harga berdasarkan item yang dibeli
    var totalPrice = quantity * prices[item];

    // Menampilkan detail pembayaran
    paymentDetails.innerHTML = "<p>Barang yang dibeli: " + item + "</p>" +
                              "<p>Jumlah Barang: " + quantity + "</p>" +
                              "<p>Total Harga: $" + totalPrice + "</p>";

    // Menambahkan atribut data-item ke tombol "Proses Pembayaran"
    var processButton = document.getElementById("processPayment");
    processButton.setAttribute("data-item", item);
}