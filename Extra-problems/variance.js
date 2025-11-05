function consistancyOfplayer (array) {
  const mean = meanOf (array, array.length);
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    const deviation = (array[i] - mean)**2;
    sum += deviation;
  }

  const variance = Math.sqrt(sum / array.length);
  return variance;
}

function median (data) {
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if (data[i] > data[j]) {
        const temp = data[i];
        data[i] = data[j];
        data[j] = temp;
      }
    }
  }
  return median;
}

function meanOf (array, elements) {
  let sum = 0;
  for (let element = 0; element < elements; element++) {
    sum += array[element];
  }
  const mean = sum/elements;
  return mean;
}

function testCases () {
  const vk2016ipl = [
    75, 79, 33, 80, 100, 14, 52, 108, 20, 7, 109, 75, 113, 54, 0, 54
  ];
  const vk2017IPL = [58, 5, 6, 20, 55, 10, 0, 64, 28, 62];
  const vk2018IPL = [31, 21, 57, 92, 18, 68, 32, 8, 39, 70, 48, 12, 4];
  const vk2019ODI = [
    45, 43, 104, 46, 60, 88, 123, 120, 116, 43, 42, 85, 11, 72, 66, 1, 89, 77,
    26, 1];
  const vk2018ODI = [
    112, 46, 160, 75, 36, 129, 45, 39, 140, 157, 38, 60, 107, 129, 63
  ];
  const vk2023ODI = [113, 31, 4, 8, 85, 56, 103, 55, 42, 95, 88, 117, 101, 54];
  
  const consistancyOf2016 = consistancyOfplayer(vk2016ipl);
  const consistancyOf2017 = consistancyOfplayer(vk2017IPL);
  const consistancyOf2018 = consistancyOfplayer(vk2018IPL);
  const consistancyOf2018ODI = consistancyOfplayer(vk2018ODI);
  const consistancyOf2019ODI = consistancyOfplayer(vk2019ODI);
  const consistancyOf2023ODI = consistancyOfplayer(vk2023ODI);
  console.log(`
    Virat Kohli

    consistency of IPL 2016 : ${consistancyOf2016}
    consistency of IPL 2017 : ${consistancyOf2017}
    consistency of IPL 2018 : ${consistancyOf2018}
    consistency of ODI 2018 : ${consistancyOf2018ODI}
    consistency of ODI 2019 : ${consistancyOf2019ODI}
    consistency of ODI 2023 : ${consistancyOf2023ODI}
    `);
}

function main () {
  testCases ();
}

main ();
