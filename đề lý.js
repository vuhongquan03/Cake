var h = 0; // Giờ
var m = 50; // Phút
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
var socau = 40;
var dapan = new Array();
dapan[1] = "D";
dapan[2] = "B";
dapan[3] = "C";
dapan[4] = "B";
dapan[5] = "A";
dapan[6] = "C";
dapan[7] = "D";
dapan[8] = "B";
dapan[9] = "A";
dapan[10] = "D";
dapan[11] = "C";
dapan[12] = "A";
dapan[13] = "D";
dapan[14] = "A";
dapan[15] = "A";
dapan[16] = "C";
dapan[17] = "C";
dapan[18] = "A";
dapan[19] = "D";
dapan[20] = "A";
dapan[21] = "D";
dapan[22] = "A";
dapan[23] = "D";
dapan[24] = "B";
dapan[25] = "B";
dapan[26] = "D";
dapan[27] = "B";
dapan[28] = "A";
dapan[29] = "A";
dapan[30] = "B";
dapan[31] = "D";
dapan[32] = "C";
dapan[33] = "C";
dapan[34] = "D";
dapan[35] = "B";
dapan[36] = "D";
dapan[37] = "C";
dapan[38] = "B";
dapan[39] = "B";
dapan[40] = "C";
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
