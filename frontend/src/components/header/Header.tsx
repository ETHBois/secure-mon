import {
  ActionIcon,
  Flex,
  Group,
  Header,
  Space,
  useMantineColorScheme,
} from "@mantine/core";
import { FiMoon, FiSun } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/router";

import Logo from "../Logo";
import AirstackSearch from "./AirstackSearch";

export default function HeaderComponent() {
  const router = useRouter();

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const shouldShowOrganizationSelector = router.pathname.includes("/org");
  const shouldShowNotificationsIsland = router.pathname.includes("/org");

  return (
    <Header height={"5rem"} fixed>
      <Flex
        direction="row"
        justify="space-between"
        align="center"
        sx={(theme) => ({
          height: "100%",
          width: "100%",
          padding: theme.spacing.md,
        })}
      >
        <Group>
          <Link href="/">
            <Logo />
          </Link>
        </Group>

        {shouldShowNotificationsIsland && (
          <>
            <AirstackSearch />
            <Space w="4rem" />
          </>
        )}

        <Group>
          <ActionIcon onClick={() => toggleColorScheme()}>
            {colorScheme === "dark" ? <FiSun /> : <FiMoon />}
          </ActionIcon>
        </Group>
      </Flex>
    </Header>
  );
}
