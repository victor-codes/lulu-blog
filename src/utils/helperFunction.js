function truncateString(str, num) {
  return str.length > num ? str.slice(0, num).concat("...") : str;
}

function stringToLink(str) {
  return str.toLowerCase().split(" ").join("-").replace(",", "");
}

export { truncateString, stringToLink };
