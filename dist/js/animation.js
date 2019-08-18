$(document).ready(function(){
    var title = $('.title');
    var folder = $('.folder');
    folder.hide();

    title.on('click',function(){
        $(this).next().slideToggle('slow').siblings('.folder').slideUp('fast');
    });
});
