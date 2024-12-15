// Initialize AOS animation library
AOS.init();

// Declare a variable for the music source
var musik = "";

// Select the audio element
var audio = document.querySelector(".audio");

// Set the audio source if musik is not empty
if (musik) {
    audio.src = musik;
}

// Function to start the application
function mulai() {
    // Play the audio
    audio.play();

    // Scroll to the top of the page
    window.scrollTo(0, 0);

    // Hide the opening screen
    document.querySelector(".open").style.opacity = "0";

    // Enable vertical scrolling
    document.querySelector(".body").style.overflowY = "scroll";

    // Remove the opening screen from the DOM after a delay
    setTimeout(function() {
        document.querySelector(".open").style.display = "none";
    }, 1200);
}

function wa(isi) {
    window.open("https://api.whatsapp.com/send?text=Makasih%20ya%20udah%20inget%20ulang%20tahun%20aku,%20di%20hari%20spesial%20ini%20aku%20ingin%20" + encodeURIComponent(isi));
}

async function tanya() {
    const { value: kado } = await swal.fire({
        imageUrl: './asset/foto1.png',
        title: 'Di hari spesial ini, ingin apa?',
        input: 'text',
        showCancelButton: false
    });

    if (kado) {
        await swal.fire({
            imageUrl: './asset/wa1.png',
            title: 'Kirim jawabannya ke Wa Grams ya!',
        });
        wa(kado);
    }
}
