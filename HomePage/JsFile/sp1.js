var i = 0;
    function buttonClick() {
        i++;
        document.getElementById('inc').value = i;
    }
    function buttonClick2() {
        document.getElementById('inc').value = i-- ;
        if(i<=0)
        return i=1
    }