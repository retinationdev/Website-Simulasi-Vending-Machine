var screen = document.getElementById('screen');
var myWallet = document.getElementById('myWallet');
var myKembalian = document.getElementById('myKembalian');
var myDompet = document.getElementById('myDompet');
var boughtItem = document.getElementById('boughtItem');
var insertedCoinsDiv = document.getElementById('coins-inserted');
var coinChange = document.getElementById('coin-change');
var pac1 = document.getElementById('pac1');
var pac2 = document.getElementById('pac2');
var pac3 = document.getElementById('pac3');
var pac4 = document.getElementById('pac4');
var pac5 = document.getElementById('pac5');
var pac6 = document.getElementById('pac6');
var pac7 = document.getElementById('pac7');
var pac8 = document.getElementById('pac8');
var pac9 = document.getElementById('pac9');
var pac10 = document.getElementById('pac10');
var pac11 = document.getElementById('pac11');
var pac12 = document.getElementById('pac12');
var imgSources = ['pics/10rb.jpg', 'pics/5rb.jpg', 'pics/2rb.jpg', 'pics/1rb.jpg'];
var screenNum = 0;
var wallet = 100;
var kembalian = 100;
var dompet = 0;
var insertedCoins = 0;
var pc1 = 10;
var pc2 = 10;
var pc3 = 10;
var pc4 = 10;
var pc5 = 10;
var pc6 = 10;
var pc7 = 10;
var pc8 = 10;
var pc9 = 10;
var pc10 = 10;
var pc11 = 10;
var pc12 = 10;

var products = [10,2,8,4,7,5,4,3,6,4,6,5];
var faSpinner = document.getElementById('spinner');
var colapsedDiv = document.getElementsByClassName('collapse');

function enterNumber(num) {

        screenNum = parseFloat(screenNum.toString() + num.toString());
        screen.innerHTML = screenNum;
}

function deleteLastNum() {
    var num = screenNum.toString();
    var subNum = num.slice(0,-1);
    screenNum = parseFloat(subNum);
    screen.innerHTML = screenNum;
    
    if (screen.innerHTML == 'NaN') {
       if (insertedCoins == 0) {
					screen.innerHTML = 'Masukkan Uang';
				}
				if (insertedCoins == 1) {
					screen.innerHTML = 'Masukkan Uang Lagi !!!';
				}
				if (insertedCoins >= 2) {
					screen.innerHTML = 'Silahkan Pilih Barang!';
				}
        //else {
         //   screen.innerHTML = 'CHOOSE A PRODUCT';
        //}
        screenNum = 0;
    }
}

