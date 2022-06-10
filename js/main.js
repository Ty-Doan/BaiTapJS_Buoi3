document.addEventListener(
        "contextmenu",
        function(e) {
            e.preventDefault();
        }, !1
    ),
    (document.onkeydown = function(e) {
        return 123 != (e = e || window.event).keyCode && (!e.ctrlKey || !e.shiftKey || 73 != e.keyCode) && void 0;
    }),
    (document.getElementById("btnSalary").onclick = function() {
        var tienLuong1Ngay = Number(document.getElementById('inputNum1').value);
        var soNgayLamViec = Number(document.getElementById('inputNum2').value);
        var tongTienLuong = tienLuong1Ngay * soNgayLamViec;
        document.getElementById("txtSalary").innerHTML = Intl.NumberFormat().format(tongTienLuong);
    }),
    (document.getElementById("btnTB").onclick = function() {
        var number1 = +document.getElementById('num1').value;
        var number2 = +document.getElementById('num2').value;
        var number3 = +document.getElementById('num3').value;
        var number4 = +document.getElementById('num4').value;
        var number5 = +document.getElementById('num5').value;
        var trungBinh = 0;
        trungBinh = (number1 + number2 + number3 + number4 + number5) / 5;
        document.getElementById('txtTB').innerHTML = trungBinh;
    }),
    (document.getElementById("btnCurrency").onclick = function() {
        var tienUSD = document.getElementById('usd').value;
        var tienVND = tienUSD * 23500;
        document.getElementById('txtCurrency').innerHTML = tienVND.toLocaleString() + ' VND';
    }),
    (document.getElementById("btnCal").onclick = function() {
        var chieuDai = +document.getElementById('width').value;
        var chieuRong = +document.getElementById('height').value;
        var chuVi = (chieuDai + chieuRong) / 2;
        var dienTich = chieuDai * chieuRong;
        document.getElementById('txtCal1').innerHTML = 'Chu Vi là : ' + chuVi;
        document.getElementById('txtCal2').innerHTML = 'Diện tích là : ' + dienTich;
    }),
    (document.getElementById("btnSum").onclick = function() {
        var number = document.getElementById('number').value;
        var tongKySo = 0;
        var hangDonVi = number % 10;
        var hangChuc = Math.floor(number / 10);
        tongKySo = hangChuc + hangDonVi;
        document.getElementById('txtSum').innerHTML = tongKySo;
    });