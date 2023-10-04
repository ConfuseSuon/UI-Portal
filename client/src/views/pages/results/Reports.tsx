import { Button, List, ListItem } from "@mui/material";
import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";

export interface UserTypos {
  _id: string;
  name: string;
  email: string;
}

const Reports = () => {
  const [users, setUsers] = useState<null | UserTypos[]>(null);

  const getUser = async () => {
    const { data } = await axios.get("http://localhost:5555/api/user");
    if (data) return setUsers(data);
  };

  return (
    <Fragment>
      <div style={{ marginBottom: "1rem" }}>Reports</div>
      <Button onClick={() => getUser()} variant="contained">
        Get
      </Button>
      {!!users &&
        users.map((user: UserTypos) => {
          return (
            <List key={user._id}>
              <ListItem> Name: {user.name}</ListItem>
              <ListItem> Email: {user.email}</ListItem>
            </List>
          );
        })}
    </Fragment>
  );
};

export default Reports;