function enter() {
 if (screenNum <= 12) {
    if (screenNum == 1) {
        if (pc1 >=1){
			var i = products[screenNum -1];
        
				if (insertedCoins >= i) {
					insertedCoins -= i;
					insertedCoinsDiv.innerHTML = 'Rp.' + insertedCoins+'.000';
				}else {
					screen.innerHTML = 'Silahkan Pilih Barang!';
				// screen.innerHTML = 'INSERT MORE COINS 55';
					screenNum = 0;
				} 
				if (insertedCoins == 0) {
					screen.innerHTML = 'Masukkan Uang';
				}
			var product = document.getElementById('product' + screen.innerHTML);
			product.style.transition = '1s';
			product.style.opacity = 0;
			var productCopy = product.cloneNode();
			productCopy.style.opacity = 1;
			boughtItem.appendChild(productCopy);
			pc1 -= 1;
			pac1.innerHTML = pc1 +'/10';
			screen.innerHTML = 'Terima Kasih';

			setTimeout(function() {
				if (insertedCoins == 0) {
					screen.innerHTML = 'Masukkan Uang';
				}
				if (insertedCoins == 1) {
					screen.innerHTML = 'Masukkan Uang Lagi !!!';
				}
				if (insertedCoins >= 2) {
					screen.innerHTML = 'Silahkan Pilih Barang!';
				}
				//screen.innerHTML = 'INSERT COINS';
				screenNum = 0;
				product.style.opacity = 1;
				productCopy.style.opacity = 0;
			},2500);       
		}else{
			screen.innerHTML = 'Maaf, Barang Habis. Silahkan Pilih Kembali!';
			screenNum = 0;
		}
	}
	if (screenNum == 2) {
        if (pc2 >=1){
			var i = products[screenNum -1];
        
				if (insertedCoins >= i) {
					insertedCoins -= i;
					insertedCoinsDiv.innerHTML = 'Rp.' + insertedCoins+'.000';
				}else {
					screen.innerHTML = 'Silahkan Pilih Barang!';
				// screen.innerHTML = 'INSERT MORE COINS 55';
					screenNum = 0;
				} 
				if (insertedCoins == 0) {
					screen.innerHTML = 'Masukkan Uang';
				}
			var product = document.getElementById('product' + screen.innerHTML);
			product.style.transition = '1s';
			product.style.opacity = 0;
			var productCopy = product.cloneNode();
			productCopy.style.opacity = 1;
			boughtItem.appendChild(productCopy);
			pc2 -= 1;
			pac2.innerHTML = pc2 +'/10';
			screen.innerHTML = 'Terima Kasih';

			setTimeout(function() {
				if (insertedCoins == 0) {
					screen.innerHTML = 'Masukkan Uang';
				}
				if (insertedCoins == 1) {
					screen.innerHTML = 'Masukkan Uang Lagi !!!';
				}
				if (insertedCoins >= 2) {
					screen.innerHTML = 'Silahkan Pilih Barang!';
				}
				//screen.innerHTML = 'INSERT COINS';
				screenNum = 0;
				product.style.opacity = 1;
				productCopy.style.opacity = 0;
			},2500);       
		}else{
			screen.innerHTML = 'Maaf, Barang Habis. Silahkan Pilih Kembali!';
			screenNum = 0;
		}
    }
	if (screenNum == 3) {
        if (pc3 >=1){
			var i = products[screenNum -1];
        
				if (insertedCoins >= i) {
					insertedCoins -= i;
					insertedCoinsDiv.innerHTML = 'Rp.' + insertedCoins+'.000';
				}else {
					screen.innerHTML = 'Silahkan Pilih Barang!';
				// screen.innerHTML = 'INSERT MORE COINS 55';
					screenNum = 0;
				} 
				if (insertedCoins == 0) {
					screen.innerHTML = 'Masukkan Uang';
				}
			var product = document.getElementById('product' + screen.innerHTML);
			product.style.transition = '1s';
			product.style.opacity = 0;
			var productCopy = product.cloneNode();
			productCopy.style.opacity = 1;
			boughtItem.appendChild(productCopy);
			pc3 -= 1;
			pac3.innerHTML = pc3 +'/10';
			screen.innerHTML = 'Terima kasih';

			setTimeout(function() {
				if (insertedCoins == 0) {
					screen.innerHTML = 'Masukkan Uang';
				}
				if (insertedCoins == 1) {
					screen.innerHTML = 'Masukkan Uang Lagi !!!';
				}
				if (insertedCoins >= 2) {
					screen.innerHTML = 'Silahkan Pilih Barang!';
				}
				//screen.innerHTML = 'INSERT COINS';
				screenNum = 0;
				product.style.opacity = 1;
				productCopy.style.opacity = 0;
			},2500);       
		}else{
			screen.innerHTML = 'Maaf, Barang Habis. Silahkan Pilih Kembali!';
			screenNum = 0;
		}
    }
	if (screenNum == 4) {
        if (pc4 >=1){
			var i = products[screenNum -1];
        
				if (insertedCoins >= i) {
					insertedCoins -= i;
					insertedCoinsDiv.innerHTML = 'Rp.' + insertedCoins+'.000';
				}else {
					screen.innerHTML = 'Silahkan Pilih Barang!';
				// screen.innerHTML = 'INSERT MORE COINS 55';
					screenNum = 0;
				} 
				if (insertedCoins == 0) {
					screen.innerHTML = 'Masukka Uang';
				}
			var product = document.getElementById('product' + screen.innerHTML);
			product.style.transition = '1s';
			product.style.opacity = 0;
			var productCopy = product.cloneNode();
			productCopy.style.opacity = 1;
			boughtItem.appendChild(productCopy);
			pc4 -= 1;
			pac4.innerHTML = pc4 +'/10';
			screen.innerHTML = 'Terima Kasih';

			setTimeout(function() {
				if (insertedCoins == 0) {
					screen.innerHTML = 'Masukkan Uang';
				}
				if (insertedCoins == 1) {
					screen.innerHTML = 'Masukkan Uang Lagi !!!';
				}
				if (insertedCoins >= 2) {
					screen.innerHTML = 'Silahkan Pilih Barang!';
				}
				//screen.innerHTML = 'INSERT COINS';
				screenNum = 0;
				product.style.opacity = 1;
				productCopy.style.opacity = 0;
			},2500);       
		}else{
			screen.innerHTML = 'Maaf, Barang Habis. Silahkan Pilih Kembali!';
			screenNum = 0;
		}
    }
	if (screenNum == 5) {
        if (pc5 >=1){
			var i = products[screenNum -1];
        
				if (insertedCoins >= i) {
					insertedCoins -= i;
					insertedCoinsDiv.innerHTML = 'Rp.' + insertedCoins+'.000';
				}else {
					screen.innerHTML = 'Silahkan Pilih Barang!';
				// screen.innerHTML = 'INSERT MORE COINS 55';
					screenNum = 0;
				} 
				if (insertedCoins == 0) {
					screen.innerHTML = 'Masukkan Uang';
				}
			var product = document.getElementById('product' + screen.innerHTML);
			product.style.transition = '1s';
			product.style.opacity = 0;
			var productCopy = product.cloneNode();
			productCopy.style.opacity = 1;
			boughtItem.appendChild(productCopy);
			pc5 -= 1;
			pac5.innerHTML = pc5 +'/10';
			screen.innerHTML = 'Terima Kasih';

			setTimeout(function() {
				if (insertedCoins == 0) {
					screen.innerHTML = 'Masukkan Uang';
				}
				if (insertedCoins == 1) {
					screen.innerHTML = 'Masukkan Uang Lagi !!!';
				}
				if (insertedCoins >= 2) {
					screen.innerHTML = 'Silahkan Pilih Barang!';
				}
				//screen.innerHTML = 'INSERT COINS';
				screenNum = 0;
				product.style.opacity = 1;
				productCopy.style.opacity = 0;
			},2500);       
		}else{
			screen.innerHTML = 'Maaf, Barang Habis. Silahkan Pilih Kembali!';
			screenNum = 0;
		}
    }
	if (screenNum == 6) {
        if (pc6 >=1){
			var i = products[screenNum -1];
        
				if (insertedCoins >= i) {
					insertedCoins -= i;
					insertedCoinsDiv.innerHTML = 'Rp.' + insertedCoins+'.000';
				}else {
					screen.innerHTML = 'Silahkan Pilih Barang!';
				// screen.innerHTML = 'INSERT MORE COINS 55';
					screenNum = 0;
				} 
				if (insertedCoins == 0) {
					screen.innerHTML = 'Masukkan Uang';
				}
			var product = document.getElementById('product' + screen.innerHTML);
			product.style.transition = '1s';
			product.style.opacity = 0;
			var productCopy = product.cloneNode();
			productCopy.style.opacity = 1;
			boughtItem.appendChild(productCopy);
			pc6 -= 1;
			pac6.innerHTML = pc6 +'/10';
			screen.innerHTML = 'Terima Kasih';

			setTimeout(function() {
				if (insertedCoins == 0) {
					screen.innerHTML = 'Masukkan Uang';
				}
				if (insertedCoins == 1) {
					screen.innerHTML = 'Masukkan Uang Lagi !!!';
				}
				if (insertedCoins >= 2) {
					screen.innerHTML = 'Silahkan Pilih Barang!';
				}
				//screen.innerHTML = 'INSERT COINS';
				screenNum = 0;
				product.style.opacity = 1;
				productCopy.style.opacity = 0;
			},2500);       
		}else{
			screen.innerHTML = 'Maaf, Barang Habis. Silahkan Pilih Kembali!';
			screenNum = 0;
		}
    }
	if (screenNum == 7) {
        if (pc7 >=1){
			var i = products[screenNum -1];
        
				if (insertedCoins >= i) {
					insertedCoins -= i;
					insertedCoinsDiv.innerHTML = 'Rp.' + insertedCoins+'.000';
				}else {
					screen.innerHTML = 'Silahkan Pilih Barang!';
				// screen.innerHTML = 'INSERT MORE COINS 55';
					screenNum = 0;
				} 
				if (insertedCoins == 0) {
					screen.innerHTML = 'Masukkan Uang';
				}
			var product = document.getElementById('product' + screen.innerHTML);
			product.style.transition = '1s';
			product.style.opacity = 0;
			var productCopy = product.cloneNode();
			productCopy.style.opacity = 1;
			boughtItem.appendChild(productCopy);
			pc7 -= 1;
			pac7.innerHTML = pc7 +'/10';
			screen.innerHTML = 'Terima Kasih';

			setTimeout(function() {
				if (insertedCoins == 0) {
					screen.innerHTML = 'Masukkan Uang';
				}
				if (insertedCoins == 1) {
					screen.innerHTML = 'Masukkan Uang Lagi !!!';
				}
				if (insertedCoins >= 2) {
					screen.innerHTML = 'Silahkan Pilih Barang!';
				}
				//screen.innerHTML = 'INSERT COINS';
				screenNum = 0;
				product.style.opacity = 1;
				productCopy.style.opacity = 0;
			},2500);       
		}else{
			screen.innerHTML = 'Maaf, Barang Habis. Silahkan Pilih Kembali!';
			screenNum = 0;
		}
    }
	if (screenNum == 8) {
        if (pc8 >=1){
			var i = products[screenNum -1];
        
				if (insertedCoins >= i) {
					insertedCoins -= i;
					insertedCoinsDiv.innerHTML = 'Rp.' + insertedCoins+'.000';
				}else {
					screen.innerHTML = 'Silahkan Pilih Barang!';
				// screen.innerHTML = 'INSERT MORE COINS 55';
					screenNum = 0;
				} 
				if (insertedCoins == 0) {
					screen.innerHTML = 'Masukkan Uang';
				}
			var product = document.getElementById('product' + screen.innerHTML);
			product.style.transition = '1s';
			product.style.opacity = 0;
			var productCopy = product.cloneNode();
			productCopy.style.opacity = 1;
			boughtItem.appendChild(productCopy);
			pc8 -= 1;
			pac8.innerHTML = pc8 +'/10';
			screen.innerHTML = 'Terima Kasih';

			setTimeout(function() {
				if (insertedCoins == 0) {
					screen.innerHTML = 'Masukkan Uang';
				}
				if (insertedCoins == 1) {
					screen.innerHTML = 'Masukkan Uang Lagi !!!';
				}
				if (insertedCoins >= 2) {
					screen.innerHTML = 'Silahkan Pilih Barang!';
				}
				//screen.innerHTML = 'INSERT COINS';
				screenNum = 0;
				product.style.opacity = 1;
				productCopy.style.opacity = 0;
			},2500);       
		}else{
			screen.innerHTML = 'Maaf, Barang Habis. Silahkan Pilih Kembali!';
			screenNum = 0;
		}
    }
	if (screenNum == 9) {
        if (pc9 >=1){
			var i = products[screenNum -1];
        
				if (insertedCoins >= i) {
					insertedCoins -= i;
					insertedCoinsDiv.innerHTML = 'Rp.' + insertedCoins+'.000';
				}else {
					screen.innerHTML = 'Silahkan Pilih Barang!';
				// screen.innerHTML = 'INSERT MORE COINS 55';
					screenNum = 0;
				} 
				if (insertedCoins == 0) {
					screen.innerHTML = 'Masukkan Uang';
				}
			var product = document.getElementById('product' + screen.innerHTML);
			product.style.transition = '1s';
			product.style.opacity = 0;
			var productCopy = product.cloneNode();
			productCopy.style.opacity = 1;
			boughtItem.appendChild(productCopy);
			pc9 -= 1;
			pac9.innerHTML = pc9 +'/10';
			screen.innerHTML = 'Terima Kasih';

			setTimeout(function() {
				if (insertedCoins == 0) {
					screen.innerHTML = 'Masukkan Uang';
				}
				if (insertedCoins == 1) {
					screen.innerHTML = 'Masukkan Uang Lagi !!!';
				}
				if (insertedCoins >= 2) {
					screen.innerHTML = 'Silahkan Pilih Barang!';
				}
				//screen.innerHTML = 'INSERT COINS';
				screenNum = 0;
				product.style.opacity = 1;
				productCopy.style.opacity = 0;
			},2500);       
		}else{
			screen.innerHTML = 'Maaf, Barang Habis. Silahkan Pilih Kembali!';
			screenNum = 0;
		}
    }
	if (screenNum == 10) {
        if (pc10 >=1){
			var i = products[screenNum -1];
        
				if (insertedCoins >= i) {
					insertedCoins -= i;
					insertedCoinsDiv.innerHTML = 'Rp.' + insertedCoins+'.000';
				}else {
					screen.innerHTML = 'Silahkan Pilih Barang!';
				// screen.innerHTML = 'INSERT MORE COINS 55';
					screenNum = 0;
				} 
				if (insertedCoins == 0) {
					screen.innerHTML = 'Masukkan Uang';
				}
			var product = document.getElementById('product' + screen.innerHTML);
			product.style.transition = '1s';
			product.style.opacity = 0;
			var productCopy = product.cloneNode();
			productCopy.style.opacity = 1;
			boughtItem.appendChild(productCopy);
			pc10 -= 1;
			pac10.innerHTML = pc10 +'/10';
			screen.innerHTML = 'Terima Kasih';

			setTimeout(function() {
				if (insertedCoins == 0) {
					screen.innerHTML = 'Masukkan Uang';
				}
				if (insertedCoins == 1) {
					screen.innerHTML = 'Masukkan Uang Lagi !!!';
				}
				if (insertedCoins >= 2) {
					screen.innerHTML = 'Silahkan Pilih Barang!';
				}
				//screen.innerHTML = 'INSERT COINS';
				screenNum = 0;
				product.style.opacity = 1;
				productCopy.style.opacity = 0;
			},2500);       
		}else{
			screen.innerHTML = 'Maaf, Barang Habis. Silahkan Pilih Kembali!';
			screenNum = 0;
		}
    }
	if (screenNum == 11) {
        if (pc11 >=1){
			var i = products[screenNum -1];
        
				if (insertedCoins >= i) {
					insertedCoins -= i;
					insertedCoinsDiv.innerHTML = 'Rp.' + insertedCoins+'.000';
				}else {
					screen.innerHTML = 'Silahkan Pilih Barang!';
				// screen.innerHTML = 'INSERT MORE COINS 55';
					screenNum = 0;
				} 
				if (insertedCoins == 0) {
					screen.innerHTML = 'Masukkan Uang';
				}
			var product = document.getElementById('product' + screen.innerHTML);
			product.style.transition = '1s';
			product.style.opacity = 0;
			var productCopy = product.cloneNode();
			productCopy.style.opacity = 1;
			boughtItem.appendChild(productCopy);
			pc11 -= 1;
			pac11.innerHTML = pc11 +'/10';
			screen.innerHTML = 'Terima Kasih';

			setTimeout(function() {
				if (insertedCoins == 0) {
					screen.innerHTML = 'Masukkan Uang';
				}
				if (insertedCoins == 1) {
					screen.innerHTML = 'Masukkan Uang Lagi !!!';
				}
				if (insertedCoins >= 2) {
					screen.innerHTML = 'Silahkan Pilih Barang!';
				}
				//screen.innerHTML = 'INSERT COINS';
				screenNum = 0;
				product.style.opacity = 1;
				productCopy.style.opacity = 0;
			},2500);       
		}else{
			screen.innerHTML = 'Maaf, Barang Habis. Silahkan Pilih Kembali!';
			screenNum = 0;
		}
    }
	if (screenNum == 12) {
        if (pc12 >=1){
			var i = products[screenNum -1];
        
				if (insertedCoins >= i) {
					insertedCoins -= i;
					insertedCoinsDiv.innerHTML = 'Rp.' + insertedCoins+'.000';
				}else {
					screen.innerHTML = 'Silahkan Pilih Barang!';
				// screen.innerHTML = 'INSERT MORE COINS 55';
					screenNum = 0;
				} 
				if (insertedCoins == 0) {
					screen.innerHTML = 'Masukkan Uang';
				}
			var product = document.getElementById('product' + screen.innerHTML);
			product.style.transition = '1s';
			product.style.opacity = 0;
			var productCopy = product.cloneNode();
			productCopy.style.opacity = 1;
			boughtItem.appendChild(productCopy);
			pc12 -= 1;
			pac12.innerHTML = pc12 +'/10';
			screen.innerHTML = 'Terima Kasih';

			setTimeout(function() {
				if (insertedCoins == 0) {
					screen.innerHTML = 'Masukkan Uang';
				}
				if (insertedCoins == 1) {
					screen.innerHTML = 'Masukkan Uang Lagi !!!';
				}
				if (insertedCoins >= 2) {
					screen.innerHTML = 'Silahkan Pilih Barang!';
				}
				//screen.innerHTML = 'INSERT COINS';
				screenNum = 0;
				product.style.opacity = 1;
				productCopy.style.opacity = 0;
			},2500);       
		}else{
			screen.innerHTML = 'Maaf, Barang Habis. Silahkan Pilih Kembali!';
			screenNum = 0;
		}
    }
 }
    else {
        
        screen.innerHTML = 'Kami Hanya Mempunyai 12 Barang!';
		screenNum = 0;

        setTimeout(function() {
            
            if (insertedCoins == 0) {
                screen.innerHTML = 'Masukkan Uang';
            }
			if (insertedCoins == 1) {
                screen.innerHTML = 'Masukkan Uang Lagi!!!';
            }
			if (insertedCoins == 2) {
                screen.innerHTML = 'Silahkan Pilih Barang!!!';
            }
            //else {
            //    screen.innerHTML = 'Choose a product';
           // }
            screenNum = 0;

            }, 2500);
        }
}



