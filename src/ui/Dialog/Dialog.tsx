"use client";

import { useState } from "react";
import { Dialog as HDialog } from "@headlessui/react";

export const Dialog = () => {
  let [isOpen, setIsOpen] = useState(true);

  return (
    <HDialog open={isOpen} onClose={() => setIsOpen(false)}>
      <HDialog.Panel>
        <HDialog.Title>Deactivate account</HDialog.Title>
        <HDialog.Description>
          This will permanently deactivate your account
        </HDialog.Description>

        <p>
          Are you sure you want to deactivate your account? All of your data
          will be permanently removed. This action cannot be undone.
        </p>

        <button onClick={() => setIsOpen(false)}>Deactivate</button>
        <button onClick={() => setIsOpen(false)}>Cancel</button>
      </HDialog.Panel>
    </HDialog>
  );
};
