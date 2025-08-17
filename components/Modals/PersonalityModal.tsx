"use client";

import React from "react";
import { Box, Stack } from "@mui/material";

import BaseButton from "../Base/BaseButton";
import BaseModal from "../Base/BaseModal";
import { personalityColor } from "@/utils/personalityColor";

type Props = {
  opened: boolean;
  onClose: () => void;
  onSelect: (label: string) => void;
};

const PersonalityModal = ({
  opened,
  onClose,
  onSelect,
}: Props): React.ReactElement => {
  return (
    <BaseModal title="性格を選択" isOpen={opened} onClose={onClose}>
      <Box sx={{ py: 2 }}>
        <Stack
          spacing={1}
          alignItems="center"
          sx={{ maxHeight: 300, overflowY: "auto", mt: 2 }}
        >
          {["おてつだいスピード▲▲", "おてつだいスピード▼▼", "無補正"].map(
            (label, index) => (
              <BaseButton
                color="light"
                type="button"
                width="60%"
                key={index}
                onClick={() => {
                  onSelect(label);
                  onClose();
                }}
              >
                {personalityColor(label)}
              </BaseButton>
            )
          )}
        </Stack>
      </Box>
    </BaseModal>
  );
};

export default PersonalityModal;