$(function() {
        
        $('.coin').draggable({revert: true, helper: 'clone'});
        $('#coin-input').droppable({drop: function(event, ui) {
        $(this).append(ui.draggable.clone().css({
            'max-width': "750%",
            'max-height': '750%',
            'transform': 'rotateY(0deg)',
            'transition': '1.3s',
            'top': '4px',
            'left': '-27px'
        }).animate({
            'top': '-35px',
            'opacity': '0'
        }));

        var source = ui.draggable.attr('src');
        
        if (source == imgSources[0]) {
            wallet -= 10;
            insertedCoins += 10;
        }
        if (source == imgSources[1]) {
            wallet -= 5;
            insertedCoins += 5;
        }
        if (source == imgSources[2]) {
            wallet -= 2;
            insertedCoins += 2;
        }
        if (source == imgSources[3]) {
            wallet -= 1;
            insertedCoins += 1;
		}
		
      
        setTimeout(function() {
            if (insertedCoins == 1) {
                screen.innerHTML = 'Masukkan uang lagi!!!';
            }
			if (insertedCoins >= 2) {
                screen.innerHTML = 'Silahkan pilih barang';
            }
			
                //screen.innerHTML = 'Choose a product';
                screenNum = 0;
           
            }, 1000);
        
       // myWallet.innerHTML = '$ ' + wallet;
        insertedCoinsDiv.innerHTML = 'Rp.' + insertedCoins + '.000';
            
    }});
    
});

