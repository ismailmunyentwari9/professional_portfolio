let sectionModal = document.querySelector("#model");
const objectArray = [
  {
    code: "modal1",
    title: "Topic",
    media: "CANOPY",
    stack: "Back End Dev",
    time: "2015",
    picture: "./image/snap.png",
    alt: "snap image",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse voluptas nesciunt tempore explicabo velit illum ullam consequatur praesentium omnis, dolor quasi, ad eligendi voluptatum consequuntur officiis laudantium autem, exercitationem sapiente! Inventore tenetur nemo ullam doloremque hic quisquam provident reiciendis incidunt officia.",
    lang_one: "Html",
    lang_two: "Css",
    lang_three: "Javascript",
    lang_four: "Github",
    lang_five: "Ruby",
    lang_six: "Bootstrap",
    seeLive: "##",
    seekSource: "##",
  },
  {
    code: "modal2",
    title: "Multi-Post Stories",
    media: "FACEBOOK",
    stack: "Full Stack Dev",
    time: "2015",
    picture: "./image/professional.png ",
    alt: "professional image",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse voluptas nesciunt tempore explicabo velit illum ullam consequatur praesentium omnis, dolor quasi, ad eligendi voluptatum consequuntur officiis laudantium autem, exercitationem sapiente! Inventore tenetur nemo ullam doloremque hic quisquam provident reiciendis incidunt officia.",
    lang_one: "Html",
    lang_two: "Css",
    lang_three: "Javascript",
    lang_four: "Github",
    lang_five: "Ruby",
    lang_six: "Bootstrap",
    seekLive: "##",
    seekSource: "##",
  },
  {
    code: "modal3",
    title: "Facebook 360",
    media: "FACEBOOK",
    stack: "Full Stack Dev",
    time: "2015",
    picture: "./image/man.png",
    alt: "snap image",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse voluptas nesciunt tempore explicabo velit illum ullam consequatur praesentium omnis, dolor quasi, ad eligendi voluptatum consequuntur officiis laudantium autem, exercitationem sapiente! Inventore tenetur nemo ullam doloremque hic quisquam provident reiciendis incidunt officia.",
    lang_one: "Html",
    lang_two: "Css",
    lang_three: "Javascript",
    lang_four: "Github",
    lang_five: "Ruby",
    lang_six: "Bootstrap",
    seeLive: "##",
    seeSource: "##",
  },
  {
    code: "modal4",
    title: "Uber Navigation",
    media: "Uber",
    stack: "Lead Developer",
    time: "2018",
    picture: "./image/girl-pic.png",
    alt: "girl image",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse voluptas nesciunt tempore explicabo velit illum ullam consequatur praesentium omnis, dolor quasi, ad eligendi voluptatum consequuntur officiis laudantium autem, exercitationem sapiente! Inventore tenetur nemo ullam doloremque hic quisquam provident reiciendis incidunt officia.",
    lang_one: "Html",
    lang_two: "Css",
    lang_three: "Javascript",
    lang_four: "Github",
    lang_five: "Ruby",
    lang_six: "Bootstrap",
    seeLive: "###",
    seeSource: "###",
  },
];

const datas = objectArray.map((modals) => {
 return `
<div class="container" id="${modals.code}">
<div class="col-row">
<div class="col-12 modal-tonic" id="tonics">
    <p class="tonic tonic-times">
        ${modals.title}
        <span id="close-modal"><i class="fa fa-times"></i> </span>

    </p>
    <p class="cano-modal">
        <span class="canopy"> ${modals.media}</span>
        <span class="dots">.</span>
        <span class="backed">${modals.stack}</span>
        <span class="dots">.</span>
        <span class="year">${modals.time}</span>
    </p>
   
</div>
</div>
<div class="row">
<div class="col-12" id="picticture-holder">
    <img src="${modals.picture}" alt="${modals.alt}">
</div>
</div>
<div class="row" id="half-down-modal">
<div class="col-7" id="modal-contents">
    <p>${modals.info}</p>
</div>
<div class="col-5">
    <p>
        <span class="lang">${modals.lang_one}</span>
        <span class="lang">${modals.lang_two}</span>
        <span class="lang">${modals.lang_three}</span>
    </p>
    <p>
        <span class="lang">${modals.lang_four}</span>
        <span class="lang">${modals.lang_five}</span>
        <span class="lang">${modals.lang_six}</span>
     
        
    </p>
    <p>
      
        <button class="btn btn-default" id="see-project">
           <span>${modals.seeLive}</span> <span><i class="fa fa-arrow-up-right-from-square"></i> </span>
        </button>
        
        <button class="btn btn-default" id="see-project">
            <span>${modals.seeSource}</span> <span><i class="fa-brands fa-github"></i> </span>
        </button>     
    </p>
</div>
</div>

</div>
  `;
});

const html = datas.join("");
model.innerHTML += html;





const buttons = document.querySelectorAll("[data-modal-target]");
const blur = document.querySelector('.brul-box');

buttons.forEach((button) => {
button.addEventListener("click", (event) => {
const targetId = event.target.dataset.modalTarget;
if (targetId) {
  const modal = sectionModal.querySelector(`${targetId}`);
   modal.classList.add('active');
   modal.style.display='flex'
 blur.classList.add('blur');


}
});
});





