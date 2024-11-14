// Lista de 20 videos
const videos = [
    "https://media.icfcdn.com/fee05b/72/121708570/a08263b5b3f8405b8e5a69ca821fcba5/media.mp4",
    "https://media.icfcdn.com/dcbf60/32/120348766/a73185c8f61d42af992b3e1ad737acf1/media.mp4",
    "https://media.icfcdn.com/9deeea/72/127107566/930ab37176604e36b403dd1f4dbb7860/media.mp4",
    "https://media.icfcdn.com/9deeea/80/113228709/1cb52b4c541e42e5a8f40249bfc66f01/media.mp4",
    "https://media.icfcdn.com/9deeea/44/114276707/79fcf29b7f204f9ea77d3965d687e173/media.mp4",
    "https://media.icfcdn.com/9deeea/0/116377395/06e5cdb96f0c42edadd3e76354b03358/media.mp4",
    "https://media.icfcdn.com/9deeea/28/118263038/41f5f9b9858244c683b9130127673d5b/media.mp4",
    "https://media.icfcdn.com/fee05b/40/118263038/4bf90f1fdb3948e1b276990a1d8a111d/media.mp4",
    "https://media.icfcdn.com/9deeea/52/113228709/1a61ebb258c6477799f88e97117398ac/media.mp4",
    "https://media.icfcdn.com/9deeea/28/125937776/5b3c3d77dfd24f2f926242930b5eed6a/media.mp4",
    "https://media.icfcdn.com/dcbf60/12/125882045/28c22a1536bc4040bde90bfb818e6594/media.mp4",
    "https://media.icfcdn.com/dcbf60/96/113228709/b36ce1de0e954c75a6d5a748776e0fb3/media.mp4",
    "https://media.icfcdn.com/9deeea/80/99955153/4f28175e30374a3993e3570cd1a690ab/media.mp4",
    "https://media.icfcdn.com/9deeea/12/23086375/2ac47749edb7478f8c7c527f3279dc41/media.mp4",
    "https://media.icfcdn.com/9deeea/40/127107566/c11db0046566443d8fb8834a39797588/media.mp4",
    "https://media.icfcdn.com/9deeea/44/126009788/d02b3d31acdb480a94b8fbad5bc5b377/media.mp4",
    "https://media.icfcdn.com/9deeea/20/118540570/3ca04687441a402f82ced7dd89373057/media.mp4",
    "https://media.icfcdn.com/9deeea/8/113933210/9029efa057fc488f83ec9c48f4c11f7c/media.mp4",
    "https://media.icfcdn.com/024a06/36/123390840/6725f0492952431e8e21cc270a0db96a/media.mp4",
    "https://media.icfcdn.com/024a06/28/123390840/559ee8df72a442d7a6bceaaeb7ee3778/media.mp4",
    "https://media.icfcdn.com/fee05b/32/113285150/5378a043a510475ca65093e2490fedb0/media.mp4",
    "https://media.icfcdn.com/86a4d5/24/113285150/4a1cbe3a44724e8da5c283d2ea9923d3/media.mp4",
    "https://media.icfcdn.com/fee05b/64/113285150/ac616fd835024172874a4c3c58da653e/media.mp4",
    "https://media.icfcdn.com/fee05b/68/113285150/cde63ae478de4729b0f67d92544d3e9f/media.mp4",
    "https://media.icfcdn.com/9deeea/16/114276707/e2ebd401ea2e461d935074ec68d50789/media.mp4",
    "https://media.icfcdn.com/86a4d5/56/117145675/ce7bfffd35d54ce0b18a8e1f4d7e27e7/media.mp4",
    "https://media.icfcdn.com/dcbf60/88/122782546/9aa70a5cdd284d398db8865a930ee625/media.mp4",
    "https://media.icfcdn.com/9deeea/32/126312231/bc750afbeaa948f39d177db5693f3c5d/media.mp4",
    "https://media.icfcdn.com/6d97a9/8/116534383/a156eb5f200b4ce49c56ab255fef46ac/media.mp4",
    "https://media.icfcdn.com/fee05b/88/72653096/818dbe10b49a4783a10b7806ae836235/media.mp4",
    "https://media.icfcdn.com/024a06/76/72653096/1ed8c87ca7a04c53876561c5c9d21ad2/media.mp4",
    "https://media.icfcdn.com/dcbf60/8/126839035/f5f82a1ed8404ae1a441c318bdc95bdc/media.mp4",
    "https://media.icfcdn.com/024a06/84/120595921/98bf89bf820e4d36b198cfefe00dec0d/media.mp4",
    "https://media.icfcdn.com/9deeea/28/123729050/8fedfd38a9d84658898a9b0d0508d76a/media.mp4",
    "https://media.icfcdn.com/9deeea/60/123729050/10acf04de77f4853a513d3371f2a8beb/media.mp4",
    "https://media.icfcdn.com/9deeea/36/126443412/996458377ee04dabb4df4e3018bf8d69/media.mp4",
    "https://media.icfcdn.com/86a4d5/88/116377490/8c622bd6744d42f991f727f59f83aa6a/media.mp4",
    "https://media.icfcdn.com/a04315/0/120595921/45041f26088a42e7afc112d99046bc9d/media.mp4",
    "https://media.icfcdn.com/9deeea/44/126566877/364bc697430441d68086767d7cbd1d52/media.mp4",
    "https://media.icfcdn.com/9deeea/92/88782800/f14db3d4d79b4eeaa31d98f137029763/media.mp4",
    "https://media.icfcdn.com/9deeea/36/113747819/1ff64b8fd7ca4b1a82eb3242ddab93e8/media.mp4",
    "https://media.icfcdn.com/9deeea/76/94325776/29d658f4a25b48718e6954b0052fef7a/media.mp4",
    "https://media.icfcdn.com/86a4d5/20/114030749/13efd75fbd7145e88dfd93d0d8dbc549/media.mp4",
    "https://media.icfcdn.com/9deeea/76/120549542/1d5c266290554372b43f283b10a16955/media.mp4",
    "https://media.icfcdn.com/9deeea/40/103727269/fffe7a3954594a0aa82766d5fd3ec9d5/media.mp4",
    "https://media.icfcdn.com/9deeea/80/103727269/2cc3d51e269f45f687560e4f8b370ffb/media.mp4",
    "https://media.icfcdn.com/9deeea/36/125387138/80d2ab49809848a2a29d38225d50a224/media.mp4",
    
];

