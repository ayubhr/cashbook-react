import React from "react";
import { SiCashapp } from "react-icons/si";
import { Flex } from "@tremor/react";

export const Header = () => {
  return (
    <Flex
      justifyContent="justify-center"
      alignItems="items-center"
      spaceX="space-x-2"
      truncate={false}
      marginTop="mt-0"
    >
      <SiCashapp className="text-red" style={{ fontSize: "28px" }} />
      <h2 className="text-red">My Cashbook</h2>
    </Flex>
  );
};
