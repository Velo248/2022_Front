let a = ["c:/temp/guide.hwp", "c:/pj/frontend/chap05/substring1.js", "homework.docx"];

console.log('\n파일 확장자')
for (t of a) {
    console.log(t.substring(t.lastIndexOf('.')));
}

console.log('\n파일명')
for (t of a) {
    console.log(t.substring(t.lastIndexOf('/') + 1));
}

console.log('\n파일이름')
for (t of a) {
    console.log(t.substring(t.lastIndexOf('/') + 1, t.lastIndexOf('.')));
}