
function bold1() {
    $("#salut").css("fontWeight","bold");
}
function italic(){
    $("#salut").css("fontStyle","italic")
}
function under(){
    $("#salut").css("textDecoration","underline")
}
function changefonts(e){
    $("#salut").css("fontFamily",e.value)
}
function changesize(a){
    $("#salut").css("fontSize",a.value)
}
    