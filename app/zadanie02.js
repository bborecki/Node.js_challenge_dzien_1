//Twój kod
const words = {
  4000: 'Node.js',
  1000: 'się',
  0: 'Witam',
  6000: 'i korzystam',
  5000: 'w konsoli',
  7000: 'z funkcji czasu',
  2000: 'z',
  3000: 'programem'
};

for (let i in words) {
  (i => {
    setTimeout(() => {
      console.log(words[i])
  }, i);
  }) (i);
}