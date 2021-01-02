import React from "react";
import { ListItem } from "../BookList/BookList";
import Button from "react-bootstrap/Button";

//start Book variable
const Book = ({
  title,
  subtitle,
  authors,
  link,
  description,
  image,
  Button,
}) => {
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

  return (
    <ListItem>
      <div className="media-snippet">
        <article className="media">
          <figure className="media-left">
            <p>
              <img className="image is-128auto" src={image} alt={title} />
            </p>
          </figure>
          <div className="media-content">
            <h3 className="heading-title">{title}</h3>
            {subtitle && <h5 className="heading-subtitle">{subtitle}</h5>}
            <p className="heading-subtitle">by {authors} (Author)</p>
            <p className="p-article">{trimDescription}</p>
            <div calssName="d-flex flex-row bd-highlight mb-3">
              <div className="p-2 bd-highlight">
                <a
                  href={link}
                  className="btn view-button heading-subtitle ml-2"
                  target="__blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
              </div>
              <div className="p-2 bd-highlight">
                <Button />
              </div>
            </div>
          </div>
        </article>
      </div>
    </ListItem>
  );
};
//end function

export default Book;
