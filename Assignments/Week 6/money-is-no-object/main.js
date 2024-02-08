// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
function isAdmin(user) {
    return user.userRole === 'ADMIN';
  }
  
  function getEmail(user) {
    const firstInitial = user.firstName.charAt(0);
    const persevereEmail = `${firstInitial}${user.lastName.toLowerCase()}.prsvr@gmail.com`;
    return persevereEmail;
  }

  function getPlaylistLength(playlist) {
    return playlist.songs.length;
  }

  function getHardestHomework(homeworks) {
    if (homeworks.length === 0) {
      return "";
    }
    
    let lowestAverage = Infinity;
    let hardestHomework = "";
  
    homeworks.forEach(homework => {
      const averageScore = homework.scores.reduce((acc, score) => acc + score, 0) / homework.scores.length;
      if (averageScore < lowestAverage) {
        lowestAverage = averageScore;
        hardestHomework = homework.name;
      }
    });
  
    return hardestHomework;
  }

  function createPhonebook(namesAndNumbers) {
    const phonebook = {};
  
    namesAndNumbers.forEach(entry => {
      const [name, phoneNumber] = entry;
      phonebook[name] = phoneNumber;
    });
  
    return phonebook;
  }
  

// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

// if (typeof isAdmin === 'undefined') {
//     isAdmin = undefined;
// }
// if (typeof getEmail === 'undefined') {
//     getEmail = undefined;
// }
// if (typeof getPlaylistLength === 'undefined') {
//     getPlaylistLength = undefined;
// }
// if (typeof getHardestHomework === 'undefined') {
//     getHardestHomework = undefined;
// }
// if (typeof createPhonebook === 'undefined') {
//     createPhonebook = undefined;
// }

// module.exports = {
//     isAdmin,
//     getEmail,
//     getPlaylistLength,
//     getHardestHomework,
//     createPhonebook
// };