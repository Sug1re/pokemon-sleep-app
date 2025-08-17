"use client";

import React from "react";
import { useDisclosure } from "@mantine/hooks";

import BaseButton from "../Base/BaseButton";
import ExFieldModal from "../Modals/ExFieldModal";
import { useLabel } from "@/hooks/useLabel";

type Props = {
  value: string;
  onSelect: (label: string) => void;
};

const ExFieldButton = ({ value, onSelect }: Props) => {
  const [isOpened, handlers] = useDisclosure(false);

  const { selectedLabel, setLabel } = useLabel({
    stateLabel: value || "EXフィールド効果",
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

      <ExFieldModal
        opened={isOpened}
        onClose={handlers.close}
        onSelect={handleSelect}
      />
    </>
  );
};

export default ExFieldButton;
