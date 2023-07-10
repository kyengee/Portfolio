// fullscreen 영역
$(document).ready(function () {
    fullset();
    quickClick();
});

function fullset() {
    var pageindex = $("#fullpage > .fullsection").size(); //fullpage 안에 섹션이(.fullsection) 몇개인지 확인하기
    for (var i = 1; i <= pageindex; i++) {
        $("#fullpage > .quick > ul").append("<li></li>");
    }
    $("#fullpage .quick ul :first-child").addClass("on"); //일단 화면이 로드 되었을때는 퀵버튼에 1번째에 불이 들어오게
    //마우스 휠 이벤트
    $(window).bind("mousewheel", function (event) {
        var page = $(".quick ul li.on");
        //alert(page.index()+1);  // 현재 on 되어있는 페이지 번호
        if ($("body").find("#fullpage:animated").length >= 1) return false;
        //마우스 휠을 위로
        if (event.originalEvent.wheelDelta >= 0) {
            var before = page.index();
            if (page.index() >= 0) page.prev().addClass("on").siblings(".on").removeClass("on"); //퀵버튼옮기기
            var pagelength = 0;
            for (var i = 1; i < (before); i++) {
                pagelength += $(".full" + i).height();
            }
            if (page.index() > 0) { //첫번째 페이지가 아닐때 (index는 0부터 시작임)
                page = page.index() - 1;
                $("#fullpage").animate({
                    "top": -pagelength + "px"
                }, 1000, "swing");
            } else {
                alert("첫번째페이지 입니다.");
            }
        } else { // 마우스 휠을 아래로	
            var nextPage = parseInt(page.index() + 1); //다음페이지번호
            var lastPageNum = parseInt($(".quick ul li").size()); //마지막 페이지번호
            //현재페이지번호 <= (마지막 페이지 번호 - 1)
            //이럴때 퀵버튼옮기기
            if (page.index() <= $(".quick ul li").size() - 1) {
                page.next().addClass("on").siblings(".on").removeClass("on");
            }

            if (nextPage < lastPageNum) { //마지막 페이지가 아닐때만 animate !
                var pagelength = 0;
                for (var i = 1; i < (nextPage + 1); i++) {
                    //총 페이지 길이 구하기
                    //ex) 현재 1번페이지에서 2번페이지로 내려갈때는 1번페이지 길이 + 2번페이지 길이가 더해짐
                    pagelength += $(".full" + i).height();
                }
                $("#fullpage").animate({
                    "top": -pagelength + "px"
                }, 1000, "swing");
            } else { // 현재 마지막 페이지 일때는
                alert("마지막 페이지 입니다!");
            };

        }
    });
    $(window).resize(function () {
        //페이지가 100%이기때문에 브라우저가 resize 될때마다 스크롤 위치가 그대로 남아있는것을 방지하기 위해
        var resizeindex = $(".quick ul li.on").index() + 1;

        var pagelength = 0;
        for (var i = 1; i < resizeindex; i++) {
            //총 페이지 길이 구하기
            //ex) 현재 1번페이지에서 2번페이지로 내려갈때는 1번페이지 길이 + 2번페이지 길이가 더해짐
            pagelength += $(".full" + i).height();
        }

        $("#fullpage").animate({
            "top": -pagelength + "px"
        }, 0);
    });
}
// 사이드 퀵버튼 클릭 이동
function quickClick() {
    $(".quick li").click(function () {
        var gnbindex = $(this).index() + 1;
        var length = 0;
        for (var i = 1; i < (gnbindex); i++) {
            length += $(".full" + i).height();
        }
        if ($("body").find("#fullpage:animated").length >= 1) return false;
        $(this).addClass("on").siblings("li").removeClass("on");

        $("#fullpage").animate({
            "top": -length + "px"
        }, 800, "swing");
        return false;
    });
}

// 타이핑 효과
window.addEventListener("load", function () {
    var tag = document.querySelector(".typing");
    var app = new Hakademy.util.typing(tag, {
        text: [
                "함께하고 싶은 신입 웹퍼블리셔"
                ],
        color: {
            apply: true
        }
    });
});

// circle 효과
//Get distance between two points (coords):
function getDistance(x1, y1, x2, y2){
  return Math.sqrt( (x1-x2) * (x1-x2) + (y1-y2) * (y1-y2) ); //Distance.
};

//Function:
function update(e){
  //Window center (array):
  var winCenter = [$(window).width()/2, $(window).height()/2]; // => winCenter[width, height];
  //Cursor position (array):
  var cursorPos = [e.clientX, e.clientY]; //cursorPos[left, top];
  //Find SVG 'viewBox' shorter side (circle size fit the shorter size of the 'viewBox'):
  var viewBoxSize = Math.min(winCenter[0], winCenter[1]);
  //Distance between circle center and mouse position (px):
  var distancePx = getDistance(winCenter[0], winCenter[1], cursorPos[0], cursorPos[1]);
  //Distance between circle center and mouse position (%):
  //Multiply by 100 to get the diameter or multiply by 50 to get the radius.
  var distancePercent = parseInt( (distancePx/viewBoxSize) * 50 );
  //Circle radius attribute update:
  circle.setAttribute("r", distancePercent);
  //Debug:
  console.log(distancePercent);
};

//Event handler:
$(window).mousemove(function(e){
  update(e);
});

// full3 영역
$(function () {
    $('.full3 .owl-carousel').owlCarousel({
        margin: 10,
        loop: true, // 무한 슬라이드
        autoplay: true, // 자동슬라이드옵션
        autoplayTimeout: 3000, // 자동넘어가는시간
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 4
            },
            900: {
                items: 5
            },
            1200: {
                items: 6
            }
        }
    });
    
    /* 배너 누르면 확대
    $("body").append("<div id='glayLayer'></div><div id='overLayer'></div>");

    $("a.modal").click(function () {
        $("#glayLayer").show();
        $("#overLayer").show().html("<img src='" + $(this).attr("href") + "' alt='" + $(this).attr("title") + "' / >");
        return false;
    });

    $("#glayLayer").click(function () {
        $(this).hide();
        $("#overLayer").hide();
    }); */
});

// contents6 영역
$(function () {
    $('.full4 .owl-carousel').owlCarousel({
        margin: 10,
        loop: true, // 무한 슬라이드
        autoplay: true, // 자동슬라이드옵션
        autoplayTimeout: 3000, // 자동넘어가는시간
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            }
        }
    });
});
