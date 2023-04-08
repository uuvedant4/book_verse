import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Book.css";
import Book from "./Book";

const url = "http://localhost:5000/books";
const fetchHandler = async () => {
  return await axios.get(url).then((res) => res.data);
};

const Books = () => {
  const [books, setBooks] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);
  return (
    <div>
      <ul>
        {books &&
          books.map((book, i) => {
            return (
              <li key={i}>
                <Book book={book} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Books;
