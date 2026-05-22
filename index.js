// ================= SONG DATA =================
const songs = [
    {
        title:"I wish i hated you",
        artist:"Ariana Grande",
        album:"Album 1",
        albumArt:"image/ar1.jpg",
        audioSrc:"music/Ariana Grande/i wish i hated You.mp3"
    },
    {
        title:"Imperfect for you",
        artist:"Ariana Grande",
        album:"Album 1",
        albumArt:"image/ar2.jpg",
        audioSrc:"music/Ariana Grande/imperfect for you.mp3"
    },
    {
        title:"Supernatural",
        artist:"Ariana Grande",
        album:"Album 1",
        albumArt:"image/ar3.jpg",
        audioSrc:"music/Ariana Grande/supernatural.mp3"
    },
    {
        title:"The boy is mine",
        artist:"Ariana Grande",
        album:"Album 1",
        albumArt:"image/ar4.jpg",
        audioSrc:"music/Ariana Grande/the boy is mine.mp3"
    },
    {
        title:"We can't be friends",
        artist:"Ariana Grande",
        album:"Album 1",
        albumArt:"image/ar5.jpg",
        audioSrc:"music/Ariana Grande/we can't be friends (wait for your love).mp3"
    },
    {
        title:"Thank u, Next",
        artist:"Ariana Grande",
        album:"Album 1",
        albumArt:"image/ar5.jpg",
        audioSrc:"music/Ariana Grande/thank u, next.mp3"
    },
    {
        title:"Angel Number Ten Toes",
        artist:"Chris Brown",
        album:"Album 2",
        albumArt:"image/cb1.jpg",
        audioSrc:"music/Chris Brown/Angel Numbers Ten Toes.mp3"
    },
    {
        title:"Deuces",
        artist:"Chris Brown",
        album:"Album 2",
        albumArt:"image/cb2.jpg",
        audioSrc:"music/Chris Brown/Deuces (feat. Tyga & Kevin McCall).mp3"
    },
    {
        title:"New Flame",
        artist:"Chris Brown",
        album:"Album 2",
        albumArt:"image/cb3.jpg",
        audioSrc:"music/Chris Brown/New Flame (feat. Usher & Rick Ross).mp3"
    },
    {
        title:"No Air",
        artist:"Chris Brown",
        album:"Album 2",
        albumArt:"image/cb4.jpg",
        audioSrc:"music/Chris Brown/No Air (feat. Chris Brown).mp3"
    },
    {
        title:"No Guidance",
        artist:"Chris Brown",
        album:"Album 2",
        albumArt:"image/cb5.jpg",
        audioSrc:"music/Chris Brown/No Guidance (feat. Drake).mp3"
    },
    {
        title:"Common Denominator",
        artist:"Justin Bieber",
        album:"Album 3",
        albumArt:"image/jb1.jpg",
        audioSrc:"music/Justin Bieber/Common Denominator - iTunes Bonus.mp3"
    },
    {
        title:"Eenie Meenie",
        artist:"Justin Bieber",
        album:"Album 3",
        albumArt:"image/jb2.jpg",
        audioSrc:"music/Justin Bieber/Eenie Meenie.mp3"
    },
    {
        title:"Favorite Girl",
        artist:"Justin Bieber",
        album:"Album 3",
        albumArt:"image/jb3.jpg",
        audioSrc:"music/Justin Bieber/Favorite Girl (Live) - Acoustic Version.mp3"
    },
    {
        title:"Never say never",
        artist:"Justin Bieber",
        album:"Album 3",
        albumArt:"image/jb4.jpg",
        audioSrc:"music/Justin Bieber/Never Say Never - Acoustic Version.mp3"
    },
    {
        title:"One less lonely girl",
        artist:"Justin Bieber",
        album:"Album 3",
        albumArt:"image/jb5.jpg",
        audioSrc:"music/Justin Bieber/One Less Lonely Girl - Acoustic.mp3"
    },
    {
        title:"Brooklyn Baby",
        artist:"Lana Del Rey",
        album:"Album 4",
        albumArt:"image/ld1.jpg",
        audioSrc:"music/Lana Del Rey/Brooklyn Baby.mp3"
    },
    {
        title:"Million Dollar Man",
        artist:"Lana Del Rey",
        album:"Album 4",
        albumArt:"image/ld2.jpg",
        audioSrc:"music/Lana Del Rey/Million Dollar Man.mp3"
    },
    {
        title:"Old Money",
        artist:"Lana Del Rey",
        album:"Album 4",
        albumArt:"image/ld3.jpg",
        audioSrc:"music/Lana Del Rey/Old Money.mp3"
    },
    {
        title:"Salvatore",
        artist:"Lana Del Rey",
        album:"Album 4",
        albumArt:"image/ld4.jpg",
        audioSrc:"music/Lana Del Rey/Salvatore.mp3"
    },
    {
        title:"Summertime Sadness",
        artist:"Lana Del Rey",
        album:"Album 4",
        albumArt:"image/ld5.jpg",
        audioSrc:"music/Lana Del Rey/Summertime Sadness.mp3"
    },
    {
        title:"Go Go Juice",
        artist:"Sabrina Carpenter",
        album:"Album 5",
        albumArt:"image/sb1.jpg",
        audioSrc:"music/Sabrina Carpenter/Go Go Juice.mp3"
    },
    {
        title:"Goodbye",
        artist:"Sabrina Carpenter",
        album:"Album 5",
        albumArt:"image/sb2.jpg",
        audioSrc:"music/Sabrina Carpenter/Goodbye.mp3"
    },
    {
        title:"Manchild",
        artist:"Sabrina Carpenter",
        album:"Album 5",
        albumArt:"image/sb3.jpg",
        audioSrc:"music/Sabrina Carpenter/Manchild.mp3"
    },
    {
        title:"Nobody's Son",
        artist:"Sabrina Carpenter",
        album:"Album 5",
        albumArt:"image/sb4.jpg",
        audioSrc:"music/Sabrina Carpenter/Nobody's Son.mp3"
    },
    {
        title:"We Almost Broke Up",
        artist:"Sabrina Carpenter",
        album:"Album 5",
        albumArt:"image/sb5.jpg",
        audioSrc:"music/Sabrina Carpenter/We Almost Broke Up Again Last Night.mp3"
    }
];

