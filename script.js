$(".tab_name1").on('click',function(){
  $('.QRCode_link_container').empty().append('<h4><a href="https://www.instagram.com/nitinjangir.nj/">Click here</a></h4>');
  $('.active_tab').css({'margin-left':'50%'});
  $('.tab_name').css({color:'#000'});
  $('.tab_name1').css({color:'#fff'});
});


$(".tab_name").on('click',function(){
  $('.QRCode_link_container').empty().append('<img src="https://pngimg.com/uploads/qr_code/qr_code_PNG26.png" alt="..."><div class="scan"></div>');
  $('.active_tab').css({'margin-left':'-15%'});
  $('.tab_name').css({color:'#fff'});
  $('.tab_name1').css({color:'#000'});
});