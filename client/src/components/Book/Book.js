import { Button } from "@mui/material";
import "./Book.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Book = (props) => {
  const { _id, name, author, description, price, image } = props.book;

  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/books/${_id}`)
      .then((res) => res.data);
  };

  return (
    <div className="card">
      <img src={image} alt={name} />
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h3>Rs {price}</h3>
      <Button LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: "auto" }}>
        Update
      </Button>
      <Button onClick={deleteHandler} color="error" sx={{ mt: "auto" }}>
        Delete
      </Button>
    </div>
  );
};

export default Book;
