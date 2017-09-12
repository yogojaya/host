$(document).on('click','#pp',function(){
    $('.isi1').show();
    $('.isi2').hide();
    $('.isi3').hide();
   
    $('.active').removeClass('active');
     $(this).addClass('active');
    
});
$(document).on('click','#ll',function(){
    $('.isi1').hide();
    $('.isi2').show();
    $('.isi3').hide();
    
    $('.active').removeClass('active');
    $(this).addClass('active');
});
$(document).on('click','#aa',function(){
    $('.isi1').hide();
    $('.isi2').hide();
    $('.isi3').show();
   
    $('.active').removeClass('active');
     $(this).addClass('active');
});