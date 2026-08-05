/*==========================================
            EXPERIENCES DATA
==========================================*/

const experiences = {
guatape:{
        title:"Luxury Guatapé Experience",

        images:[
            "img/guatape1.jpg",
            "img/guatape2.jpg",
            "img/guatape3.jpg"
        ],

        people:"6 Personas",
        time:"8 Horas",
        tag:"Best seller’s experiences",
        description:"Disfruta una experiencia premium en Guatapé con aventura y exclusividad: visita la Piedra del Peñol, navega en yate privado, vive actividades acuáticas, disfruta un almuerzo gourmet, champagne y captura cada momento con fotógrafo profesional.."
    },


    comuna:{

        title:"Medellín by Night Experience",

        images:[
            "img/comuna1.jpg",
            "img/comuna2.jpg",
            "img/comuna3.jpg"
        ],

        people:"6 Personas",
        time:"5 Horas",
        tag:"Best seller’s experiences",
        description:"Vive una noche inolvidable en Medellín recorriendo sus mejores miradores, rooftops y zonas gastronómicas con transporte privado, disfrutando de la ciudad desde una perspectiva exclusiva."
    },


       adventure:{

        title:"Adventure & Wellness Experience",

        images:[
            "img/sende2.jpg",
            "img/sende3.jpg",
            "img/sende4.jpg"
        ],

        people:"5 Personas",
        time:"3 Horas",
        tag:"Aventura",
        description:"Disfruta una experiencia de conexión con la naturaleza que incluye senderismo al amanecer, yoga o meditación en la montaña y un desayuno saludable con una vista privilegiada del Valle de Aburrá."
    },


         flavor:{

        title:"Colombian Flavors Experience",

        images:[
            "img/flavor2.jpg",
            "img/flavor3.jpg",
            "img/flavor4.jpg"
        ],

        people:"5 Personas",
        time:"5 Horas",
        tag:"Sabores locales",
        description:"Disfruta una experiencia gastronómica que incluye un recorrido por un mercado local, degustación de frutas exóticas, clase de cocina, almuerzo preparado por el grupo y una cata de café y chocolate, guiada por expertos locales **con ingredientes frescos y tradicionales."
    },

    
         boat:{

        title:"Adventure & Wellness Experience",

        images:[
            "img/boat2.png",
            "img/boat3.png",
            "img/boat4.png"
        ],

        people:"2 Personas",
        time:"3 Horas",
        tag:"Premium",
        description:"Disfruta una experiencia en Jet Car por el embalse de Guatapé que incluye la oportunidad de conducir (según disponibilidad), instructor, chaleco salvavidas, fotos y videos, paradas panorámicas, además de bebidas y snacks durante el recorrido."
    },


       alt:{

        title:"Medellín From Above Experiencee",

        images:[
            "img/alt2.jpg",
            "img/alt3.png",
            "img/alt4.png"
        ],

        people:"4 Personas",
        time:"8 Horas",
        tag:"Amantes de las alturas",
        description:"Disfruta una experiencia completa que incluye desayuno en un mirador, vuelo en parapente, almuerzo gourmet, acceso a un rooftop con cóctel y un atardecer desde otro espectacular mirador."
    },

        cuat:{

        title:"Medellín From Above Experiencee",

        images:[
            "img/cuat2.jpg",
            "img/cuat3.jpg",
            "img/cuat4.jpg"
        ],

        people:"4 Personas",
        time:"4 Horas",
        tag:"Extremo",
        description:"Disfruta una experiencia sorpresa que incluye transporte privado, actividades cuidadosamente seleccionadas, gastronomía local, fotógrafo profesional y detalles exclusivos, mientras descubres el destino solo cuando comienza la aventura."
    },
         myst:{

        title:"Medellín From Above Experiencee",

        images:[
            "img/myst2.jpg",
            "img/myst3.jpg",
            "img/myst4.jpg"
        ],

        people:"6 Personas",
        time:"8 Horas",
        tag:"Misterio",
        description:"Disfruta una aventura que incluye cuatrimoto, canopy, caminata, visita a una cascada, almuerzo, cabalgata y una fogata para cerrar un día lleno de experiencias inolvidables."
    },
 
    coffee:{

        title:"Coffee Farm Experience",

        images:[
            "img/cafe2.jpg",
            "img/cafe3.jpg",
            "img/cafe4.jpg"
        ],

        people:"5 Personas",
        time:"3 Horas",
        tag:"Aventura",
        description:"Vive una experiencia cafetera completa con visita a una finca tradicional, recolección de café, degustación, preparación artesanal y un acercamiento a la cultura cafetera de Antioquia."
    },



        alejo:{

        title:"Comuna 13 Experience",

        images:[
            "img/alejo2.jpg",
            "img/alejo3.jpg",
            "img/alejo4.jpg"
        ],

        people:"8 Personas",
        time:"4 Horas",
        tag:"Crecimiento",
        description:"Vive una experiencia única en la Comuna 13 recorriendo sus coloridos murales, escaleras eléctricas, galerías de arte urbano, espectáculos culturales y descubriendo la historia que transformó este emblemático lugar de Medellín."
    },


          sofia:{

        title:"Culture  and History Experience",

        images:[
            "img/sofia2.jpg",
            "img/sofia3.jpg",
            "img/sofia4.jpg"
        ],

        people:"6 Personas",
        time:"7 Horas",
        tag:"Cultura",
        description:"Vive un recorrido cultural por Medellín que incluye la Plaza Botero, el Centro Histórico, un viaje en Metrocable con vistas panorámicas y una inmersión en el arte urbano, descubriendo la historia, identidad y transformación de la ciudad."
    },


          nico:{

        title:"Custome Experience",

        images:[
            "img/nico2.jpg",
            "img/nico3.jpg",
            "img/nico4.jpg"
        ],

        people:"2 Personas",
        time:"4 Horas",
        tag:"Best seller’s experiences",
        description:"Crea un plan personalizado eligiendo entre actividades culturales, gastronómicas, de aventura, naturaleza, vida nocturna, compras, pueblos cercanos y experiencias exclusivas, adaptadas a tus gustos, tiempo y presupuesto."
    }







};


