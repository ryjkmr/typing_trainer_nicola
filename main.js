var data_array = [];//テスト項目を格納
var sampletext="";//表示する言葉
var textBefore="";//直前の問題、同じ問題が続くと萎えるのでチェック

$(function () {
	loadText("test-3.txt");//起動時には、とりあえず最初の問題をロード

$("#input").keyup(//入力枠の判定処理
 function(e){
 var a= $("#sample").val();//問題フィールドの内容を取得
 var b=$("#input").val();//回答フィールドの内容を取得
 if (e.keyCode==13 && a==b){//リターンが押されて文字が確定した時に判定
 showRandomText();//正解なら新しい問題を表示
 }
 })
 
 $("#input2").keyup(//自由入力練習枠の処理
 function(e){
 var a= $("#free").val();
 var b=$("#input2").val();
 if (e.keyCode==13 && a==b){//リターンが押されて文字が確定した時に判定
 $("#input2").val("");//入力欄をクリア
 }
 })
 
 //各ボタンの処理、それぞれの問題をロード
 $("#Lesson3").click(function(){loadText("test-3.txt");  });

 $("#Lesson4").click(function(){loadText("test-4.txt");});
 
 $("#Lesson5").click(function(){loadText("test-5.txt");});
 
 $("#Lesson6").click(function(){loadText("test-6.txt");});

 $("#Lesson7").click(function(){loadText("test-7.txt");});

 $("#Lesson8").click(function(){loadText("test-8.txt");});

 $("#Lesson9").click(function(){loadText("test-9.txt");});

 $("#Original_Lesson").click(function(){loadText("user.txt");});


 function showRandomText() {//問題をランダムに表示する関数
	var len = data_array.length ;//問題の数を取得
	while(sampletext == textBefore){//直前と違う問題になるまでやる
	var randnum = Math.floor( Math.random() * len );//0〜配列長の乱数を生成
 	sampletext = data_array[randnum];
	}
 	$("#sample").text(sampletext);
	$("#input").val("");//入力欄をクリア
	textBefore = sampletext;//最新の問題を保存	
 }


 function loadText(fileName) {//テキストファイルを読み込んで表示する関数
  $.ajax({
    url:fileName,
    success: function(data){
      data_array = data.split(/\r\n|\r|\n/);  // 改行コードで分割して配列に格納
	  showRandomText();//最初の問題を表示
	  $('#input').focus();
     }
  });
 }
});
