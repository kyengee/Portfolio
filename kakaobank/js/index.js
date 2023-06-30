$( document ).ready( function() {
	$('.center').slick({
		  centerMode: true,
		  centerPadding: '60px',
		  slidesToShow: 3, // 한 번에 보여줄 사진의 갯수
      slidesToScroll: 1, // 한 번에 넘어갈 사진의 갯수
      Infinity: true, // 무한반복
      autoplay: true, // 자동 시작
      autoplaySpeed: 2000, //시간초, 1000ms == 1초
		  responsive: [
		    {
		      breakpoint: 768, // 반응형 구간
		      settings: { // 반응형 구간에 따른 설정 변경
		        arrows: false,
		        centerMode: true,
		        centerPadding: '40px',
		        slidesToShow: 3
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        arrows: false,
		        centerMode: true,
		        centerPadding: '40px',
		        slidesToShow: 1
		      }
		    }
		  ]
		});
  } );