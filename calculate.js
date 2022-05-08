var array1 = [
    "male1<br/>", "male2<br/>", "male3<br/>",
    "male4<br/>", "male5<br/>", "male6<br/>",
    "male7<br/>", "male8<br/>", "male9<br/>", "male10<br/>"
];
var array2 = [
    "female1<br/>", "female2<br/>", "female3<br/>",
    "female4<br/>", "female5<br/>", "female6<br/>",
    "female7<br/>", "female8<br/>", "female9<br/>", "female10<br/>"];

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
            for (let i=0; i<10; i++) {
                //document.getElementById(`c${i}`).innerHTML = array1[i];
                $(`#c${i}`).html(array1[i]);
            }
        } else if (gen == "female") {
            for (let i=0; i<10; i++) {
                // document.getElementById(`c${i}`).innerHTML = array2[i];
                $(`#c${i}`).html(array2[i])
            }
        } else {
            alert("Please check your gender!")
            box[0].style.display = "none";
        }
    });

    $("#predictBtn").click(function() {
        // Glory to jQuery :)
        isPuberty = $("input[name='isPuberty']:checked").val();
        if (!isPuberty) {
            alert("Input your gender");
        }
        console.log(isPuberty);
        if (isPuberty == "false") {
            var p_height;
            gender = $('input[name="gen"]:checked').val();
            c_height = Number($("#myHeight").val());
            f_height = Number($("#fatherHeight").val());
            m_height = Number($("#motherHeight").val());
            
            if (gender == "male") {
                p_height = (f_height + m_height + 13) / 2;
            } else if (gender == "female") {
                p_height = (f_height + m_height - 13) / 2;
            } else {
                alert("You need to input your gender!"); // Nothing :/
            }
            
            if (f_height > 174 && m_height > 161) {
                p_height += 3;
            } else if (f_height < 174 && m_height < 161) {
                p_height = 3;
            }
            $("#result").html(p_height);

        } else if (isPuberty == "true") {
            var p_height;
            c_height = Number($("#myHeight").val());
            gender = $('input[name="gen"]:checked').val();
            var mark = 0;
            $("input[name='symptoms']:checked").each(function(i, iVal) {
                mark += (+iVal.value);
            });
            console.log(mark);
            $("#result").html(p_height);
            if (mark >= 512) {
                if (gender == "male") p_height = c_height + 7;
                if (gender == "female") p_height = c_height + 5;
            } else if (mark >= 256) {
                if (gender == "male") p_height = c_height + 15;
                if (gender == "female") p_height = c_height + 10;
            } else if (mark >= 4) {
                if (gender == "male") p_height = c_height + 20;
                if (gender == "female") p_height = c_height + 15;
            } else if (mark >= 1) {
                if (gender == "male") p_height = c_height + 25;
                if (gender == "female") p_height = c_height + 20;
            } else { // mark == 0?
                alert("check any symptom or \"No\"")
            }
            $("#result").html(p_height);
        }
        
        
    });
});
