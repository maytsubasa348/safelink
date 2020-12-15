Cara Membuat Safelink di Blog Utama Tanpa Tambahan Blog Lain

==================================================================
#Cara Membuat Artikel Safelink
1. buka dashboard Blogger kamu.
2. Pilih menu Halaman > Halaman Baru.
3. Buat artikel baru, saran saya buat tentang forex, bitcoin, asuransi, semacan itu lah. Tapi jangan di Publikasikan dulu.
4. Tempel kode dibawah ini di antar isi artikel yang telah kamu buat.

..................................
<div id='golink' class='separator' style='text-align:center'>
<div class='safelink' dir='ltr' trbidi='on'>
<div>
<span id='daplong' class='button1'>Please Wait...</span></div>
<script>var currentURL=location.href; var str = currentURL; var res = str.replace("https://www.alamatblog.com/p/safelink.html?url=", ""); document.write('<button id="download" class="visit-link button1" onclick="changeLink();" style="display:none;">Menuju Link</button>')</script></div>

.................................

a. Ganti URL https://www.alamatblog.com/p/safelink.html menjadi URL artikel halaman safelink anda.
b. Pastikan blog kamu telah memakai HTTPS dan bukan HTTP.
c. Jika muncul notifikasi HTML Anda tidak bisa diterima: Tag putus: BUTTON abaikan saja dan klik Tutup.

#Cara Memasang Kode Safelink
5. Pilih menu Tema > Edit HTML.
6. Tempel kode CSS dibawah ini, dibawah </style> atau diatas </style>.