function shuffle() {
    var marginLeft = parseFloat(Math.random() * 20) + 'px';
	//var marginLeft = Math.floor((5*Math.random() * 5))+'px');
    return marginLeft;
}
		
function change(x) {
    var changeAmount = x;
    var count = 0;
    
    while (changeAmount>=10) {
        changeAmount -= 10;
        count += 1;
        }
    while (changeAmount>=5) {
        changeAmount -= 5;
        count += 1;
    }
    while (changeAmount>=2) {
        changeAmount -= 2;
        count += 1;
    }
    if (changeAmount==1) {
        count += 1;
    }
//algoritma greedy
    for (var i =0; i<count; i++) {
        var img = document.createElement('img');
        img.src = imgSources[i];
        img.className = 'imgChange';               
        img.style.transition = '1s';
        img.style.marginLeft = shuffle();
        coinChange.appendChild(img);
    }
    count = 0;  
    
    setTimeout(function() {
        var imgs = document.getElementsByClassName('imgChange');
        
        for (var i=0; i<imgs.length; i++) {
            imgs[i].style.opacity = '0';
        }
        
    }, 2000);
    
}

function withdraw() {
	//if (wallet>0) {
    //    wallet -= insertedCoins;
	//	 insertedCoinsDiv.innerHTML = '$ ' + 0;
	//	myWallet.innerHTML = '$ ' + wallet;
    //}
  if (insertedCoins<=10) {
	if (kembalian<=0) {
        screen.innerHTML = 'Coins Kembalian Habis. Silahkan pilih product!!!';
    }
	if (kembalian>1) {
        kembalian -= insertedCoins;
		dompet += insertedCoins;
		insertedCoinsDiv.innerHTML = 'Rp.' + 0;
		myKembalian.innerHTML = 'Rp.' + kembalian+'.000';
		myDompet.innerHTML = 'Rp.' + dompet+'.000';
		
		change(insertedCoins);
		screen.innerHTML = 'Masukkan Uang';
       // insertedCoins = 0;
    }
	
    //if (insertedCoins ==0) {
     //   screen.innerHTML = 'INSERT COINS 228';
    //}
  }
  else{
	  screen.innerHTML = 'Coins Kembalian tidak cukup!!!';
  }
}


