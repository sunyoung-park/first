document.write("외부 파일로 작성됨 텍스트입니다.");
document.write("<h1>소스코드가 길어지는 경우에는 외부파일로 작성합니다.</h1>");
document.write("외부파일의 확장자는 .js 입니다.");

var x, y, z, i ,j ,t;
//x, y, z, i ,j ,t 이름으로 된 변수 선언

y = 100;
z = 300;
t = 100;

j = y + z; // 100 + 300
x = t + z; // 100 + 300
i = y + z + t; // 100 + 300 + 100

document.write("<br />" + j + "<hr />"); // 400
document.write(x + "<hr />"); // 400
document.write(i + "<hr />"); // 500
document.write(j + x); // 800