import { useRouter } from "next/router";

import { Paper, Text, TextInput } from "@mantine/core";

import { FaSearch } from "react-icons/fa";

export default function AirstackSearch() {
  const router = useRouter();
  const organizationId = router.query.orgId as string;

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const query = e.target[0].value;
    const rawInput = encodeURIComponent(`#⎱${query}⎱(${query}++ethereum+null)`);

    window.open(`https://explorer.airstack.xyz/token-balances?address=${query}&type=ADDRESS&rawInput=${rawInput}`, "_blank");
  }

  return (
    <Paper
      withBorder
      radius="lg"
      h="100%"
      w="42%"
      shadow="lg"
      sx={(theme) => ({
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[8]
            : theme.colors.gray[1],
      })}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextInput
          icon={<FaSearch />}
          w="100%"
          placeholder="Search for transactions, wallets, etc."
          styles={{
            input: {
              border: "none",
              backgroundColor: "transparent",
            },
          }}
        />
      </form>

      <Text
        style={{
          position: "absolute",
          right: "1rem",
          color: "gray",
        }}
      >
        Powered by
        <span
          style={{
            color:  "green"
          }}
        >
          {" "}
          Airstack
        </span>
        ™️
      </Text>
    </Paper>
  );
}
