"use client";

import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useDisclosure } from "@mantine/hooks";

import BaseButton from "../Base/BaseButton";
import AddModal from "../Modals/AddModal";

type Props = {
  //   value: string;
  onSelect: (label: string) => void;
  excludedItems: string[];
};

const AddButton = ({
  // value,
  onSelect,
  excludedItems,
}: Props) => {
  const [isOpened, handlers] = useDisclosure(false);

  const handleSelect = (label: string) => {
    onSelect(label);
    handlers.close();
  };
  return (
    <>
      <BaseButton
        color="light"
        type="button"
        width="80%"
        leftIcon={<AddCircleOutlineIcon />}
        onClick={handlers.open}
      >
        追加
      </BaseButton>

      <AddModal
        opened={isOpened}
        onClose={handlers.close}
        onSelect={handleSelect}
        excludedItems={excludedItems}
      />
    </>
  );
};

export default AddButton;
