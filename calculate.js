var array1 = ["male1<br/>", "male2<br/>", "male3<br/>"];
        var array2 = ["female1<br/>", "female2<br/>", "female3<br/>"];
        
        function pubertySymptoms() {
            var box = document.getElementsByClassName("box"); //bug occured
            var temp = document.getElementsByName("gen");
            var temp2 = document.getElementsByName("isPuberty");
            for (let i=0; i<temp.length; i++) {
                if (temp[i].checked == true) {
                    value = temp[i].value;
                }
            }
            for (let i=0; i<temp2.length; i++) {
                if (temp2[i].checked == true) {
                    value2 = temp2[i].value;
                }
            }
            if (value2 == "true") {
                box[0].style.display = "block";
            } else if (value2 == "false") {
                box[0].style.display = "none";
            }
            if (value == "male") {
                for (let i=0; i<3; i++) {
                    document.getElementById(`c${i}`).innerHTML = array1[i];
                }
            } else if (value == "female") {
                for (let i=0; i<3; i++) {
                    document.getElementById(`c${i}`).innerHTML = array2[i];
                }
            }
        }
        
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
            document.getElementById("result").innerHTML = p_height;
        }