..........................
/* Safelink by Bangopit.id */
.button1{display: inline-block;padding: 6px 20px;margin: 15px 0 10px 0;border: 1px solid #ddd;font-size: 13px;color: #414141;border-radius: 30px;cursor: pointer;transition: all 0.3s ease}
.button1:hover{background: linear-gradient(to right, #5b86e5, #36d1dc);border-color: #5b86e5;color: #fff}
.ads-top{padding: 5px 0 15px 0;text-align: center}
.ads-left,.ads-right{display: inline-block;float: left;margin: 5px 15px 0 0}
.ads-right{float: right;margin: 5px 0 0 15px}
.visit-link,#daplong{margin-right: 0;padding: 7px 30px;line-height: 25px;font-family: Lato, sans-serif;transition: all 0.3s ease-in-out}
.visit-link{padding: 7px 50px}
#HTML99,#HTML99 .widget-content{border: 0!important;margin: 0!important;padding: 0!important}
/* Responsive */
@media screen and (max-width: 768px){.ads-left,.ads-right{display: block;float: none;margin: 5px 0 0;text-align: center}}
.............................

7. Tempel kode Javascript dibawah ini, diatas </head>.

........
<b:if cond='data:blog.pageType == &quot;static_page&quot;'> <script>/*<![CDATA[*/ var currentURL=location.href; var str = currentURL; var res = str.replace("https://www.alamatblog.com/p/safelink.html?url=", ""); $(".visit-link").hide(); function changeLink(){var decodedString = Base64.decode(res); window.open(decodedString,'_blank')} function generate() {var linkDL = document.getElementById("download"), btn = document.getElementById("btn"), notif = document.getElementById("daplong"), direklink = document.getElementById("download").href, waktu = 5; var teks_waktu = document.createElement("span"); linkDL.parentNode.replaceChild(teks_waktu, linkDL); var id; id = setInterval(function () { waktu--; if (waktu < 0) { teks_waktu.parentNode.replaceChild(linkDL, teks_waktu); clearInterval(id); notif.style.display = "none"; linkDL.style.display = "inline-block"; } else { teks_waktu.innerHTML = "Link akan tampil dalam " + waktu.toString() + " Detik"; btn.style.display = "none";}}, 1000);} /*]]>*/</script> <script>/*<![CDATA[*/ var uri = window.location.toString(); if (uri.indexOf("%3D","%3D") > 0) { var clean_uri = uri.substring(0, uri.indexOf("%3D")); window.history.replaceState({}, document.title, clean_uri);} var uri = window.location.toString(); if (uri.indexOf("%3D%3D","%3D%3D") > 0) { var clean_uri = uri.substring(0, uri.indexOf("%3D%3D")); window.history.replaceState({}, document.title, clean_uri);} var uri = window.location.toString(); if (uri.indexOf("&m=1","&m=1") > 0) { var clean_uri = uri.substring(0, uri.indexOf("&m=1")); window.history.replaceState({}, document.title, clean_uri); } var uri = window.location.toString(); if (uri.indexOf("?m=1","?m=1") > 0) { var clean_uri = uri.substring(0, uri.indexOf("?m=1")); window.history.replaceState({}, document.title, clean_uri);}; var protocol=window.location.protocol.replace(/\:/g,''); if(protocol=='http'){ var url=window.location.href.replace('http','https'); window.location.replace(url);} /*]]>*/</script> </b:if>
........

a. Ganti URL https://www.alamatblog.com/p/safelink.html pada kode yang tertera di atas dengan URL halaman artikel safelink kamu tadi.
b. Ganti angka 5 dengan waktu lamanya safelink untuk menampilkan URL tujuan.

8. Buka menu Tata Letak > Tambahkan Gadget > HTML/JavaScript. Dan tempel kode dibawah ini.

........
<b:widget cond='data:view.isSingleItem' id='HTML99' locked='false' title='Safelink' type='HTML' version='1'>
 <b:widget-settings>
 <b:widget-setting name='content'/>
 </b:widget-setting></b:widget-settings>
 <b:includable id='main'>
 <div class='widget-content'>
 <script>/*<![CDATA[*/ var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(input){var output="";var chr1,chr2,chr3,enc1,enc2,enc3,enc4;var i=0;input=Base64._utf8_encode(input);while(i<input.length){chr1=input.charCodeAt(i++);chr2=input.charCodeAt(i++);chr3=input.charCodeAt(i++);enc1=chr1>>2;enc2=((chr1&3)<<4)|(chr2>>4);enc3=((chr2&15)<<2)|(chr3>>6);enc4=chr3&63;if(isNaN(chr2)){enc3=enc4=64;}else if(isNaN(chr3)){enc4=64;} output=output+ this._keyStr.charAt(enc1)+ this._keyStr.charAt(enc2)+ this._keyStr.charAt(enc3)+ this._keyStr.charAt(enc4);} return output;},decode:function(input){var output="";var chr1,chr2,chr3;var enc1,enc2,enc3,enc4;var i=0;input=input.replace(/[^A-Za-z0-9+/=]/g,"");while(i<input.length){enc1=this._keyStr.indexOf(input.charAt(i++));enc2=this._keyStr.indexOf(input.charAt(i++));enc3=this._keyStr.indexOf(input.charAt(i++));enc4=this._keyStr.indexOf(input.charAt(i++));chr1=(enc1<<2)|(enc2>>4);chr2=((enc2&15)<<4)|(enc3>>2);chr3=((enc3&3)<<6)|enc4;output=output+ String.fromCharCode(chr1);if(enc3!=64){output=output+ String.fromCharCode(chr2);} if(enc4!=64){output=output+ String.fromCharCode(chr3);}} output=Base64._utf8_decode(output);return output;},_utf8_encode:function(string){string=string.replace(/rn/g,"n");var utftext="";for(var n=0;n<string.length;n++){var c=string.charCodeAt(n);if(c<128){utftext+=String.fromCharCode(c);} else if((c>127)&&(c<2048)){utftext+=String.fromCharCode((c>>6)|192);utftext+=String.fromCharCode((c&63)|128);} else{utftext+=String.fromCharCode((c>>12)|224);utftext+=String.fromCharCode(((c>>6)&63)|128);utftext+=String.fromCharCode((c&63)|128);}} return utftext;},_utf8_decode:function(utftext){var string="";var i=0;var c=c1=c2=0;while(i<utftext.length){c=utftext.charCodeAt(i);if(c<128){string+=String.fromCharCode(c);i++;} else if((c>191)&&(c<224)){c2=utftext.charCodeAt(i+ 1);string+=String.fromCharCode(((c&31)<<6)|(c2&63));i+=2;} else{c2=utftext.charCodeAt(i+ 1);c3=utftext.charCodeAt(i+ 2);string+=String.fromCharCode(((c&15)<<12)|((c2&63)<<6)|(c3&63));i+=3;}} return string;}}; var encode=document.getElementById('encode'),decode=document.getElementById('decode'),output=document.getElementById('output'),input=document.getElementById('input');var User_ID="";var protected_links="";var a_to_va=0;var a_to_vb=0;var a_to_vc="";function auto_safelink(){auto_safeconvert();} function auto_safeconvert(){var a_to_vd=window.location.hostname;if(protected_links!=""&&!protected_links.match(a_to_vd)){protected_links+=", "+ a_to_vd;}else if(protected_links=="") {protected_links=a_to_vd;} var a_to_ve="";var a_to_vf=new Array();var a_to_vg=0;a_to_ve=document.getElementsByTagName("a");a_to_va=a_to_ve.length;a_to_vf=a_to_fa();a_to_vg=a_to_vf.length;var a_to_vh=false;var j=0;var a_to_vi="";for(var i=0;i<a_to_va;i++) {a_to_vh=false;j=0;while(a_to_vh==false&&j<a_to_vg) {a_to_vi=a_to_ve[i].href;if(a_to_vi.match(a_to_vf[j])||!a_to_vi||!a_to_vi.match("http")) {a_to_vh=true;} j++;} if(a_to_vh==false) {var encryptedUrl=Base64.encode(a_to_vi);a_to_ve[i].href="https://www.gunturr.com/p/safelink.html?url="+ encryptedUrl;a_to_ve[i].rel="nofollow";a_to_vb++;a_to_vc+=i+":::"+ a_to_ve[i].href+"n";}} var a_to_vj=document.getElementById("anonyminized");var a_to_vk=document.getElementById("found_links");if(a_to_vj) {a_to_vj.innerHTML+=a_to_vb;} if(a_to_vk) {a_to_vk.innerHTML+=a_to_va;}} function a_to_fa() {var a_to_vf=new Array();protected_links=protected_links.replace(" ","");a_to_vf=protected_links.split(",");return a_to_vf;} /*]]>*/</script>
 <script>/*<![CDATA[*/ protected_links = "facebook.com,fb.me,instagram.com,plus.google.com,twitter.com";auto_safelink(); /*]]>*/</script> 
 </div>
 </b:includable>
</b:widget>
.........


a. Ganti kembali URL https://www.gunturr.com/p/safelink.html dengan halaman safelink blog kamu.
b. Nanti setelah berhasil membuat safelink dihalaman statis semua URL exsternal blog anda secara otomatis akan di generate menjadi URL safelink dan diarahkan ke halaman statis safelink blog anda tanpa perlu melakukan cara manual.
c. Jika anda ingin beberapa URL situs di kecualikan seperti URL facebook, dan URL tidak perlu lagi di kecualikan karena sudah otomatis URL internal blog kamu tidak akan di generate safelink. Untuk bagian protected_links, tambah spasi atau koma (,) jika anda ingin menambahkan beberapa URL situs pengecualian.

#Langkah Terakhir
9. Buka menu Tema > Edit HTML dan cari tag <body>, biar lebih cepat tekan CTRL + F.
10. Ganti <body> menjadi <body onload='generate()'>.