import { SetList } from "./set-list";

const titles = [
  // Jazz Standards
  "Georgia On My Mind",
  "Have You Met Miss Jones",
  "I Love You",
  "I'll Remember April",
  "Misty",
  "There Will Never Be Another You",
  "Invitation",
  "One-Note Samba",

  // VGM
  "Jolly Roger Bay",
  "Zelda's Lullaby",
  "Song of Healing",
  "Ecruteak City",
  "Azalea Town",
  "Gold/Silver National Park",

  // My Stuff
  "I Might",
  "Unimpressed",
  "Cape",
  "Soda Lake",

  // Popular Stuff
];

const songs = titles.map((title) => ({ title }));

// Fisher-Yates Shuffle, sorta
for (let i = 0; i < songs.length; i++) {
  const j = Math.floor(i + (songs.length - i) * Math.random());
  const temp = songs[i];
  songs[i] = songs[j];
  songs[j] = temp;
}

const livePiano: SetList = {
  name: "Live Piano",
  songs,
};

export default livePiano;
