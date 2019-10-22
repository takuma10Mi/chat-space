$(function(){
  $("#user-search-field").on("keyup", function(e) {
    e.preventDefault();
    var input = $("#user-search-field").val();
    console.log(input)
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })
    done(function(引数){
      //emptyメソッドで一度検索結果を空にする
      //usersが空かどうかで条件分岐
      //配列オブジェクト１つ１つに対する処理
   })
  });
});