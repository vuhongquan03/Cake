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
dapan[3] = "D";
dapan[4] = "D";
dapan[5] = "A";
dapan[6] = "B";
dapan[7] = "C";
dapan[8] = "A";
dapan[9] = "C";
dapan[10] = "C";
dapan[11] = "B";
dapan[12] = "B";
dapan[13] = "D";
dapan[14] = "A";
dapan[15] = "C";
dapan[16] = "A";
dapan[17] = "A";
dapan[18] = "A";
dapan[19] = "B";
dapan[20] = "D";
dapan[21] = "B";
dapan[22] = "A";
dapan[23] = "A";
dapan[24] = "C";
dapan[25] = "C";
dapan[26] = "C";
dapan[27] = "A";
dapan[28] = "D";
dapan[29] = "D";
dapan[30] = "B";
dapan[31] = "D";
dapan[32] = "D";
dapan[33] = "A";
dapan[34] = "D";
dapan[35] = "C";
dapan[36] = "C";
dapan[37] = "C";
dapan[38] = "C";
dapan[39] = "B";
dapan[40] = "B";
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
