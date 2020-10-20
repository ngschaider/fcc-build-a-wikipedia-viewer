$("#submit").on("click", submit);

function submit(e){
  e.preventDefault();
  console.log("button pressed");
  var query = $("#searchquery").val();
  getResult(query);
}

function getResult(query){
  $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&search="+query+"&namespace=0&format=json", gotResult);
}

function gotResult(data){
  var html = "";
  for(var i=0;i<data[1].length;i++){
    console.log("Title: "+data[1][i]+"; Description: "+data[2][i]+"; Link: "+data[3][i]);
    html += "<div class='entry'>";
    html += "<h3><a target='_blank' href='"+data[3][i]+"'>"+data[1][i]+"</a></h3>";
    html += "<p>"+data[2][i]+"</p>";
    html += "</div>";
  }
  
  $("#entry-wrapper").html(html);
}