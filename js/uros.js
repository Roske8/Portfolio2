//--------------------------------- Nav ---------------------------------

var nizHref = ["#home","#about","#service","#work","#contact"];
var nizNaziv = ["Home","About","Service","Work","Contact"];
var navIspis = "";

navIspis += "<ul class='navbar-nav'>"

for(let i = 0 ; i < nizHref.length ; i++){
    navIspis +=`
        <li class="nav-item">
            <a class="nav-link js-scroll active" href="${nizHref[i]}">${nizNaziv[i]}</a>
        </li>
        `;
}
navIspis += "</ul>"
document.querySelector("#navbarDefault").innerHTML = navIspis;

//--------------------------------- About ---------------------------------

var nizAboutP = ["Name:","Profile","Email","Phone"]
var nizAboutS = ["Uros Joksimovic","full stack developer","uros23@gmail.com","(617) 557-0089"]
var aboutIspis = "";

aboutIspis += "<div class='about-info'>";

for(let i = 0; i<nizAboutP.length ; i++){
    aboutIspis +=`
        <p><span class="title-s"> ${nizAboutP[i]} </span> <span>${nizAboutS[i]}</span></p>
    `;
}
aboutIspis += "</div>";
document.querySelector("#abt-me").innerHTML = aboutIspis;

var nizSpanNaz = ["HTML","CSS","PHP","JAVASCRIPT"];
var nizSpanVre = ["85%","75%","50%","90%"];
var divStyleWid = ["width: 85%","width: 75%","width: 50%","width: 90%"];
var divAriaVal = ["85","75","50","90"];
var barIspis = ""

for(let i = 0 ; i < nizSpanNaz.length ; i++){
    barIspis +=`
        <span>${nizSpanNaz[i]}</span> <span class="pull-right">${nizSpanVre[i]}</span>
        <div class="progress">
        <div class="progress-bar" role="progressbar" style="${divStyleWid[i]};" aria-valuenow="${divAriaVal[i]}" aria-valuemin="0"
            aria-valuemax="100"></div>
        </div>
    `;
}
document.querySelector(".skill-mf").innerHTML = barIspis;

var nizLeadPIspis = "";
nizLeadPIspis += "<div class='title-box-2'> <h5 class='title-left'> About me </h5> </div>";

var nizLeadP = ["I am 21 years old. I live in Serbia and I'm from Belgrade. I want to help my clients to the best of my ability and also the best corporation.", "Although I'm still studying at the university of vocational studies for information and communication technologies, I had a lot of experience with work.", "In addition to programming, I also do graphic design, photography and marketing."];

for(let i = 0; i < nizLeadP.length ; i++){
    if(i==2){
        nizLeadPIspis +=`
        <p class="lead" id="moreInfo">
            ${nizLeadP[i]}
        </p><a href="#" id="buttonMore" class="btn btn-primary">Read more</a>
    `;
    }
    else{
        nizLeadPIspis +=`
        <p class="lead">
            ${nizLeadP[i]}
        </p>
    `;
    }
}
document.querySelector(".about-me").innerHTML = nizLeadPIspis;

//--------------------------------- Service ---------------------------------

var nizIcon = ["ion-monitor","ion-code-working","ion-ios-search","ion-android-phone-portrait","ion-paintbrush","ion-stats-bars"];
var nizTitleh = ["Web Design","Web Development","Promotion","Responsive Design","Graphic Design","Marketing Services"];
var nizTextP = ["Web design encompasses many different skills and disciplines in the production and maintenance of websites. Also Meaning creation of static websites.", "The latest and most modern applications, according to all world standards, will meet all your requirements and exceed your expectations.","Pesrfect knowledge of SEO methods learned from the best will ensure that you are always among the first in the searches of your site.", "How can a site exist without responsive? Nowadays, there are so many different devices and resolutions, so responsive is the key thing.","With each project, i come up with unique and attractive designs for your needs such as websites, applications and in general everything that belongs to UI/UX design.","After years of working with companies that have now reached millions of users, I'm here to provide the best methods for building an online presence."];

var nizSerIspis = ""

