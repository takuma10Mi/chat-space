$(function(){ 
  function buildHTML(message){
    var messageimage = ( message.image === null) ? "" : `<img src=${message.image} >`; 
    var messagecontent =  (message.content === null) ? ""
                                                    :`<p class="lower-message__content">
                                                    ${message.content}
                                                    </p>` 
    var html = `<div class="message" data-message-id="${message.id}">
                <div class="upper-message">
                  <div class="upper-message__user-name">
                    ${message.user_name}
                  </div>
                  <div class="upper-message__date">
                    ${message.date}
                  </div>
                </div>
                <div class="lower-message">
                  ${messagecontent}
                  ${messageimage}
                  </div></div>`
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
      $('.contents_messages_chat').append(html);
      $("#new_message")[0].reset();
    })
    .fail(function(){
      alert('エラーが発生したためメッセージは送信できませんでした。');
    })
    .always(function(){
      $('.contents__messages').animate({scrollTop: $('.contents__messages')[0].scrollHeight}, 'fast');
      $('.contents__btn__form__box__submit').prop('disabled', false);
    })  
  })
  var reloadMessages = function() {
    console.log(222);
    var last_message_id = $('.message').last().data('message-id');
    $.ajax({
      url: "api/messages",
      type: 'GET',
      dataType: 'json',
      data: {messages: {messages_id:last_message_id}}
    })
    .done(function(messages) {
      messages.forEach(function(message) {
      console.log(messages)
      insertHTML = buildHTML(message);
        $('.contents_messages_chat').append(insertHTML);
      })
      $('.contents__messages').animate({scrollTop: $('.contents__messages')[0].scrollHeight}, 'fast')
    })
    .fail(function() {
      alert("自動更新に失敗しました")
    })
  };
  setInterval(reloadMessages, 5000);
});
