function firstName(name) {
    let nameLength = name.length;
    let nameCaps = name.toUpperCase("Camie");
    let noCaps = name.toLowerCase();
    let theIndex = name.indexOf("Gray");

    return [nameLength, nameCaps, noCaps, theIndex]
}
console.log(firstName("Camie Gray"))