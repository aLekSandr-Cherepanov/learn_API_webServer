$('document'). ready(function(){
    loadGoods();
});

function loadGoods() {
    //загружаю товар на страницу
    $.getJSON('goods.json', function (data) {
        var out = '';
        for (var key in data){
            out+='<h3>'+data[key]['name']+'</h3>';
            out+='<p>'+data[key]['cost']+'</p>';
        }
        $('#goods').html(out);
    })
}