for(let i = 0; i < nizIcon.length ; i++){
    nizSerIspis +=`
        <div class="col-md-4">
            <div class="service-box">
            <div class="service-ico">
                <span class="ico-circle"><i class="${nizIcon[i]}"></i></span>
            </div>
            <div class="service-content">
                <h2 class="s-title">${nizTitleh[i]}</h2>
                <p class="s-description text-center">
                    ${nizTextP[i]}
                </p>
            </div>
            </div>
        </div>
    `;
}
document.querySelector("#sec-serv").innerHTML = nizSerIspis;
//--------------------------------- Portfolio ---------------------------------

var nizSecPorHr = ["img/work-1.jpg",""];
var nizSecPorImgSrc = ["img/work-1.png","img/work-2.png","img/work-3.png","img/work-4.png","img/work-5.png","img/work-6.png"];
var nizSecPorImgAlt = ["Site-1","Site-2","Site-3","Site-4","Site-5","Site-6"];
var nizSecPorH = ["Bussines services","Welcome to our shop","Full web hosting","Best music band ever","Easy with our gym","Start bussines"];
var nizSecPorS = ["Aria","Sock","Data web","Entro","Training studio","Big wing"];
var nizSecPorS1 = ["23 Apr. 2017","18 Sep. 2017","12 Oct. 2019","3 Feb. 2020","27 Nov. 2020","8 Dec. 2021"];

var nizSecPorIspis = "";

for(let i = 0; i < nizSecPorH.length ; i++){
    nizSecPorIspis +=`
        <div class="col-md-4">
            <div class="work-box">
                <a href="${nizSecPorHr[i]}" data-lightbox="gallery-mf">
                    <div class="work-img">
                        <img src="${nizSecPorImgSrc[i]}" alt="${nizSecPorImgAlt[i]}" class="img-fluid">
                    </div>
                    <div class="work-content">
                        <div class="row">
                            <div class="col-sm-8">
                                <h2 class="w-title">"${nizSecPorH[i]}"</h2>
                                    <div class="w-more">
                                        <span class="w-ctegory">"${nizSecPorS[i]}"</span> / <span class="w-date">"${nizSecPorS1[i]}"</span>
                                    </div>
                                </div>
                                    <div class="col-sm-4">
                                        <div class="w-like">
                                    <span class="ion-ios-plus-outline"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    `;
}
document.querySelector("#por-row").innerHTML = nizSecPorIspis;

//--------------------------------- Forma ---------------------------------

var nizFormSp = ["ion-ios-location","ion-ios-telephone","ion-email"];
var nizFormli = ["329 WASHINGTON ST BOSTON, MA 02108","(617) 557-0089","uros23@gmail.com"];

var formIspis = "<p class='more-info'>You can reach me on the given social networks or at this location</p>"

formIspis +="<ul class='list-ico'>"

for(let i = 0 ; i < nizFormSp.length ; i++){
    formIspis +=`
        <li><span class="${nizFormSp[i]}"></span>${nizFormli[i]}</li>
    `;
}
formIspis +="</ul>"
document.querySelector(".more-info").innerHTML = formIspis;

var nizFormHr = ["https://www.facebook.com/facebook/","https://www.instagram.com/","https://twitter.com/i/flow/login","https://www.pinterest.com/","Dokumentacija.pdf","sitemap.xml"];
var nizFromCl = ["ion-social-facebook","ion-social-instagram","ion-social-twitter","ion-social-pinterest","ion-android-document","ion-map"];

var formIspis1 = "<ul>"

for(let i = 0 ; i < nizFormHr.length ; i++){
    formIspis1 +=`
        <li><a href="${nizFormHr[i]}" target="_blank"><span class="ico-circle"><i class="${nizFromCl[i]}"></i></span></a></li>
    `;
}
formIspis1 += "</ul>"
document.querySelector(".socials").innerHTML = formIspis1;

var nizSel = ["Choose type of web site","Static","Dynamic","What is that?"];
var nizVal = ["0","ST","DM","WT"];
var sel = "<select class='custom-select my-1 mr-sm-2' id='inlineFormCustomSelectPref'>"
            
