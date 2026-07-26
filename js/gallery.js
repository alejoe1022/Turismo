/*==========================================
            GALLERY
==========================================*/

const galleryItems = document.querySelectorAll(".gallery-item");

const modal = document.querySelector(".gallery-modal");

const modalImg = document.getElementById("galleryImage");

const modalVideo = document.getElementById("galleryVideo");

const modalVideoSource = modalVideo.querySelector("source");

const prevBtn = document.querySelector(".gallery-prev");

const nextBtn = document.querySelector(".gallery-next");

const closeBtn = document.querySelector(".gallery-close");



let currentIndex = 0;

const gallery = [];
const currentItem = document.getElementById("currentItem");
const totalItems = document.getElementById("totalItems");
const thumbsContainer = document.getElementById("galleryThumbs");

/*==========================================
        SAVE FILES
==========================================*/

galleryItems.forEach(item => {

    const img = item.querySelector("img");

    const video = item.querySelector("video");

    if(img){

        gallery.push({

            type:"image",

            src:img.src

        });

    }

    if(video){

        gallery.push({

            type:"video",

            src:video.querySelector("source").src

        });

    }

});
totalItems.textContent = gallery.length;
gallery.forEach((item,index)=>{

    if(item.type==="image"){

        const thumb=document.createElement("img");

        thumb.src=item.src;

        thumb.classList.add("gallery-thumb");

        thumb.addEventListener("click",()=>{

            showItem(index);

        });

        thumbsContainer.appendChild(thumb);

    }

});
console.log("Miniaturas creadas:", thumbsContainer.children.length);
/*==========================================
        SHOW ITEM
==========================================*/

function showItem(index){

    currentIndex = index;
    currentItem.textContent = index + 1;
    document.querySelectorAll(".gallery-thumb").forEach((thumb,i)=>{

    thumb.classList.toggle("active", i===index);

});
    document.querySelectorAll(".gallery-thumbs img").forEach(img=>{

    img.classList.remove("active");

});

const thumbs=document.querySelectorAll(".gallery-thumbs img");

if(gallery[index].type==="image"){

    let imageIndex=0;

    for(let i=0;i<=index;i++){

        if(gallery[i].type==="image"){

            imageIndex++;

        }

    }

    thumbs[imageIndex-1].classList.add("active");

}

    modalImg.classList.remove("show");
    modalVideo.classList.remove("show");

    modalImg.style.display = "none";
    modalVideo.style.display = "none";

    modalVideo.pause();

    if(gallery[index].type==="image"){

        modalImg.src = gallery[index].src;

        modalImg.style.display = "block";

        setTimeout(()=>{

            modalImg.classList.add("show");

        },50);

    }

    else{

        modalVideoSource.src = gallery[index].src;

        modalVideo.load();

        modalVideo.style.display = "block";

        setTimeout(()=>{

            modalVideo.classList.add("show");

        },50);

    }

}

/*==========================================
        OPEN
==========================================*/

galleryItems.forEach((item,index)=>{

    item.addEventListener("click",()=>{

        modal.classList.add("active");

        document.body.style.overflow="hidden";

        showItem(index);

    });

});

/*==========================================
        NEXT
==========================================*/

nextBtn.addEventListener("click",()=>{

    currentIndex++;

    if(currentIndex>=gallery.length){

        currentIndex=0;

    }

    showItem(currentIndex);

});

/*==========================================
        PREVIOUS
==========================================*/

prevBtn.addEventListener("click",()=>{

    currentIndex--;

    if(currentIndex<0){

        currentIndex=gallery.length-1;

    }

    showItem(currentIndex);

});

/*==========================================
        CLOSE
==========================================*/

function closeGallery(){

    modal.classList.remove("active");

    modalVideo.pause();

    document.body.style.overflow="auto";

}

closeBtn.addEventListener("click",closeGallery);

modal.addEventListener("click",(e)=>{

    if(e.target===modal){

        closeGallery();

    }

});

document.addEventListener("keydown",(e)=>{

    if(!modal.classList.contains("active")) return;

    if(e.key==="Escape"){

        closeGallery();

    }

    if(e.key==="ArrowRight"){

        nextBtn.click();

    }

    if(e.key==="ArrowLeft"){

        prevBtn.click();

    }

});