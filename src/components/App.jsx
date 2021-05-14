import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";


function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://media-exp1.licdn.com/dms/image/C4D03AQExLyI0Dicm-A/profile-displayphoto-shrink_800_800/0/1601633489540?e=1626307200&v=beta&t=P4E4MZqC3D5xHRnnPbQI_XAhFYoHZMSeOdhb7GXRL78"/>
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;