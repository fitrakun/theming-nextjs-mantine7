import { useState } from "react";
import CustomButton from "../components/CustomButton";
import { Box, Group, Text } from "@mantine/core";

export default function HomePage() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <Box p={20}>
      <h1>Welcome to My Mantine UI</h1>
      <Group mb={4}>
        <CustomButton label="Click Me!" onClick={handleClick}></CustomButton>
        <CustomButton label="Outlined Button" onClick={handleClick} variant="outline"></CustomButton>
      </Group>
      <Text>You have clicked the button {clickCount}</Text>
    </Box>
  )
}
