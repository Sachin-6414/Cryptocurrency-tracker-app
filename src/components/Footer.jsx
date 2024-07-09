import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const avatarSrc = "https://www.google.com/imgres?q=prince%20vegeta%20profile%20image&imgurl=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d0000b27372b092d8c808d6da2a69ba89&imgrefurl=https%3A%2F%2Fopen.spotify.com%2Falbum%2F00K5W0rzKvSuAABOdtcR3J&docid=lNI_2-7dGwtf3M&tbnid=qzZcBIuXpI7ZKM&vet=12ahUKEwiKlN2GnoCHAxUgS2wGHeP_DAMQM3oECGgQAA..i&w=640&h=640&hcb=2&ved=2ahUKEwiKlN2GnoCHAxUgS2wGHeP_DAMQM3oECGgQAA";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the best crypto trading app in India, we provide our guidance
            at a very cheap price.
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} />
          <Text>Our Founder</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;