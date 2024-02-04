var isOpen = false;

$(function() {
    $("tr.item-title").click(function(){
        var id = $(this).data('id')
        var child = '[data-parent-id = ' + id + ']';
        if (isOpen === false) {
            $(this).css("border-bottom", "0px");
            isOpen = true
        } else {
            $(this).css("border-bottom", "1px solid black");
            isOpen = false;
        }
        $(child).toggle();
    });
})