// ================= ELEMENTS =================
const audioPlayer = document.getElementById("audioPlayer");
const playlistContainer = document.getElementById("playlist");
const currentArtistTitle = document.getElementById("current-artist-title");
const miniCover = document.getElementById("miniCover");
const miniTitle = document.getElementById("miniTitle");
const miniArtist = document.getElementById("miniArtist");
const progressBar = document.getElementById("progressBar");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");
const volumeSlider = document.getElementById("volumeSlider");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

// FIXED: TARGET CORRESPONDING IDs FROM YOUR HTML
const favoriteBtn = document.getElementById("favorite-btn");
const favoriteList = document.getElementById("favorite-list");

// ================= APPLICATION STATE =================
let recentlyPlayed = [];
let currentSongIndex = 0;

// FIXED: LOADS CORRECT STORAGE HISTORIES ON STARTUP
let favoriteSongs = JSON.parse(localStorage.getItem("favorites")) || [];

// ================= RENDER PLAYLIST =================
function renderPlaylist(filterArtist = null){
    playlistContainer.innerHTML = "";
    const filteredSongs = filterArtist
        ? songs.filter(song => song.artist.toLowerCase() === filterArtist.toLowerCase())
        : songs;

    if(filterArtist){
        currentArtistTitle.textContent = `${filterArtist}'s Songs`;
    } else {
        currentArtistTitle.textContent = "All Songs";
    }

    filteredSongs.forEach(song => {
        const originalIndex = songs.findIndex(s => s.audioSrc === song.audioSrc);
        const songDiv = document.createElement("div");
        songDiv.className = "song-item";
        songDiv.innerHTML = `
            <img src="${song.albumArt}">
            <div>
                <div><strong>${song.title}</strong></div>
                <div style="font-size:13px;color:#aaa;">${song.artist}</div>
            </div>
        `;
        songDiv.addEventListener("click", ()=>{
            playSong(originalIndex);
        });
        playlistContainer.appendChild(songDiv);
    });
}

// ================= PLAY SONG =================
function playSong(index){
    if(!songs[index]) return;
    currentSongIndex = index;

    audioPlayer.src = songs[index].audioSrc;
    miniCover.src = songs[index].albumArt;
    miniTitle.textContent = songs[index].title;
    miniArtist.textContent = songs[index].artist;

    audioPlayer.load();
    audioPlayer.play()
        .then(()=>{
            playPauseBtn.textContent = "⏸";
        })
        .catch(err => console.log(err));

    updateRecentlyPlayed(songs[index]);
    
    // FIXED: Updates button color states and playlist highlight states instantly upon playing
    updateFavoriteButton();
    renderFavorites();
}