$(function(){
	"use strict";
	//coin counter
	var coinBlock=false;
	//var cupBlock=false;
	var block=false;
	
	function isOperating(){
		//if(coinBlock===false&&cupBlock===false){
		if(coinBlock===false){
			block=false;
			counter.displayRefresh();
		}
	}
	var counter = {
		value: 0.00,
		clear: function(){
			this.value= 0.00;
			this.displayRefresh();
		},
		add: function(addval){
			if(this.value+addval<=100.00 && block===false){
				this.value+=parseFloat(addval);
				this.displayRefresh();
			}
		},
		displayRefresh: function(){
			var $display=$('#display');
			$display.text(this.value.toFixed(2));
		}
	};
	//coins
	var coin = {
		'10rp': {
			value: 10
		},
		'5rp': {
			value: 5
		},
		'2rp': {
			value: 2
		},
		'1rp': {
			value: 1
		}
	};

	
	$('#change').click(function(){
		//var credit=counter.value;
		var credit =insertedCoins; 
		var kembali =kembalian;
		if(credit>0 && kembali>=1){
			insertedCoins = 0;
			counter.clear();
			drop.changeval=(credit).toPrecision(2);
			drop.start();
			block=true;
		}
	});
	
	//coin drop

	var drop = {
		changeval: 0,
		changeCoinsVal: [],
		//change algorithm
		change: function(){
			var val=this.changeval;
			//var cointab=[50, 20, 10, 5, 2, 1];
			var cointab=[10, 5, 2, 1];
			for(var q=0; q<cointab.length; q++){
				while(cointab[q]<=val){
					val=(val-cointab[q]).toPrecision(2);
					this.changeCoinsVal.push(cointab[q]);
				}
			}
			var rt=this.changeCoinsVal;
			this.changeCoinsVal=[];
			return rt;
			
		},
		//change giver
		start: function(){
			function findByVal(coinVal){
				var obj=Object.keys(coin);
				for(var q=0; q<obj.length; q++){
					if(coin[obj[q]].value===coinVal){
						return obj[q];
					}
				}
			}
			var changeCoins=[];
			for(var q=0; q<this.change().length;q++){
				changeCoins.push(findByVal(this.change()[q]));
			}
			function giveCoin(changeCoin){
				$(changeCoin).clone().prependTo('#coin-dropp').animate({'top': '+=30px'}, 'slow').delay( 800 ).removeClass('ui-draggable ui-draggable-handle normal').addClass('dropped').css('margin-left', Math.floor((5*Math.random() * 5))+'px');
			//coinChange.appendChild(img);
			}
			coinBlock=true;
			//$('#display').text('-/-');
			//dispenser.cup.down();
			
			for(q=0;q<changeCoins.length;q++){
				
				giveCoin('#'+changeCoins[q]);
			
			}
			
			$('#change').click(function(){$('.dropped').fadeOut('slow', function(){
				this.remove();
				isOperating();
			});
				coinBlock=false;
			});
		}
	};
	
});


function spin() {
    if (~faSpinner.className.indexOf('closed')) {
        faSpinner.className = faSpinner.className.replace('closed', 'open');
    }
    else {
        faSpinner.className = faSpinner.className.replace('open', 'closed');
    }
}