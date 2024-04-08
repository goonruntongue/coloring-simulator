$(function() {

    /*フローティングウィンドウの表示非表示*/
    $("a.open").on("click", function() {
        $("div#Floating").fadeIn();
        $(this).fadeOut();
        return false;
    });

    $("a.close").on("click", function() {
        $("div#Floating").fadeOut();
        $("a.open").fadeIn();
        /*カラーピッカ―を閉じる*/
        $("#colorpicker1 .colorpicker").hide();
        $("#colorpicker2 .colorpicker").hide();
        $("#colorpicker3 .colorpicker").hide();
        return false;
    });
    /*カラー決定スイッチの表示非表示*/
    $("body").keydown(function() {
        var str = event.keyCode;
        if (event.keyCode == 27) {
            alert("パネルを非表示にします。もう一度ESCキーを押すと、表示されます。");
            $("a.open").fadeToggle();
        }
    });

    /*フローティングウィンドウの表示非表示ここまで*/

    /*フローティングウィンドウのドラッグ移動*/
    /*
    on("mousedoun",function(e){
        var pointX=e.pageX;
        var pointY=e.pageY;
    });
    */
    /*上記構文にてそれぞれクリックしたところの要素の座標を取得*/

    /*.data()メソッド*/
    /*
    $("p").data("xxx",111)とすると
    DOMに<p data-xxx="111"></p>をつけられる。
    */

    $("div.bar").on("mousedown touchstart", function(e) {
        /*ボックスのタイトルバーをクリックしたらクリックしたポイントの座標を取得*/
        var xpoint = e.pageX - $("div#Floating").offset().left;
        var ypoint = e.pageY - $("div#Floating").offset().top;

        $(document).on("mousemove touchmove", function(e) {
            $("div#Floating").css({
                /*ドラッグを始めたら、要素の座標にクリックしたポイントから上記のクリックポイントを引いた値を設定*/
                "top": e.pageY - ypoint + "px",
                "left": e.pageX - xpoint + "px"
            });
        });
    }).on("mouseup touchend", function(e) {
        /*マウスを離したらmousemoveイベントの処理を解除*/
        $(document).unbind("mousemove");

    });
});

/*カラーピッカープラグインの処理*/
$('#colorpicker1').ColorPicker({
    /*onShow:function(colpckr){
		$(colpckr).slideDown(500);
	},*/
    flat: true,
    color: '#0000ff',
    onChange: function(hsb, hex, rgb) {
        $('.b').css('backgroundColor', '#' + hex);
        $('path[fill="rgb(255,255,255)"]').css({
            "fill": `#${hex}`
        });
    }
});
$('#colorpicker2').ColorPicker({
    /*onShow:function(colpckr){
		$(colpckr).slideDown(500);
	},*/
    flat: true,
    color: '#0000ff',
    onChange: function(hsb, hex, rgb) {
        $('.m').css('backgroundColor', '#' + hex);
        $('.logo_color,.title').css("color", "#" + hex);
        $(".tag").css('borderBottomColor', '#' + hex);
    }
});
$('#colorpicker3').ColorPicker({
    /*onShow:function(colpckr){
		$(colpckr).slideDown(500);
	},*/
    flat: true,
    color: '#0000ff',
    onChange: function(hsb, hex, rgb) {
        $('.a').css('backgroundColor', '#' + hex);
        $('nav ul li span:first-of-type').css({
            'border-bottom-color': '#' + hex
        });
        $('nav ul li span:last-of-type').css({
            'background-color': '#' + hex
        });
        $('.top_angle').css({
            "border-right-color": "transparent",
            "border-bottom-color": "transparent",
            "border-top-color": "#" + hex,
            "border-left-color": "#" + hex
        });
        $('.bottom_angle').css({
            "border-bottom-color": "#" + hex,
            "border-right-color": "#" + hex
        });
        $('.a_word').css({
            "color": "#" + hex
        });
    }
});
$("#colorpicker1 .colorpicker").hide();
$("#colorpicker2 .colorpicker").hide();
$("#colorpicker3 .colorpicker").hide();

$(".basechip").on("click", function() {
    $("#colorpicker1 .colorpicker").fadeToggle(500);
    $("#colorpicker2 .colorpicker").hide(500);
    $("#colorpicker3 .colorpicker").hide(500);
});
$(".mainchip").on("click", function() {
    $("#colorpicker2 .colorpicker").fadeToggle(500);
    $("#colorpicker1 .colorpicker").hide(500);
    $("#colorpicker3 .colorpicker").hide(500);
});
$(".accentchip").on("click", function() {
    $("#colorpicker3 .colorpicker").fadeToggle(500);
    $("#colorpicker1 .colorpicker").hide(500);
    $("#colorpicker2 .colorpicker").hide(500);
});

$(".basechip").on("click", function() {
    $(this).toggleClass("active");
    $(".mainchip").removeClass("active");
    $(".accentchip").removeClass("active");
});

