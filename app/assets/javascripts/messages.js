$('#new_message').on('submit', function(e){
  e.preventDefault();
  var message = new FormData(this);
  var url = (window.location.href);
  $.ajax({
    url: url,
    type: 'POST',
    data: formdata,
    dataType: 'json',
    processData: false,
    contentType: false
  })
  .done(function(data){
    var html = buildHTML(data);
    $('.messages').append(html);
    $('#message_content').val('');
    scrollBottom();
  })
  .fail(function(data){
    alert('エラーが発生したためメッセージは送信できませんでした。');
  })
  .always(function(data){
    $('.submit-btn').prop('disabled', false);
  })
  function scrollBottom(){
    
    var target = $('.contents_messages').last();
    var position = target.offset().top + $('.contents_messages').scrollTop();
    $('.contents_messages').animate({
      scrollTop: position
    }, 300, 'swing');
  }

})