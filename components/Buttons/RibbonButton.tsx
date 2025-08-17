"use client";

import React from "react";
import { useDisclosure } from "@mantine/hooks";

import BaseButton from "../Base/BaseButton";
import RibbonModal from "../Modals/RibbonModal";
import { useLabel } from "@/hooks/useLabel";

type Props = {
  value: string;
  onSelect: (label: string) => void;
};

const RibbonButton = ({ value, onSelect }: Props) => {
  const [isOpened, handlers] = useDisclosure(false);

  const { selectedLabel, setLabel } = useLabel({
    stateLabel: value || "おやすみリボン",
  });

  const handleSelect = (label: string) => {
    setLabel(label);
    onSelect(label);
  };

  return (
    <>
      <BaseButton
        color="light"
        type="button"
        width="80%"
        onClick={handlers.open}
      >
        {selectedLabel}
      </BaseButton>

      <RibbonModal
        opened={isOpened}
        onClose={handlers.close}
        onSelect={handleSelect}
      />
    </>
  );
};

export default RibbonButton;
