var i=0;
var activate=0;
var button_text_1="Home";
var button_text_2="Back";
const button = document.getElementById('top');
const header = document.getElementById('head');
var image=document.getElementById("image");
var imgs=new Array('img/rasp_pon.png','img/vtornik.jpeg','img/sreda.jpeg','img/chetverg.jpg','img/pyatnisa.jpg','img/subbota.jpeg');
var imgs_home=new Array('img/ponedelnik_t.jpeg','img/vtornik_t.jpeg','img/sreda_t.jpeg','img/chetverg_t.jpeg','img/pyatnisa_t.jpeg','img/subbota_t.jpeg');
function imgsrc(){
	if (activate==0){
		i++;
    	i%=imgs.length;
    	image.src = imgs[i];
	}
	else{
		i++;
    	i%=imgs_home.length;
    	image.src = imgs_home[i];
	}
}
function imgsrc_back(){
	if (activate==0){
		i--;
		if (i=="-1")
        {
			i=imgs.length-1;
		}
		image.src = imgs[i];
	}
	else{
		i--;
		if (i=="-1")
        {
			i=imgs_home.length-1;
		}
		image.src = imgs_home[i];
	}
}
function imgscr_home(){
	if (activate==0){
		image.src = imgs_home[i];
		button.textContent = 'Расписание';
		header.textContent = 'УЧИТЕЛЬСКАЯ';
		activate=1;
	}
	else{
		image.src = imgs[i];
		activate=0;
		button.textContent = 'Учительская';
		header.textContent = 'РАСПИСАНИЕ УРОКОВ';
	}
}