function replaceString(str, oldSubStr, newSubStr) {
    return str.split(oldSubStr).join(newSubStr);
  }
  let exemple = 'ceci est une phrase';
  console.log(replaceString(exemple, 'est', 'étais'));
  // Output : "ceci étais une phrase"
    
  module.exports = replaceString