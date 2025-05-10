import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
// import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
// import { onAuthStateChanged } from "firebase/auth";

const Register = () => {
  const { createUser, updateUser, setUserInfo, createUserWithGoogle } =
    use(AuthContext);
  const navigate = useNavigate();
  const handleCreateUserWithGoogle = () => {
    createUserWithGoogle()
      .then((result) => {
        const user = result.user;
        setUserInfo(user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleRegisterBtn = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    // console.log(name, email, photo, password);
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast(
        "Password must be at least 6 characters long, contain at least one lowercase and one uppercase letter."
      );
      return;
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUserInfo({ ...user, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
            setUserInfo(user);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast(errorCode, " ", errorMessage);
      });
  };

  return (
    <div className="mt-10 w-3/5 mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-center font-bold text-primary text-2xl my-3">
              Register your account
            </h1>
            <form onSubmit={handleRegisterBtn} className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                className="input"
                name="name"
                placeholder="Name"
                required
              />

              <label className="label">Photo URL</label>
              <input
                type="text"
                className="input"
                name="photo"
                placeholder="Photo URl"
                required
              />

              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                name="email"
                placeholder="Email"
                required
              />

              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                name="password"
                placeholder="Password"
                required
              />

              <button
                type="submit"
                className="btn btn-neutral mt-4 hover:text-black hover:bg-base-200"
              >
                Register
              </button>
            </form>
            <button
              onClick={handleCreateUserWithGoogle}
              className="btn bg-white text-black border-[#e5e5e5] hover:bg-base-200"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
            <p className="text-center font-semibold">
              Already have a account? Click to{" "}
              <Link to="/auth/login" className="text-secondary">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
