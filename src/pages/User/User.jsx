import { useEffect, useState } from "react";
import "./user.scss";

const User = () => {
  const [userRandom, setUserRandom] = useState(null);

  const getUser = async () => {
    try {
      const result = await fetch("https://randomuser.me/api/");
      const data = await result.json();
      setUserRandom(data.results[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  const handleClick = () => {
    getUser();
  };

  return (
    <div className="user">
      <h1>User Random</h1>
      {!userRandom ? (
        <h3>Generate a Random User</h3>
      ) : (
        <div className="card-user">
          <div className="name">
            <h2>
              {userRandom.name.title}. {userRandom.name.first}{" "}
              {userRandom.name.last}
            </h2>
            <span>{userRandom.gender}</span>
          </div>
          <p className="age">
            <b>Age:</b> {userRandom.registered.age}
          </p>

          <img src={userRandom.picture.large} alt="" />
          <div className="location">
            <p className="street">
              <b>Direction: </b>
              {userRandom.location.street.number} -{" "}
              {userRandom.location.street.name}
            </p>
            <p className="location__user">
              <b>City:</b> {userRandom.location.city} <br />
              <b>State:</b> {userRandom.location.state} <br />
              <b>Country:</b> {userRandom.location.country}
            </p>
          </div>
          <p className="email">
            <b>Email:</b> {userRandom.email}
          </p>
          <button className="random" onClick={handleClick}>
            Search
          </button>
        </div>
      )}
    </div>
  );
};

export default User;
