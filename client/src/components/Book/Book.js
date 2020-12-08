import React from "react";

//start Book variable
let Book = ({ title, subtitle, authors, link, description, image, Button }) => {
  const trimText = (str, length, ending) => {
    if (str) {
      if (length == null) {
        length = 100;
      }
      if (ending == null) {
        ending = "...";
      }
      if (str.length > length) {
        return str.substring(0, length - ending.length) + ending;
      } else {
        return str;
      }
    }
    return str;
  };

  const trimDescription = trimText(description, 255, "...");
};
//end function
