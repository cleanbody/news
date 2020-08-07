           var resultWrapper = document.querySelector('.spin-result-wrapper');
           var wheel = document.querySelector('.wheel-img');
           $('a').click(function(e){
            e.preventDefault();
             var top = $('.toform').offset().top;
            $('body,html').animate({scrollTop: top}, 800);
        });
           function spin() {
               if (wheel.classList.contains('rotated')) {
                   resultWrapper.style.display = "block";
               } else {
                   wheel.classList.add('super-rotation');
                   setTimeout(function() {
                       resultWrapper.style.display = "block";
                   }, 8000);
                   setTimeout(function() {
                       $('.spin-wrapper').slideUp();
                        $('.order_block').slideDown();
                        start_timer();
                   }, 10000);
                   wheel.classList.add('rotated');
               }
           }
           var closePopup = document.querySelector('.close-popup');
		      var closePopup2 = document.querySelector('.pop-up-button');
           $('.close-popup, .pop-up-button, .hhh').click(function(e){
            
				$('.spin-result-wrapper').fadeOut();
				$('.spin-result-wrapper').fadeOut();
            
        });
		


 function outputDat(m, fullM) {
         var d = new Date();
         var p = new Date(d.getTime() - m * 86400000);
         var monthA = (fullM === false) ? '01,02,03,04,05,06,07,08,09,10,11,12'.split(',') : 'РЎРЏР Р…Р Р†Р В°РЎР‚РЎРЏ,РЎвЂћР ВµР Р†РЎР‚Р В°Р В»РЎРЏ,Р СР В°РЎР‚РЎвЂљР В°,Р В°Р С—РЎР‚Р ВµР В»РЎРЏ,Р СР В°РЎРЏ,Р С‘РЎР‹Р Р…РЎРЏ,Р С‘РЎР‹Р В»РЎРЏ,Р В°Р Р†Р С–РЎС“РЎРѓРЎвЂљР В°,РЎРѓР ВµР Р…РЎвЂљРЎРЏР В±РЎР‚РЎРЏ,Р С•Р С”РЎвЂљРЎРЏР В±РЎР‚РЎРЏ,Р Р…Р С•РЎРЏР В±РЎР‚РЎРЏ,Р Т‘Р ВµР С”Р В°Р В±РЎР‚РЎРЏ'.split(',');
         var w = p.getDate();
         var ret = (fullM === false) ? p.getDate() + '.' + monthA[p.getMonth()] + '.' + p.getFullYear() : p.getDate() + ' ' + monthA[p.getMonth()] + ' ' + p.getFullYear();
         return ret;
      }
  
  var time = 600;
  var intr;
  function start_timer() {
  intr = setInterval(tick, 1000);
  }
  function tick() {
  time = time-1;
  var mins = Math.floor(time/60);
  var secs = time - mins*60;
  if( mins == 0 && secs == 0 ) {
  clearInterval(intr);
  }
  secs = secs >= 10 ? secs : "0"+secs;
  $("#min").html("0"+mins);
  $("#sec").html(secs);
  }
  