// Función para cargar videos en las secciones
function loadVideos() {
    const sections = document.querySelectorAll('.section');
    const numSections = sections.length;
    const shuffledVideos = Array.from(videos).sort(() => 0.5 - Math.random()); // Mezclar el orden de los videos
    sections.forEach((section, index) => {
        const videoIndex = index % videos.length;
        const videoElement = document.createElement('video');
        videoElement.src = shuffledVideos[videoIndex]; // Asignar un video a cada sección
        videoElement.autoplay = true;
        videoElement.muted = true;
        videoElement.loop = true;
        videoElement.setAttribute('playsinline', ''); // Para iOS
        videoElement.className = 'vjs-tech video__player'; // Agregar clases
        videoElement.setAttribute('tabindex', '-1');
        videoElement.dataset.id = '6514'; // Agregar atributos data
        videoElement.id = 'video-6514_html5_api';
        section.innerHTML = ''; // Limpiar contenido existente
        section.appendChild(videoElement);

        // Cargar el primer video antes que los demás
        if (index === 0) {
            videoElement.addEventListener('canplaythrough', function () {
                // Una vez que el primer video haya cargado, cargar los demás
                for (var i = 1; i < numSections; i++) {
                    const nextVideoIndex = (index + i) % videos.length;
                    const nextVideoElement = document.createElement('video');
                    nextVideoElement.src = shuffledVideos[nextVideoIndex];
                    nextVideoElement.autoplay = true;
                    nextVideoElement.muted = true;
                    nextVideoElement.loop = true;
                    nextVideoElement.setAttribute('playsinline', '');
                    nextVideoElement.className = 'vjs-tech video__player';
                    nextVideoElement.setAttribute('tabindex', '-1');
                    nextVideoElement.dataset.id = '6514';
                    nextVideoElement.id = 'video-6514_html5_api';
                    sections[i].innerHTML = '';
                    sections[i].appendChild(nextVideoElement);
                }
            });
        }
    });
}