$(".mainchip").on("click", function() {
    $(this).toggleClass("active");
    $(".basechip").removeClass("active");
    $(".accentchip").removeClass("active");
});

$(".accentchip").on("click", function() {
    $(this).toggleClass("active");
    $(".mainchip").removeClass("active");
    $(".basechip").removeClass("active");
});

$("nav ul li").on("mouseover", function() {
    $(this).addClass("hov");
})
$("nav ul li").on("mouseout", function() {
    $(this).removeClass("hov");
})

/*スライドショー*/
var Timer;
/*var flg=false;*/

$(function() {
    for (i = 0; i < 6; i++) {
        $("<div></div>").appendTo($("div.top_image"));
    }
    $("top_image").css({
        "position": "relative"
    });
    $(".top_image div").css({
        "width": "100%",
        "height": "345px",
        "background-position": "center center",
        "position": "absolute",
        "background-repeat": "no-repeat"
    });
    $(".top_image div:first-of-type").css({
        "background-image": "url(materials/images/bg_red01.jpg)"
    });
    $(".top_image div:nth-of-type(2)").css({
        "background-image": "url(materials/images/bg_red02.jpg)"
    });
    $(".top_image div:nth-of-type(3)").css({
        "background": "url(materials/images/bg_blue01.jpg)"
    });
    $(".top_image div:nth-of-type(4)").css({
        "background": "url(materials/images/bg_blue02.jpg)"
    });
    $(".top_image div:nth-of-type(5)").css({
        "background": "url(materials/images/bg_green01.jpg)"
    });
    $(".top_image div:last-of-type").css({
        "background": "url(materials/images/bg_green02.jpg)"
    });
    $("div.top_image div").hide();
    /*    $("div.top_image div:first-of-type").show();*/
});

function SlideStart(flg) {

    if (flg == true) {
        Timer = setInterval(function() {
            $("div.top_image div:first-of-type").fadeOut(1500).next().fadeIn(1500).end().appendTo("div.top_image");
        }, 6000);
        /*alert("タイマー" + Timer + "を取得しました");*/
    } else {
        clearInterval(Timer);
        /*alert("タイマー" + Timer + "を停止しました");*/
    }

}

$(".stop_button").hide();
$(".start_button").on("click", function() {
    $(this).hide();
    $(".stop_button").show();
    $("div.top_image").css("border", "none");
    $("div.top_image div:first-of-type").show(100);
    SlideStart(true);
});

$(".stop_button").on("click", function() {
    $(this).hide();
    $(".start_button").show();
    $("div.top_image").css("border", "1px solid #000");
    $("div.top_image div").hide(10);
    $(".parallax").css({
        "background-image": "none"
    })

    SlideStart(false);

});

$(".col_left,.col_right").css({
    "text-align": "justify",
    "text-justify": "inter-ideograph",
    "font-family": "sans-serif",
    "overflow": "hidden"
});

var b_ch = false;
var m_ch = false;

$(".m_font").on("click", function() {
    m_ch = !m_ch;
    if (!m_ch) {
        $(this).css({
            "background": "#fcfcfc",
            "color": "#2c2c2c"
        });
    } else {
        $(this).css({
            "background": "#2c2c2c",
            "color": "#fcfcfc"
        });
    }
    $(".mf").toggleClass("font_color");
})

$(".b_font").on("click", function() {
    b_ch = !b_ch;
    if (!b_ch) {
        $(this).css({
            "background": "#fcfcfc",
            "color": "#2c2c2c"
        });
    } else {
        $(this).css({
            "background": "#2c2c2c",
            "color": "#fcfcfc"
        });
    }
    $(".bf").toggleClass("font_color");
    if (!b_ch) {
        $('path[stroke="rgb(38,37,37)"]').css({
            "stroke": "#000000"
        })
    } else {
        $('path[stroke="rgb(38,37,37)"]').css({
            "stroke": "#f8f8f8"
        })
    }
})

/*masonry*/
$('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: 342,
    //カラム幅
    isFitWidth: true,
    //親要素の幅に合わせてカラム数を自動調整
});

/*グローバルナビ*/
$("div.ham").on("click", function() {
    $(this).toggleClass("nav_close");
    $(".global").toggleClass("show");
});


/*window.matchMedia().matchesによるカラー決定ボックスの文字サイズ変更*/
/*動作関数を定義…引数Query_Valを措定し、後に定義するブレイクポイントで処理の分岐を設定できるようにしておく*/
function ChangeStr(Query_Val) {
    if (Query_Val.matches) {
        $(".b_font,.m_font").text("F").width("30px").height("30px");
        $("p.explain").css({
            "font-size": "0.8em"
        });
    } else {
        $(".b_font,.m_font").text("文字色").width("40px").height("40px");
        $("p.explain").css({
            "font-size": "1em"
        });
    }
}
/*ブレイクポイントを設定*/
var BreakPoint = window.matchMedia("(max-width:768px)");

