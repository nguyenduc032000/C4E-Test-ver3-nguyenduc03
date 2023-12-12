function numberOneTriangle() {
    const rows = parseInt(document.getElementById('rowInput').value);
    const triangleOutput = document.getElementById('triangleOutput');

  /* Kiểm tra xem rows có nằm trong khoảng từ 1 đến 10 hay không*/
    if (rows < 1 || rows > 10) {
        triangleOutput.innerText = "Vui lòng nhập một số trong khoảng từ 1 đến 10.";
        return;
    }

    // Tạo và in ra hình tam giác
    let triangleText = '';
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= i; j++) {
            triangleText += '* ';
        }
        triangleText += '\n';
    }

    triangleOutput.innerText = triangleText;
}
