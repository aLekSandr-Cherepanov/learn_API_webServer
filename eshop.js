$('document'). ready(function(){
    loadGoods();
});

function loadGoods() {
    //загружаю товар на страницу
    $.getJSON('goods.json', function (data) {
        
    })
}