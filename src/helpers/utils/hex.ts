// export const byteListAsHex = ;

function generateHexCombinations(): string[] {
  const hexs = [];

  for (let i = 0; i <= 255; i++) {
    const hex = i.toString(16).padStart(2, "0");

    //   if (!byteListAsHex.includes(hex)) {
    //     combinations.push(hex);
    //   }

    //   for (let j = 0; j <= 255; j++) {
    //     const hex2 = j.toString(16).padStart(2, '0');

    //     if (!byteListAsHex.includes(hex2)) {
    //       combinations.push(hex + hex2);
    //     }
    //   }
    hexs.push(hex);
  }

  return hexs;
}

const allHexsFromOneByte = generateHexCombinations();

export { allHexsFromOneByte };
