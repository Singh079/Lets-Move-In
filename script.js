// Switch between Landing and Gallery
const enterBtn = document.getElementById("enterBtn");
const landing = document.getElementById("landing");
const galleryPage = document.getElementById("galleryPage");
const gallery = document.getElementById("gallery");

// Pre-defined media files
const mediaFiles = [
    { type: "image", src: "media/4.jpg", text: "That Beautiful Moment" },
    { type: "image", src: "media/6.jpg", text: "That unforgettable Day" },
    { type: "image", src: "media/5.jpg", text: "Sukoon" },
    { type: "image", src: "media/18.jpg", text: "That Shadows of Our" },
    { type: "image", src: "media/9.jpg", text: "The Koshma" },
    { type: "image", src: "media/13.jpg", text: "That Hold My Hand" },
    { type: "image", src: "media/14.jpg", text: "That bicep hold" },
    { type: "image", src: "media/15.jpg", text: "That Beautiful Smile" },
    { type: "image", src: "media/19.jpg", text: "That Hand in Hand Feeling" },
    { type: "video", src: "media/vi1.mp4", text: "That unforgettable" },
    { type: "video", src: "media/vi2.mp4", text: "The Kiss" }
];

// Show gallery when button clicked
enterBtn.addEventListener("click", () => {
  landing.classList.add("hidden");
  galleryPage.classList.remove("hidden");

  // Add intro paragraph at the top of gallery
  const introPara = document.createElement("p");
  introPara.textContent = "Welcome to our memories! Enjoy the beautiful moments we've captured together. Every picture and video tells a story of our journey, filled with love, laughter, and unforgettable experiences. Dive in and relive these special times with us. Here's to many more memories to come! ❤️. And remember, this is just the beginning of our beautiful journey together. Let's create more memories that we'll cherish forever. 🌟. I Love You Baby, Mera Bacha, Mera Kuchu Puchu.";
  introPara.classList.add("intro-text"); // optional: add class for styling
  galleryPage.prepend(introPara); // adds it before the gallery
});

// Load media into gallery
mediaFiles.forEach(file => {
  const card = document.createElement("div");
  card.classList.add("card");

  if (file.type === "image") {
    const img = document.createElement("img");
    img.src = file.src;
    card.appendChild(img);
  } else if (file.type === "video") {
    const video = document.createElement("video");
    video.src = file.src;
    video.controls = true;
    card.appendChild(video);
  }

  const caption = document.createElement("p");
  caption.textContent = file.text;
  card.appendChild(caption);

  gallery.appendChild(card);
});
