$(function(){ 
  function buildHTML(message){
    var messageimage = ( message.image === null) ? `</div></div>`: `</div>
    <img src=${message.image} >
  </div>`; 
    var html = `<div class="message" data-message-id=${message.id}>
                <div class="upper-message">
                  <div class="upper-message__user-name">
                    ${message.user_name}
                  </div>
                  <div class="upper-message__date">
                    ${message.date}
                  </div>
                </div>
                <div class="lower-message">
                  <p class="lower-message__content">
                    ${message.content}
                  </p>
                  ${messageimage}`
  return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formdata = new FormData(this);
    var url = $(this).attr('action');
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
      $("form")[0].reset();
    })
    .fail(function(data){
      alert('エラーが発生したためメッセージは送信できませんでした。');
    })
    .always(function(data){
      $('.contents__messages').animate({scrollTop: $('.contents__messages')[0].scrollHeight}, 'fast')
      $('.contents__btn__form__box__submit').prop('disabled', false);
    })  
  })
});