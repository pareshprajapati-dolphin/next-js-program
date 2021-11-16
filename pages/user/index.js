import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../../component/Layout";

const User = () => {
  const [user, setUser] = useState();
  const router = useRouter();

  useEffect(async () => {
    await fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  });

  const deleteUser = (id) => {
    console.log(id);
  };

  return (
    <Layout>
      <div classNames="mr-3 text-right">
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => {
            router.push("/user/Add");
          }}
        >
          Add User
        </button>
      </div>
      <div className="my-3">
        <table className="table table-striped border">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">FirstName</th>
              <th scope="col">UserName</th>
              <th scope="col">email</th>
              <th scope="col">Phone</th>
              <th scope="col">Action </th>
            </tr>
          </thead>
          <tbody>
            {user &&
              user.map((user, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <Link href={`/user/edit/${user.id}`}>
                      <a
                        style={{
                          marginRight: "10px",
                          textDecoration: "none",
                        }}
                      >
                        Edit
                      </a>
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default User;
