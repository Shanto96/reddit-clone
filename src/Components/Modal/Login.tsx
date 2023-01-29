import { Input } from "@chakra-ui/react";
import React, { useState } from "react";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const onSubmit = () => {};
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prev: any) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <form>
      <Input
        type="email"
        placeholder="Email"
        mb={2}
        name="email"
        onChange={onChange}
        fontSize="10pt"
        _placeholder={{ color: "grey.500" }}
        _hover={{
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        bg="gray.100"
      />
      <Input
        type="password"
        placeholder="Password"
        mb={2}
        name="password"
        onChange={onChange}
        fontSize="10pt"
        _placeholder={{ color: "grey.500" }}
        _hover={{
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        _focus={{
          outline: "noen",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        bg="gray.100"
      />
    </form>
  );
};
export default Login;