/*ページ読み込み時にとりあえず関数を一度発動*/
$(function() {
    ChangeStr(BreakPoint);
});
/*リスナーメソッドで、ブレイクポイントで関数を発火させるようにする*/
BreakPoint.addListener(ChangeStr);

/*トップへ戻るボタンの動作*/
$(function() {
    $("div.return").hide();
    $(window).scroll(function() {
            var WST = $(window).scrollTop();
            if (WST > 500) {
                $("div.return").fadeIn(500);
            } else {
                $("div.return").fadeOut(500);
            }
        })
        /*スムーススクロールの動作部分1*/
    $("div.return").on("click", function() {
        var spd = 500;
        //スクロールスピードの設定
        $("html,body").animate({
            "scrollTop": 0
        }, spd)
        return false;
    });

});

console.log("Katsuyori Murakami 2019 All Right Reserved.");

//lottie-animate.jsのアニメーションを止める
anime.stop();

//ストーリーセクション内の文字をすべてspanでくくる
let story = document.querySelector(".card .leftCol");


// childNodesをArray.fromで配列に変換してforEachでループ処理
Array.from(story.childNodes).forEach((node) => {
    if (node.nodeType === 3) { // テキストノードの場合
        let text = node.nodeValue;
        let spanWrapper = document.createElement("div"); // 仮のdivを作成

        // 各文字を<span>で囲んだ文字列を生成
        [...text].forEach(char => {
            let span = document.createElement("span");
            span.textContent = char;
            spanWrapper.appendChild(span);
        });

        // 仮のdivの中身（各文字が<span>で囲まれたもの）をnodeの位置に挿入
        while (spanWrapper.firstChild) {
            node.parentNode.insertBefore(spanWrapper.firstChild, node);
        }
        // 元のテキストノードを削除
        node.parentNode.removeChild(node);
    }
    // <br>タグはそのままにするため、ここでは何もしない
});

// });
// GSAP scrollTriggerを追加
// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)
        // gsap code here!
    let $sTig = document.querySelector(".sTig")
    ScrollTrigger.create({
        trigger: $sTig,
        start: "top top",
        end: "+=" + $sTig.clientHeight * 4,
        pin: true,
        scrub: true,
        markers: false,
        onUpdate: self => {
            let currentFrame = Math.floor(self.progress * anime.totalFrames);
            anime.goToAndStop(currentFrame, true);
            // spanを一文字ずつ出す。
            let $spans = document.querySelectorAll(".card .leftCol span");
            let spanAmount = $spans.length; //408個ある
            let spanProgress = Math.floor(self.progress * spanAmount) //(0-408まで);
            console.log(spanProgress)
            $spans.forEach(($span, index) => {
                if (index < spanProgress) {
                    $span.style.opacity = 1
                } else {
                    $span.style.opacity = 0
                }
            })
        }
    });
});

// この部分はカラー設定の説明のためにはよろしくないので、起動させないことにする
/*-article-部分画像のパララックス-*/
// $(".start_btn").on("click", function() {
//     $(".parallax").css({
//         "background-image": "url(materials/images/bg2.png)"
//     })
// })
// $(window).on("scroll", function() {
//     var WH = $(window).height();
//     var WS = $(window).scrollTop();
//     var POT = $(".parallax").offset().top;
//     if (WH + WS > POT) {
//         $(".parallax").css({
//             "background-position-y": -1 * WS / 100 * 25
//         })
//     } else {
//         $(".parallax").css({
//             "background-position-y": 0
//         })
//     }
// })

// 慣性スクロールを試す
if (!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
    $('body').niceScroll({
        cursorcolor: "#888888", // change cursor color in hex
        cursoropacitymin: 0.2, // change opacity when cursor is inactive (scrollabar "hidden" state), range from 1 to 0
        cursoropacitymax: 1, // change opacity when cursor is active (scrollabar "visible" state), range from 1 to 0
        cursorwidth: "10px", // cursor width in pixel (you can also write "5px")
        cursorborder: "1px solid #fff", // css definition for cursor border
        cursorborderradius: "5px", // border radius in pixel for cursor 
        scrollspeed: 100, // scrolling speed
        mousescrollstep: 60, // scrolling speed with mouse wheel (pixel)
        emulatetouch: false, // enable cursor-drag scrolling like touch devices in desktop computer
        hwacceleration: true, // use hardware accelerated scroll when supported
        gesturezoom: true, // (only when boxzoom=true and with touch devices) zoom activated when pinch out/in on box
        grabcursorenabled: false, // (only when touchbehavior=true) display "grab" icon
        railpadding: { top: 0, right: 10, left: 0, bottom: 0 }, // set padding for rail bar
        hidecursordelay: 400, // set the delay in microseconds to fading out scrollbars
        smoothscroll: true
    });
}