// Cargar videos al cargar la página
window.onload = loadVideos;



//Nombre y description acciones 


// Array con nombres aleatorios
document.addEventListener("DOMContentLoaded", function () {
    var nombresAleatorios = ["🇵🇹 Lorena Caterina 🇵🇹 ",
        "🇫🇮 Ana Maria 🇫🇮",
        "🇨🇦 Carolina Garcia 🇨🇦",
        "🇦🇺 NAKARY MILLER 🇦🇺",
        "🇺🇸 GRACIELA CATERINA 🇺🇸",
        "🇻🇪 Valentina Ribeiro 🇻🇪",
        "🇻🇪 G R A C I E L A 💘 🇻🇪",
        "🇵🇪 Mariana López 🇵🇪",
        "🇷🇴 Andrei Popescu 🇷🇴",
        "🇧🇪 Emma Dubois 🇧🇪",
        "🇬🇷 Ioanna Papadopoulos 🇬🇷",
        "🇨🇱 Matías Silva 🇨🇱",
        "🇭🇺 Levente Kovács 🇭🇺",
        "🇸🇦 Fatima Al-Mansoori 🇸🇦",
        "🇲🇽 Alejandro Hernández 🇲🇽",
        "🇵🇦 Camila González 🇵🇦",
        "🇨🇮 Aminata Diop 🇨🇮",
        "🇨🇴 Isabela Ríos 🇨🇴",
        "🇮🇹 Sofia Santoro 🇮🇹",
        "🇳🇴 Emilie Andersen 🇳🇴",
        "🇦🇹 Lara Hofmann 🇦🇹",
        "🇳🇿 Harper Wilson 🇳🇿",
        "🇨🇿 Klára Nováková 🇨🇿",
        "🇮🇪 Aoife Murphy 🇮🇪",
        "🇨🇭 Alessia Rossi 🇨🇭",
        "🇮🇳 Aarav Patel 🇮🇳",
        "🇦🇪 Layla Khan 🇦🇪",
        "🇸🇪 Malin Lindström 🇸🇪",
        "🇿🇦 Thabo Molefe 🇿🇦",
        "🇳🇱 Daan van der Berg 🇳🇱",
        "🇧🇷 Maria da Silva 🇧🇷",
        "🇫🇷 Léa Dubois 🇫🇷",
        "🇰🇷 Min-jun Kim 🇰🇷",
        "🇯🇵 Yui Tanaka 🇯🇵",
        "🇩🇪 Lena Müller 🇩🇪",
        "🇬🇧 Oliver Hughes 🇬🇧",
        "🇪🇸 Marta García 🇪🇸",];

    for (var i = 1; i <= 5; i++) {
        var indiceAleatorio = Math.floor(Math.random() * nombresAleatorios.length);
        var elementoH2 = document.getElementById("randomName" + i);
        if (elementoH2) {
            elementoH2.textContent = nombresAleatorios[indiceAleatorio];
            nombresAleatorios.splice(indiceAleatorio, 1); // Eliminar el nombre seleccionado del array
        }
    }
});




//Descrition

