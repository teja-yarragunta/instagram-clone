import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      {/* login or sign up form */}
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image
            src="/instalogo.png"
            h={24}
            cursor={"pointer"}
            alt="Instagram"
          />
          <Input placeholder="email" type="email" fontSize={14} />
          <Input placeholder="password" type="password" fontSize={14} />
          {!isLogin ? (
            <Input
              placeholder="confirm password"
              type="password"
              fontSize={14}
            />
          ) : null}
          <Button w={"full"} size={"sm"} fontSize={14}>
            {isLogin ? "Log in" : "Sign up"}
          </Button>

          {/* ------------ OR ------------ */}
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            my={4}
            gap={1}
            w={"full"}
          >
            <Box flex={2} h={"1px"} bg={"gray.400"} />
            <Text mx={1}>OR</Text>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
          </Flex>

          {/* login with google */}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            cursor={"pointer"}
          >
            <Image src="/google.png" alt="google logo" w={5} />
            <Text mx={"2"} color={"blue.500"}>
              Login with Google
            </Text>
          </Flex>
        </VStack>
      </Box>

      {/* to switch between login and signup */}
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box mx={2} fontSize={14}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </Box>
          <Box
            onClick={() => setIsLogin(!isLogin)}
            color={"blue.500"}
            cursor={"pointer"}
          >
            {isLogin ? "Sign up" : "Log in"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;