/*==========================================
            ELEMENTS
==========================================*/

const modal = document.querySelector(".exp-modal");

const buttons = document.querySelectorAll(".exp-btn");
console.log("Botones encontrados:", buttons.length);

const closeBtn = document.querySelector(".exp-close");
let currentImages = [];
let currentImage = 0;

/*==========================================
            OPEN MODAL
==========================================*/

buttons.forEach(button => {
button.addEventListener("click", () => {

    console.log("CLICK EN BOTON");

    console.log("HTML DEL BOTON:", button.outerHTML);

const tour = button.dataset.tour;

    console.log("Tour:", tour);

    const data = experiences[tour];

    console.log("Data:", data);

console.log("Tour seleccionado:", tour);
console.log("Datos:", data);

        document.getElementById("modalTitle").textContent = data.title;

     currentImages = data.images;
currentImage = 0;

document.getElementById("modalImage").src = currentImages[currentImage];
        document.getElementById("modalPeople").textContent = data.people;

        document.getElementById("modalTime").textContent = data.time;

        document.querySelector(".exp-modal-tag").textContent = data.tag;

        document.getElementById("modalDescription").textContent = data.description;

        const list = document.getElementById("modalIncludes");

       

list.innerHTML = "";

if(data.includes){

    data.includes.forEach(item => {

        list.innerHTML += `<li>${item}</li>`;

    });

}

        modal.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


/*==========================================
            CLOSE MODAL
==========================================*/

closeBtn.addEventListener("click", () => {

    modal.classList.remove("active");

    document.body.style.overflow = "auto";

});


/*==========================================
        CLOSE CLICK OUTSIDE
==========================================*/

modal.addEventListener("click", (e) => {

    if(e.target === modal){

        modal.classList.remove("active");

        document.body.style.overflow = "auto";

    }

});


/*==========================================
        CLOSE ESC
==========================================*/

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        modal.classList.remove("active");

        document.body.style.overflow="auto";

    }

});
document.getElementById("nextImg").addEventListener("click",()=>{

    currentImage++;

    if(currentImage >= currentImages.length){
        currentImage = 0;
    }

    document.getElementById("modalImage").src = currentImages[currentImage];

});


document.getElementById("prevImg").addEventListener("click",()=>{

    currentImage--;

    if(currentImage < 0){
        currentImage = currentImages.length - 1;
    }

    document.getElementById("modalImage").src = currentImages[currentImage];

});
document.getElementById("reserveBtn").addEventListener("click",()=>{

    window.location.href = "contact.html";

});
console.log("JS CARGADO");