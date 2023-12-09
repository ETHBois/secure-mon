import { Text } from "@mantine/core";

export default function Logo() {
  return (
    <Text
      variant="gradient"
      gradient={{ from: "blue", to: "green", deg: 45 }}
      size="2rem"
      weight={900}
    >
      secure-mon
    </Text>
  );
}
