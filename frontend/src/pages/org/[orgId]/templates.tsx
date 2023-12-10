import { useRouter } from "next/router";
import { ReactNode } from "react";

import { Flex, SimpleGrid, Text } from "@mantine/core";

import usePresetAlerts from "@/hooks/use-preset-alerts";
import AppShellLayout from "@/layouts/AppShellLayout";
import PresetCard from "@/components/alerts/create/PresetCard";

export default function Templates() {
  const router = useRouter();

  const orgId = router.query.orgId as string;

  const { presets } = usePresetAlerts();

  return (
    <Flex direction="column" align="center" gap="md" h="88vh">
      <Text size="2.2em" weight="bold" my="4%" variant="gradient">
        Template Gallery
      </Text>

      <SimpleGrid cols={2} spacing={20}>
        {presets?.map((preset, idx) => (
          <PresetCard
            key={idx}
            preset={preset}
            onClick={() => router.push(`/org/${orgId}/alerts/create`)}
          />
        ))}
      </SimpleGrid>
    </Flex>
  );
}

Templates.getLayout = (page: ReactNode) => (
  <AppShellLayout activeLink="templates">{page}</AppShellLayout>
);

