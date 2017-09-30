$(function(a) {
    a.get("./urls.txt",function(t){
        var l = t.split("\n").filter(String)
        , s = l.length
        , i = -1
        // preload
        $(l).each(function(){
                $('<img/>')[0].src = this;
        });
        // change func
        function change() {
            //i = (i+1)%s
            i = Math.floor(Math.random()*s);
            a('html').css({
                'background-image': 'url(' + l[i] + ')',
                'background-color': '#000',
                'background-size': 'cover',
                '-webkit-transition': 'all 3s ease',
                '-moz-transition': 'all 3s ease',
                '-ms-transition': 'all 3s ease',
                '-o-transition': 'all 3s ease',
                'transition': 'all 3s ease'
            });
        }
        change()
        setInterval(change,10000);
    })
});