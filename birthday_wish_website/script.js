// Script to show/hide the special note
const specialNoteBtn = document.querySelector('.special-note-btn');
const specialNote = document.querySelector('.special-note');

specialNoteBtn.addEventListener('click', () => {
    specialNote.classList.toggle('hidden');
});

// Autoplay the song at 2:08
const birthdaySong = document.getElementById('birthdaySong');
birthdaySong.currentTime = 128; // 128 seconds = 2 minutes 8 seconds
