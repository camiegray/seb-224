function firstName(name) {
    let nameLength = name.length;
    let nameCaps = name.toUpperCase();
    let noCaps = name.toLowerCase();
    let theIndex = name.indexOf("G");
    let characterPlace = name.charAt(2);

    return [nameLength, nameCaps, noCaps, theIndex, characterPlace]
}
console.log(firstName("Camie Gray"))