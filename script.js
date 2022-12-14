$(document).ready(function(){
    var count_group = $(".list .item").length;
    var active = 0;
    var begin = true;
    function Load(){

        if(begin != true){
            $('#item_'+(active - 1 < 0 ? count_group - 1 : active - 1)).removeClass('active');
            $('#item_'+(active - 1 < 0 ? count_group - 1 : active - 1)).addClass('hide_item');

            $('#content_'+(active - 1 < 0 ? count_group - 1 : active - 1)).removeClass('active');
            $('#content_'+(active - 1 < 0 ? count_group - 1 : active - 1)).addClass('hide_item');
        }else{
            begin = false;
        }


        $('#item_'+active).removeClass('hide_item');
        $('#item_'+active).addClass('active');

        $('#content_'+active).removeClass('hide_item');
        $('#content_'+active).addClass('active');

        $('.dots-page div').removeClass('active');
        $('#dot_'+active).addClass('active');

        $('.effect').addClass('action');
        
        setTimeout(function (){
            $('.effect').removeClass('action');
        }, 6000)
    }
    Load();
    
    $('#next').on('click', function(){
      active = active + 1 >= count_group ? 0 : active + 1;
      Load();
    })
        $('#prev').on('click', function(){
        active = active - 1 < 0 ? count_group - 1 : active - 1;
        })
    });