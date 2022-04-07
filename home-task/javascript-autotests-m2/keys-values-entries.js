let computer = {
  usbPortCount: 8,
  chipset: 'AMD X570',
  coreCount: 8,
  cpuManufacturer: 'AMD',
  socket: 'AM4',
  videoCardModel: 'NVidia GeForce GTX 1060',
  videoMemory: 4096,
  ramType: 'DDR4',
  ramVolume: 8192,
  ramFrequency: 3200,
  price: 100000,
};

console.log(Object.keys(computer));
console.log(Object.values(computer));
console.log(Object.entries(computer));