document.addEventListener("DOMContentLoaded", function () {
    var descripcionesAleatorias = [
        "Watch Me Masturbate Live ❤️",
        "📞🔥 Phone Calls, 💥 Custom Videos, 😋 Live Broadcasts, Your Name on My 🍒TITS!",
        "Made in Czech 🇨🇿🍺 Big smile and big...heart🍒 Cum join me in my adventures as I show off just for you baby ❤️",
        "❣ Exclusive VIP Content 🔞|Seduction and Sensuality Unleashed 🦊| Monthly Nude Delights📸",
        "😻 Model, ❤️ student 🔥I make exclusive videos, 📞calls! Sexsting LIVE -broadcasts!!🍑🍒 #fuck",
        "Model, 20 y.o 🇪🇸 Wanna chat with me? Check all my links 😍",
        "Hi I’m Molly! ❤️ Just a sweet girl who loves to be naughty 🤫😈💋CHECK ALL MY LINKS via IG! ✨",
        "🔥 Hot and ready for you! 😈 Let's play together and make your fantasies come true 💦",
        "🍑 Curvy and fun! 💋 Join me for exclusive content and live shows 📸",
        "🌟 Your favorite cam girl! 🎥 Live shows, custom videos, and more 🔞",
        "💖 Sensual and seductive! 😘 Exclusive content just for you 💌",
        "🔥 Naughty but nice! 💋 Cum play with me and let's have some fun 🍒",
        "🌺 Sweet and sexy! 💫 Join me for a private show and let's get wild together 🚀",
        "👅 Ready to please! 💦 Let's explore your wildest desires together 🔥",
        "🔞 Explicit content and live shows! 💋 Cum chat with me and let's have some fun 😘",
        "🌈 Fun and flirty! 💖 Exclusive content and private shows just for you 🌟",
        "💥 Wild and willing! 🔞 Let's get naughty together and have an unforgettable time 😈",
        "Hi, my name is Mia, I love traveling, sex and making videos 💖",
        "Hi, I'm Anna 23 yo 💋, ready for smth hot?🔞🔞",
        "Welcome to my page 💎 You will notice that I am always sweet and friendly! 💗 Feel free to ask me anything - I'll always chat with you😌",

    ];

    for (var i = 1; i <= 5; i++) {
        var indiceAleatorio = Math.floor(Math.random() * descripcionesAleatorias.length);
        var elementoP = document.getElementById("randomDescription" + i);
        if (elementoP) {
            elementoP.textContent = descripcionesAleatorias[indiceAleatorio];
            descripcionesAleatorias.splice(indiceAleatorio, 1); // Eliminar la descripción seleccionada del array
        }
    }
});




//Avatar imagen

document.addEventListener("DOMContentLoaded", function () {
    var imagenesAleatorias = [
        "/img/Screenshot_5.jpg",
        "https://photos.xgroovy.com/contents/albums/sources/616000/616523/665920.jpg",
        "https://photos.xgroovy.com/contents/albums/sources/401000/401631/399868.jpg",
        "https://photos.xgroovy.com/contents/albums/sources/71000/71150/66783.jpg",
        "https://photos.xgroovy.com/contents/albums/sources/619000/619585/670246.jpg",
        "https://photos.xgroovy.com/contents/albums/sources/176000/176045/171823.jpg",
        "https://photos.xgroovy.com/contents/albums/sources/159000/159022/154792.jpg",
        "https://img.goodfon.com/original/2048x2048/9/6c/malena-morgan-model-devushka-6401.jpg",
        "https://i.pinimg.com/564x/02/dc/06/02dc060cb7fa3f106a86769af44ee3dd.jpg",
        "https://i.pinimg.com/564x/06/ce/71/06ce711727df122dcf8d19601398aaf3.jpg",
        "https://i.pinimg.com/564x/61/08/51/61085143b742c6f9ae0c6114cd72970f.jpg",
        "https://i.pinimg.com/564x/fa/95/2b/fa952b14103fc088794e85c2e5b83801.jpg",
        "https://i.pinimg.com/736x/a3/30/f4/a330f413e7c3f1ccb226ba651a57cc9d.jpg",
        "https://i.pinimg.com/736x/25/49/19/254919a4886d98c956c3f39df0ffff9b.jpg",
        "https://i.pinimg.com/564x/24/62/15/24621573b3191406415ebb4df1e311a0.jpg",
        "https://i.pinimg.com/564x/fb/6c/08/fb6c0817758cf418e32273aef7d6dde7.jpg",
        "https://i.pinimg.com/564x/e5/93/50/e593500025e0fb40deaabb7484fa6fa8.jpg",
    ];

    for (var i = 1; i <= 5; i++) {
        var indiceAleatorio = Math.floor(Math.random() * imagenesAleatorias.length);
        var elementoImg = document.getElementById("randomImage" + i).getElementsByTagName("img")[0];
        if (elementoImg) {
            elementoImg.src = imagenesAleatorias[indiceAleatorio];
            imagenesAleatorias.splice(indiceAleatorio, 1); // Eliminar la imagen seleccionada del array
        }
    }
});


