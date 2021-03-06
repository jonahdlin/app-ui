/* This module handles the choosing of a layout to be displayed
  from the set of human submitted layouts.

  Currently, this simplly means grabbing the most recent layout,
  but in theory this file could be expanded to allow for weighted combinations
  or some other form of display choosing algorithm as the need arises.

*/

// --------- Fake Heuristics ---------------
function run(layouts, numEntries, callback) {
    let layout = layouts.toArray()
      .then((result) => {

        result.reverse();

        //Return n most recent layouts
        if (numEntries && result.length <= 1){
          return [];
        }
        if(numEntries && result.length < numEntries){
          return result;
        }
        if(numEntries && result.length > numEntries){
          return result.slice(0, numEntries);
        }

        return result[0];
      });
  
    if (callback) {
      callback(layout);
    } else {
      return layout;
    }
  }


module.exports = {
  run
};