// ================= PLAYER CONTROLS =================
const playPauseBtn = document.getElementById("playPauseBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

playPauseBtn.addEventListener("click", ()=>{
    if(!audioPlayer.src){
        playSong(0);
        return;
    }
    if(!audioPlayer.paused){
        audioPlayer.pause();
        playPauseBtn.textContent = "▶";
    } else {
        audioPlayer.play();
        playPauseBtn.textContent = "⏸";
    }
});

nextBtn.addEventListener("click", ()=>{
    currentSongIndex++;
    if(currentSongIndex >= songs.length){
        currentSongIndex = 0;
    }
    playSong(currentSongIndex);
});

prevBtn.addEventListener("click", ()=>{
    currentSongIndex--;
    if(currentSongIndex < 0){
        currentSongIndex = songs.length - 1;
    }
    playSong(currentSongIndex);
});

audioPlayer.addEventListener("ended", ()=>{
    currentSongIndex++;
    if(currentSongIndex >= songs.length){
        currentSongIndex = 0;
    }
    playSong(currentSongIndex);
});

// ================= RECENTLY PLAYED =================
function updateRecentlyPlayed(song){
    const recentContainer = document.getElementById("recentContainer");
    recentlyPlayed = recentlyPlayed.filter(item => item.audioSrc !== song.audioSrc);
    recentlyPlayed.unshift(song);

    if(recentlyPlayed.length > 15){
        recentlyPlayed.pop();
    }

    recentContainer.innerHTML = "";
    recentlyPlayed.forEach(item => {
        const div = document.createElement("div");
        div.innerHTML = `
            <div style="display:flex;align-items:center;gap:10px;margin-top:10px;cursor:pointer;">
                <img src="${item.albumArt}" style="width:45px;height:45px;border-radius:6px;object-fit:cover;">
                <div>
                    <div>${item.title}</div>
                    <div style="font-size:12px;color:#aaa;">${item.artist}</div>
                </div>
            </div>
        `;
        div.addEventListener("click", ()=>{
            const index = songs.findIndex(song => song.audioSrc === item.audioSrc);
            playSong(index);
        });
        recentContainer.appendChild(div);
    });
}

// ================= PROGRESS BAR =================
audioPlayer.addEventListener("timeupdate", ()=>{
    progressBar.max = audioPlayer.duration;
    progressBar.value = audioPlayer.currentTime;

    let currentMinutes = Math.floor(audioPlayer.currentTime / 60);
    let currentSeconds = Math.floor(audioPlayer.currentTime % 60);
    if(currentSeconds < 10){ currentSeconds = "0" + currentSeconds; }
    currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;

    let durationMinutes = Math.floor(audioPlayer.duration / 60);
    let durationSeconds = Math.floor(audioPlayer.duration % 60);
    if(durationSeconds < 10){ durationSeconds = "0" + durationSeconds; }
    if(!isNaN(durationMinutes)){
        durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
    }
});

progressBar.addEventListener("input", ()=>{
    audioPlayer.currentTime = progressBar.value;
});

// ================= VOLUME =================
volumeSlider.addEventListener("input", ()=>{
    audioPlayer.volume = volumeSlider.value;
});

// ================= ARTIST FILTER =================
document.querySelectorAll(".artist-item").forEach(item => {
    item.addEventListener("click", ()=>{
        const selectedArtist = item.getAttribute("data-artist");
        renderPlaylist(selectedArtist);
    });
});

// ================= SEARCH =================
searchInput.addEventListener("input", ()=>{
    const query = searchInput.value.toLowerCase().trim();
    searchResults.innerHTML = "";
    if(!query) return;

    const filteredSongs = songs.filter(song =>
        song.title.toLowerCase().includes(query) || song.artist.toLowerCase().includes(query)
    );

    filteredSongs.forEach(song => {
        const result = document.createElement("div");
        result.className = "search-result";
        result.innerHTML = `${song.title} - ${song.artist}`;
        result.addEventListener("click", () => {
            const index = songs.findIndex(s => s.audioSrc === song.audioSrc);
            playSong(index);
            searchResults.innerHTML = "";
            searchInput.value = "";
        });
        searchResults.appendChild(result);
    });
});

// ================= FAVORITES ENGINE =================
// FIXED: Extracted safely from scope loops to clean global levels
if (favoriteBtn) {
    favoriteBtn.addEventListener("click", () => {
        if(!audioPlayer.src) return; 

        const current = songs[currentSongIndex];
        const exists = favoriteSongs.find(song => song.audioSrc === current.audioSrc);

        if (exists) {
            favoriteSongs = favoriteSongs.filter(song => song.audioSrc !== current.audioSrc);
        } else {
            favoriteSongs.push(current);
        }

        localStorage.setItem("favorites", JSON.stringify(favoriteSongs));
        updateFavoriteButton();
        renderFavorites();
    });
}

function updateFavoriteButton() {
    if (!favoriteBtn) return;
    if (!audioPlayer.src) {
        favoriteBtn.innerHTML = '<i class="fa-regular fa-heart"></i>';
        favoriteBtn.classList.remove("active");
        return;
    }
    const current = songs[currentSongIndex];
    const isFavorite = favoriteSongs.find(song => song.audioSrc === current.audioSrc);

    if (isFavorite) {
        favoriteBtn.innerHTML = '<i class="fa-solid fa-heart"></i>';
        favoriteBtn.classList.add("active");
    } else {
        favoriteBtn.innerHTML = '<i class="fa-regular fa-heart"></i>';
        favoriteBtn.classList.remove("active");
    }
}

function renderFavorites() {
    if (!favoriteList) return;
    favoriteList.innerHTML = "";

    favoriteSongs.forEach(song => {
        const div = document.createElement("div");
        div.classList.add("favorite-item");

        const originalIndex = songs.findIndex(s => s.audioSrc === song.audioSrc);
        if (originalIndex === currentSongIndex && audioPlayer.src) {
            div.classList.add("active-song");
        }

        // FIXED: Swapped 'recent-text' wrapper to match CSS selector classes rules
        div.innerHTML = `
            <img src="${song.albumArt}">
            <div class="recent-text">
                <strong>${song.title}</strong>
                <span>${song.artist}</span>
            </div>
        `;

        div.addEventListener("click", () => {
            playSong(originalIndex);
        });

        favoriteList.appendChild(div);
    });
}




/// ================= VIEW NAVIGATION & DYNAMIC PAGES =================

// Base view containers
const homeView = document.getElementById("homeView");
const albumsView = document.getElementById("albumsView");
const exploreView = document.getElementById("exploreView");

// Sidebar buttons
const homeBtn = document.getElementById("homeBtn");
const albumBtn = document.getElementById("albumBtn");
const expBtn = document.getElementById("expBtn");
const playlistBtn = document.getElementById("playlistBtn");

// Sub-containers inside Albums & Explore pages
const albumsGridScreen = document.getElementById("albumsGridScreen");
const albumDetailsScreen = document.getElementById("albumDetailsScreen");
const albumsContainer = document.getElementById("albumsContainer");
const albumSongsContainer = document.getElementById("albumSongsContainer");
const albumDetailsTitle = document.getElementById("albumDetailsTitle");
const albumDetailsArtist = document.getElementById("albumDetailsArtist");
const backToAlbumsBtn = document.getElementById("backToAlbumsBtn");

const exploreCategoriesScreen = document.getElementById("exploreCategoriesScreen");
const genreDetailsScreen = document.getElementById("genreDetailsScreen");
const genreSongsContainer = document.getElementById("genreSongsContainer");
const genreDetailsTitle = document.getElementById("genreDetailsTitle");
const backToExploreBtn = document.getElementById("backToExploreBtn");

// Central View Switcher
function switchView(targetView, activeButton) {
    homeView.style.display = "none";
    albumsView.style.display = "none";
    exploreView.style.display = "none";
    
    targetView.style.display = "flex";
    
    const allButtons = [homeBtn, albumBtn, expBtn, playlistBtn];
    allButtons.forEach(btn => btn.classList.remove("active-btn"));
    activeButton.classList.add("active-btn");
}

// Global reuse tool for generating song row clicks inside Albums or Explore panels
function renderSongRowList(targetContainer, songsToRender) {
    targetContainer.innerHTML = "";
    
    songsToRender.forEach(song => {
        // Find true position mapping inside global song source file array to play smoothly
        const globalIndex = songs.findIndex(s => s.audioSrc === song.audioSrc);
        
        const songDiv = document.createElement("div");
        songDiv.className = "song-item";
        songDiv.innerHTML = `
            <img src="${song.albumArt}" style="width:50px; height:50px; object-fit:cover; border-radius:4px; margin-right:10px;">
            <div>
                <div><strong>${song.title}</strong></div>
                <div style="font-size:13px; color:#aaa;">${song.artist}</div>
            </div>
        `;
        
        songDiv.addEventListener("click", () => {
            playSong(globalIndex);
        });
        
        targetContainer.appendChild(songDiv);
    });
}

// DYNAMIC ALBUMS GENERATION
function renderAlbumsGrid() {
    albumsContainer.innerHTML = "";
    albumsGridScreen.style.display = "block";
    albumDetailsScreen.style.display = "none";
    
    // Group song objects by Album string names 
    const uniqueAlbums = [];
    const processedAlbumNames = new Set();
    
    songs.forEach(song => {
        if (!processedAlbumNames.has(song.album)) {
            processedAlbumNames.add(song.album);
            uniqueAlbums.push({
                name: song.album,
                artist: song.artist,
                art: song.albumArt
            });
        }
    });
    
    // Construct Grid DOM elements dynamically
    uniqueAlbums.forEach(album => {
    // Determine the image source path
    let coverImage = album.art;
    
    // Explicit override rule: If this is Album 1, use your popular artist pic path
    if (album.name === "Album 1") {
        coverImage = "image/arpic.jpg";
    }

    if (album.name === "Album 2") {
        coverImage = "image/cb.jpg";
    }
    if (album.name === "Album 3") {
        coverImage = "image/jb.jpg";
    }
    if (album.name === "Album 4") {
        coverImage = "image/ld.jpg";
    }
    if (album.name === "Album 5") {
        coverImage = "image/sb.jpg";
    }

        const card = document.createElement("div");
        card.className = "album-card";
        card.innerHTML = `
            <div class="album-img-wrapper">
                <img src="${coverImage}" alt="${album.name}">
            </div>
            <h4>${album.name}</h4>
            <p>${album.artist}</p>
        `;
        
        card.addEventListener("click", () => {
            // Filter global dataset array matching chosen group name
            const matchingTracks = songs.filter(s => s.album === album.name);
            
            albumsGridScreen.style.display = "none";
            albumDetailsScreen.style.display = "block";
            albumDetailsTitle.textContent = album.name;
            albumDetailsArtist.textContent = album.artist;
            
            renderSongRowList(albumSongsContainer, matchingTracks);
        });
        
        albumsContainer.appendChild(card);
    });
}

// DYNAMIC EXPLORE CONTENT MAPPING BY ARTIST DEFINED SPECIFICATIONS
function openGenreView(genreName) {
    genreDetailsTitle.textContent = `${genreName} Hits`;
    exploreCategoriesScreen.style.display = "none";
    genreDetailsScreen.style.display = "block";
    
    let filteredGenreSongs = [];
    
    if (genreName === "Pop") {
        // Pop contains Ariana Grande, Justin Bieber, and Sabrina Carpenter
        filteredGenreSongs = songs.filter(s => 
            s.artist === "Ariana Grande" || 
            s.artist === "Justin Bieber" || 
            s.artist === "Sabrina Carpenter"
        );
    } else if (genreName === "Country Side") {
        // Country Side contains Lana Del Rey
        filteredGenreSongs = songs.filter(s => s.artist === "Lana Del Rey");
    } else if (genreName === "R&B") {
        // R&B contains Chris Brown
        filteredGenreSongs = songs.filter(s => s.artist === "Chris Brown");
    }
    
    renderSongRowList(genreSongsContainer, filteredGenreSongs);
}

// Sidebar Primary Button Actions
homeBtn.addEventListener("click", () => {
    switchView(homeView, homeBtn);
    renderPlaylist(); 
});

albumBtn.addEventListener("click", () => {
    switchView(albumsView, albumBtn);
    renderAlbumsGrid();
});

expBtn.addEventListener("click", () => {
    switchView(exploreView, expBtn);
    exploreCategoriesScreen.style.display = "block";
    genreDetailsScreen.style.display = "none";
});

playlistBtn.addEventListener("click", () => {
    switchView(homeView, playlistBtn);
});

// Inner Back Nav Sub-routing Button Controls
backToAlbumsBtn.addEventListener("click", () => {
    albumDetailsScreen.style.display = "none";
    albumsGridScreen.style.display = "block";
});

backToExploreBtn.addEventListener("click", () => {
    genreDetailsScreen.style.display = "none";
    exploreCategoriesScreen.style.display = "block";
});

// Wire event listeners onto static Explore Category dashboard cards 
document.querySelectorAll(".category-card").forEach(card => {
    card.addEventListener("click", () => {
        const genre = card.getAttribute("data-genre");
        openGenreView(genre);
    });
});







// ================= PAGE LOAD =================
window.onload = () => {
    renderPlaylist();
    renderFavorites(); // FIXED: Force initial UI rendering to pull saved storage values on setup
    updateFavoriteButton();
};