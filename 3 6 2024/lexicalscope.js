function fOuter() {
    var x = "hello";
    function fInner(){
        x = "World";
    }
    fInner();
    return x;
}
console.log(fOuter());
