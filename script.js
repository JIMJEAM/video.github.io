/*-=======================================================
ANIMACIONES SCROLL HEADER
========================================================*/
$(windows).scroll(funtion() {
            var posY = window.pageYOffset;
            if (posY > 10) {
                -
                $("header").css({ "background": "#043248", "transition": ".3s all" })
            } else {
                $("header").css({ "background": "rgba(0,0,0,.1)", "transition": ".3s all" })
            }
        }
        /*-=======================================================
        MENU MOVIL
        ========================================================*/
        $(".logotipo .fa-bars").click(function() {
            $(".menumovil").show("fast");
        }) $(".menuMovil ul li .fa-times").click(funtion() {
            $(".menuMovil").hide("fast");

        })