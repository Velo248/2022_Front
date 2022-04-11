let a = ["c:/temp/guide.hwp", "c:/pj/frontend/chap05/substring1.js", "homework.docx"];

for (t of a) {
    console.log(t.substring(t.lastIndexOf('.')));
}