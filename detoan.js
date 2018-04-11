var h = 1; // Giờ
var m = 30; // Phút
var s = 0; // Giây
var timeout = null; // Timeout

function batdau() {
    /* Cho phép chọn đáp án khi nhấn bắt đầu*/
    for (i = 1; i <= socau; i++) {
        var el = document.getElementById('cau' + i);
        var all = el.getElementsByTagName('input');
        var inp, j = 0;
        while (inp = all[j++]) {
            inp.disabled = false;
        }
    }
    start();
    document.getElementById('btnstart').disabled = true;
    document.getElementById('btnnopbai').disabled = false;
}

function start() {
    /* CHUYỂN ĐỔI DỮ LIỆU*/
    // Nếu số giây = -1 tức là đã chạy ngược hết số giây, lúc này:
    //  - giảm số phút xuống 1 đơn vị
    //  - thiết lập số giây lại 59
    if (s === -1) {
        m -= 1;
        s = 59;
    }

    // Nếu số phút = -1 tức là đã chạy ngược hết số phút, lúc này:
    //  - giảm số giờ xuống 1 đơn vị
    //  - thiết lập số phút lại 59
    if (m === -1) {
        h -= 1;
        m = 59;
    }

    // Nếu số giờ = -1 tức là đã hết giờ, lúc này:
    //  - Dừng chương trình
    if (h == -1) {
        clearTimeout(timeout);
        for (i = 1; i <= socau; i++) {
            /*HIỂN THỊ KẾT QUẢ ĐÚNG MÀU ĐỎ VÀ*/
            document.getElementById("c" + i + dapan[i]).style.color = "red";
            var el = document.getElementById('cau' + i);
            var all = el.getElementsByTagName('input');
            var inp, j = 0;
            while (inp = all[j++]) {
               // KHÔNG CHO PHÉP NHẬP TIẾP
                inp.disabled = true;
            }
            /*HIỂN THỊ ĐIỂM*/
            document.getElementById('diem').innerText = diem;
        }
        return false;
    }

    /*HIỂN THỊ ĐỒNG HỒ*/

      document.getElementById('h').innerText = h.toString();
      document.getElementById('m').innerText = m.toString();
      document.getElementById('s').innerText = s.toString();


    /*  GIẢM PHÚT XUỐNG 1 GIÂY VÀ GỌI LẠI SAU 1 GIÂY */
    timeout = setTimeout(function () {
        s--;
        start();
    }, 1000);
}

function stop() {
    /*Kiểm tra xem đã điền hiết các câu hỏi chưa*/
    if (!chamDiem()) return false;

    /*Cho thời gian về 0 để start() sử dụng*/
    h = 0;
    m = 0;
    s = 0;
    /*HIỂN THỊ ĐỒNG HỒ*/
    document.getElementById('h').innerText = h.toString();
    document.getElementById('m').innerText = m.toString();
    document.getElementById('s').innerText = s.toString();
    // alert('Hết giờ');
    // return false;

}

/*Danh sách các câu trả lời*/
var socau = 50;
var dapan = new Array();
dapan[1] = "A";
dapan[2] = "D";
dapan[3] = "D";
dapan[4] = "A";
dapan[5] = "C";
dapan[6] = "A";
dapan[7] = "D";
dapan[8] = "B";
dapan[9] = "C";
dapan[10] = "C";
dapan[11] = "C";
dapan[12] = "D";
dapan[13] = "C";
dapan[14] = "B";
dapan[15] = "D";
dapan[16] = "D";
dapan[17] = "A";
dapan[18] = "D";
dapan[19] = "D";
dapan[20] = "D";
dapan[21] = "A";
dapan[22] = "B";
dapan[23] = "C";
dapan[24] = "A";
dapan[25] = "D";
dapan[26] = "C";
dapan[27] = "B";
dapan[28] = "D";
dapan[29] = "A";
dapan[30] = "C";
dapan[31] = "B";
dapan[32] = "A";
dapan[33] = "C";
dapan[34] = "A";
dapan[35] = "A";
dapan[36] = "C";
dapan[37] = "D";
dapan[38] = "B";
dapan[39] = "C";
dapan[40] = "C";
dapan[41] = "A";
dapan[42] = "B";
dapan[43] = "C";
dapan[44] = "D";
dapan[45] = "C";
dapan[46] = "D";
dapan[47] = "B";
dapan[48] = "A";
dapan[49] = "C";
dapan[50] = "A";
var diem;
function chamDiem() {
     diem = 0;

    for (i = 1; i <= socau; i++) {
        /*Kiểm tra xem đã điền hiết các câu hỏi chưa*/
        if (document.querySelector('input[name="cau' + i + '"]:checked') == null) {
            alert('Vui lòng chọn đáp án cho câu ' + i + ' trước khi nộp bài và xem kết quả !');
            return false;
        } else {
            /*Kiểm tra xem kết quả có đún không*/
            /*Nếu sửa input name = gì đó thì phải sử cả phần bên dưới này
  <li id="c2d1"><input type="radio" name="cauhoi4" disabled="true"value="d1"/>Đáp án 1</li>
  thì sửa :   if (dapan[i] == document.body.querySelector('input[name="cauhoi' + i + '"]:checked').value) {
            */
            if (dapan[i] == document.body.querySelector('input[name="cau' + i + '"]:checked').value) {
                diem += 1;
            }
        }
    }
    return true;
}
