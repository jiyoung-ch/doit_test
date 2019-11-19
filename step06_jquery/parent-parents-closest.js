부모요소 선택하는 방법
parent()
parents()
closest()

//parent()
$("요소선택").parent();
//해당 요소 바로위에 존재하는 하나의 부모 요소반환

D



<script>
    $(function(){
        $("#list_1").parent().css("border","2px solid #f00");
    });
</script>

//$("#list_1").parent()의 바로 위 부모 ul에 css 적용됨