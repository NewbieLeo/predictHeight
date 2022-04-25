var array1 = [
    "male1<br/>", "male2<br/>", "male3<br/>",
    "male4<br/>", "male5<br/>", "male6<br/>",
    "male7<br/>", "male8<br/>", "male9<br/>"
];
var array2 = [
    "female1<br/>", "female2<br/>", "female3<br/>",
    "female4<br/>", "female5<br/>", "female6<br/>",
    "female7<br/>", "female8<br/>", "female9<br/>"];

$(document).ready(function () {
    $("#btn").click(function() {
        var box = $(".box");
        var gen = $("input[name='gen']:checked").val();
        var isPuberty = $("input[name='isPuberty']:checked").val();
        
        if (isPuberty == "true") {
            box[0].style.display = "block";
        } else if (isPuberty == "false") {
            box[0].style.display = "none";
        }

        if (gen == "male") {
            for (let i=0; i<9; i++) {
                //document.getElementById(`c${i}`).innerHTML = array1[i];
                $(`#c${i}`).html(array1[i]);
            }
        } else if (gen == "female") {
            for (let i=0; i<9; i++) {
                // document.getElementById(`c${i}`).innerHTML = array2[i];
                $(`#c${i}`).html(array2[i])
            }
        } else {
            alert("Please check your gender!")
            box[0].style.display = "none";
        }

        
    });
});
function predictHeight() {
    // 디버깅 예정
    var p_height;
    gender = $('input[name="gen"]:checked').val();
    c_height = Number($("#myHeight").val());
    f_height = Number($("#fatherHeight").val());
    m_height = Number($("#motherHeight").val());
    if (gender == "male") {
        p_height = (f_height + m_height) / 2 + 6.5;
    } else if (gender == "female") {
        p_height = (f_height + m_height) / 2 - 6.5;
    }
    $("#result").html(p_height);
    var mark = 0;
    $("input[name='symptoms']:checked").each(function(i, iVal) {
        mark += iVal.value;
    });
    console.log(mark);
}
