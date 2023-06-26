import React from "react";
import Avatar from "react-avatar";
import { deleteContact } from "../templates/contacts/ContactSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const { name, phone, email, id } = contact;

  const onDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <tr>
      <td>
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" />
          <label className="custom-control-label"></label>
        </div>
      </td>
      <td>
        <Avatar
          name={name}
          size="35"
          round={true}
          style={{
            marginRight: "8px",
          }}
        />{" "}
        {name}
      </td>
      <td>{phone}</td>
      <td>{email}</td>
      <td className="actions">
        <Link to={`/contacts/edit/${id}`}>
          <span
            className="material-icons"
            style={{
              margin: "2px",
            }}
          >
            edit
          </span>
        </Link>
        <span
          className="material-icons text-danger "
          onClick={() => onDeleteContact(id)}
          style={{
            margin: "2px",
          }}
        >
          remove_circle
        </span>
      </td>
    </tr>
  );
};

export default Contact;
