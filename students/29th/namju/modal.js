let ids = [
  "wecode_bootcamp",
  "wecode_founder",
  "wecode_korea",
  "wecode_fullstack_bootcamp",
  "wecode_socialclub",
];

const searchInput = document.querySelector(#searchInput);

const filterIds = () => {
  ids.filter(word => word.includes(this.value));
}

searchInput.addEventListener("keydown", filterIds)