"use client";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";
import useSweetAlert from "../components/lib/sweetalert2";

export default function Example() {
  const init = {
    name: "",
    email: "",
    password: "",
  };

  const { showAlert } = useSweetAlert();

  const [user, setUser] = useState(init);

  const { data: session } = useSession();

  // if (session && session.user) {
  //   console.log(session);
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/api/user", user);

      if (response.data.ok) {
        showAlert({
          icon: "success",
          title: "Registration Successfull!",
          showConfirmButton: false,
          timer: 5000,
        });

        setUser(init);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" flex justify-center items-center">
      <Card color="transparent" className=" mt-[10rem]" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleSubmit}
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              size="lg"
              type="text"
              label="Name"
              required
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
            <Input
              size="lg"
              label="Email"
              type="email"
              required
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <Input
              type="password"
              size="lg"
              label="Password"
              required
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-blue-500"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button type="submit" className="mt-6" fullWidth>
            Register
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              Sign In
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
}