for(let i = 0 ; i<nizSel.length ; i++){
    sel +=`
    <option value="${nizVal[i]}">${nizSel[i]}</option>
    `;
}
sel += "</select> <p class='alert alert-danger mb-3 HidenS marginTopS'></p>"

document.querySelector("#dropDownList").innerHTML = sel;

var radioButtonId = ["flexRadioDefault1","flexRadioDefault2"];
var radioButtonLabel = ["Business","I just want a website"]
var radioButtonChecked = ["","checked"];
var radioButtonFor = "";
for(let i = 0 ; i < radioButtonId.length ; i++){
    radioButtonFor += `
        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="${radioButtonId[i]}" ${radioButtonChecked[i]}>
            <label class="form-check-label" for="${radioButtonId[i]}"> ${radioButtonLabel[i]} </label>
        </div>
    `;
}

document.querySelector("#radioButtonID").innerHTML = radioButtonFor;

//-----------------------------------------------------------------------------------------


window.onload = Start();

function Start(){
    let button = document.querySelector("#send");
    button.addEventListener("click", processingForm);

    var flName, Email, Subject, Message;
    var reflName, reEmail, reSubject;
    flName = document.querySelector("#name");
    Email = document.querySelector("#email");
    Subject = document.querySelector("#subject");
    Message = document.querySelector("#message");
    Ddown = document.querySelector("#inlineFormCustomSelectPref")
    reflName = /^[A-Z][a-z]{2,14}(\s[A-Z][a-z]{2,14})+$/;
    reEmail = /^[a-z]+([\.]?[a-z]*[\d]*)*\@[a-z]+([\.]?[a-z]+)*(\.[a-z]{2,3})+$/;
    reSubject = /^[A-Z][a-z]{2,14}$/;
    var messName = "The name and surname was not typed correctly. <br/> For example: Rick Astley";
    var messEmail = "The Email was not typed correctly. <br/> For example: uros23@gmail.com";
    var messSubject = "The name of the subject is not typed correctly. <br/> For example: Promotion";

    document.querySelector("#name").addEventListener("blur", function(){
        if(!reflName.test(flName.value)){
            flName.nextElementSibling.classList.remove("HidenS");
            flName.nextElementSibling.innerHTML = messName;
            flName.classList.add("warning")
        }
        else{
            flName.nextElementSibling.classList.add("HidenS");
            flName.nextElementSibling.innerHTML = "";
            flName.classList.remove("warning");
        }
    });

    document.querySelector("#email").addEventListener("blur", function(){
        if(!reEmail.test(Email.value)){
            Email.nextElementSibling.classList.remove("HidenS");
            Email.nextElementSibling.innerHTML = messEmail;
            Email.classList.add("warning")
        }
        else{
            Email.nextElementSibling.classList.add("HidenS");
            Email.nextElementSibling.innerHTML = "";
            Email.classList.remove("warning");
        }
    });

    document.querySelector("#subject").addEventListener("blur", function(){
        if(!reSubject.test(Subject.value)){
            Subject.nextElementSibling.classList.remove("HidenS");
            Subject.nextElementSibling.innerHTML = messSubject;
            Subject.classList.add("warning")
        }
        else{
            Subject.nextElementSibling.classList.add("HidenS");
            Subject.nextElementSibling.innerHTML = "";
            Subject.classList.remove("warning");
        }
    });

    document.querySelector("#message").addEventListener("blur", function(){
        if(Message.value.length < 15){
            Message.nextElementSibling.classList.remove("HidenS");
            Message.nextElementSibling.innerHTML = "There must be at last 15 characters.";
            Message.classList.add("warning")
        }
        else{
            Message.nextElementSibling.classList.add("HidenS");
            Message.nextElementSibling.innerHTML = "";
            Message.classList.remove("warning");
        }
    });


    document.querySelector("#inlineFormCustomSelectPref").addEventListener("change", function(){
        var dropDownList = Ddown.options[Ddown.selectedIndex].value;
        if(dropDownList == "0"){
            Ddown.nextElementSibling.classList.remove("HidenS");
            Ddown.nextElementSibling.innerHTML = "Choose something from the list";
            Ddown.classList.add("warning");
        }
        else{
            Ddown.nextElementSibling.classList.add("HidenS");
            Ddown.nextElementSibling.innerHTML = "";
            Ddown.classList.remove("warning");
        }
    });

    $("#moreInfo").hide();
    var count = 0;

    $("#buttonMore").click(function(x){
        x.preventDefault();
        if(count % 2 == 0){
            $("#moreInfo").show();
            $(this).html("Hide");
        }
        else{
            $("#moreInfo").hide();
            $(this).html("Show more");
        }
        count++;
    });

    $("#back-Top").hide();

    $(window).scroll(function(){
        if ($(this).scrollTop() > 1500) {
            $("#back-Top").fadeIn("slow");
          } else {
            $("#back-Top").fadeOut("slow");
          }
    });
    $("#back-Top").click(function(){
        $("html").animate({
            scrollTop: 0
        }, 1000)
    });

}
function processingForm(){
    var errors = 0
    let flName, Email, Subject, Message, Ddown , supp = 1, supp2 = 1;

    flName = document.querySelector("#name");
    Email = document.querySelector("#email");
    Subject = document.querySelector("#subject");
    Message = document.querySelector("#message");
    nizRadBtn = document.getElementsByName("flexRadioDefault");
    CheckBox = document.getElementById("flexCheckDefault");
    Ddown = document.querySelector("#inlineFormCustomSelectPref")

    var reflName, reEmail, reSubject;

    reflName = /^[A-Z][a-z]{2,14}(\s[A-Z][a-z]{2,14})+$/;
    reEmail = /^[a-z]+([\.]?[a-z]*[\d]*)*\@[a-z]+([\.]?[a-z]+)*(\.[a-z]{2,3})+$/;
    reSubject = /^[A-Z][a-z]{2,14}$/;
    
    errors += checkRegularExpressions(reflName,flName,"The name and surname was not typed correctly. For example: Rick Astley");
    errors += checkRegularExpressions(reEmail,Email,"The Email was not typed correctly. For example: uros23@gmail.com");
    errors += checkRegularExpressions(reSubject,Subject,"The name of the subject is not typed correctly. For example: Promotion");
    
    let StatRad = "";
    for(let i = 0 ; i < nizRadBtn.length ; i++){
        if(nizRadBtn[i].checked){
            StatRad = nizRadBtn[i].value
            break;
        }
    }

    let StatCheck = "";
    if(CheckBox.checked){ 
        StatCheck += CheckBox.value;
    }

    if(Message.value.length < 15){
        Message.nextElementSibling.classList.remove("HidenS");
        Message.nextElementSibling.innerHTML = "There must be at last 15 characters.";
        Message.classList.add("warning")
        supp = 1;
    }
    else{
        Message.nextElementSibling.classList.add("HidenS");
        Message.nextElementSibling.innerHTML = "";
        Message.classList.remove("warning");
        supp = 0;
    }

    var dropDownList = Ddown.options[Ddown.selectedIndex].value;

    if(dropDownList == "0"){
        Ddown.nextElementSibling.classList.remove("HidenS");
        Ddown.nextElementSibling.innerHTML = "Choose something from the list";
        Ddown.classList.add("warning");
        supp2 = 1;
    }
    else{
        Ddown.nextElementSibling.classList.add("HidenS");
        Ddown.nextElementSibling.innerHTML = "";
        Ddown.classList.remove("warning");
        supp2 = 0;
    }

    errors += supp2;
    errors += supp;

    if(!errors){
        let prints = document.querySelector("#print");
        prints.setAttribute("class", "alert alert-success mb-3");

        let printing = "Your message has been sent";
        prints.innerHTML = printing;
        document.getElementById("print");
        document.getElementById("form-send").reset();
    }

    
    console.log(errors);
}

function checkRegularExpressions(re, obj, mess){
    if(!re.test(obj.value)){
        obj.nextElementSibling.classList.remove("HidenS");
        obj.nextElementSibling.innerHTML = mess;
        obj.classList.add("warning")
        return 1;
    }
    else{
        obj.nextElementSibling.classList.add("HidenS");
        obj.nextElementSibling.innerHTML = "";
        obj.classList.remove("warning");
        return 0
    }
}

