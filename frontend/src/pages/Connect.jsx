import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import MainLayout from "../components/layouts/MainLayout";
import "../styles/_Main.scss";
import "../styles/_Connect.scss";

const initialValues = {
  username: "",
  email: "",
  password: "",
};

export default function Connect() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  // const { setUserProfil } = useContext(CurrentUserContext);

  const handleMail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const searchUser = () => {
    try {
      axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/api/auth/login`,
          {
            username,
            email,
            password,
          },
          { withCredentials: true }
        )
        .then((response) => {
          localStorage.setItem("user", JSON.stringify(response.data));
          navigate("/nooneisadmin/admin");
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MainLayout>
      <div className="connect-me">
        <h2>Are you admin ?</h2>
        <div className="login">
          <Formik
            initialValues={initialValues}
            onSubmit={searchUser}
            validateOnMount
          >
            <Form className="formConnection">
              <div onChange={handleUsername} className="verif-form">
                <Field
                  name="username"
                  placeholder="Username"
                  type="text"
                  className="input"
                  required
                />
                <ErrorMessage
                  name="username"
                  className="text-danger"
                  component="span"
                />
              </div>
              <div onChange={handleMail} className="verif-form">
                <Field
                  name="email"
                  placeholder="Email"
                  type="email"
                  className="input"
                  required
                />
                <ErrorMessage
                  name="email"
                  className="text-danger"
                  component="span"
                />
              </div>
              <div onChange={handlePassword} className="verif-form">
                <Field
                  name="password"
                  placeholder="Mot de passe"
                  type="password"
                  className="input"
                  required
                />
                <ErrorMessage
                  name="password"
                  className="text-danger"
                  component="span"
                />
              </div>
              <div className="login-button">
                <button type="submit">yes</button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </MainLayout>
  );
}
