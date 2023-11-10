import { useState } from "react";
import "./form.css";

export default function Form() {
  const [user, setUser] = useState({
    firstName: "Mbarassa",
    lastName: "Samassa",
    email: "smbarassa@mail.ru"
  });
  const [isSent, setIsSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    setIsSent(true);
  }

  if (isSent) {
    return (
      <h1>{user.firstName + " " + user.lastName}, welcome to our site!</h1>
    );
  }

  function handleFirstNameChange(e) {
    setUser({
      ...user,
      firstName: e.target.value
    });
  }

  function handleLastNameChange(e) {
    setUser({
      ...user,
      lastName: e.target.value
    });
  }

  function handleEmailChange(e) {
    setUser({
      ...user,
      email: e.target.value
    });
  }

  return (
    <div className="form">
      <form className="form__content" onSubmit={handleSubmit}>
        <div>
          <label>First name:</label>
          <input
            type="text"
            value={user.firstName}
            onChange={handleFirstNameChange}
          />
        </div>

        <div>
          <label>Last name:</label>
          <input
            type="text"
            value={user.lastName}
            onChange={handleLastNameChange}
          />
        </div>

        <div>
          <label>E-mail:</label>
          <input type="email" value={user.email} onChange={handleEmailChange} />
        </div>

        <div className="form__btn">
          <button type="submit">Send</button>
        </div>
      </form>

      <p>
        {user.firstName} {user.lastName} ({user.email})
      </p>
    </div>
  );
}
