function render(data) {
    var html="<div class='commentBox'><div class='rightPanel'><span>"+data.name+"</span><div class='date'>"+data.date+"</div><p>"+data.body+"</p></div></div>";
    $('#container').append(html);
}


$(document).ready(function(){
    var comment=[
        {"name": "Mike", "date": "10 Apr 2016", "body": "This is a comment"}
    ];
    
    for(var i=0;i<comment.length;i++){
        render(comment[i]);
    }
    $('#addComment').click(function(){
        var addObj = {
            "name": $('#name').val(),
            "date": $('#date').val(),
            "body": $('#bodyText').val()
        };
        comment.push(addObj);
        render(addObj);
        $('#name').val('');
        $('#date').val('dd/mm/yyyy');
        $('#bodyText').val('');
    });
});
