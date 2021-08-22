import { useRef } from "react";
import { useOverlayTriggerState } from "@react-stately/overlays";
import { useButton } from "@react-aria/button";

const useToggleDialog = () => {
  const state = useOverlayTriggerState({});
  const openButtonRef = useRef();
  const closeButtonRef = useRef();

  const { buttonProps: openButtonProps } = useButton(
    {
      onPress: () => state.open(),
    },
    openButtonRef
  );

  const { buttonProps: closeButtonProps } = useButton(
    {
      onPress: () => state.close(),
    },
    closeButtonRef
  );

  return {
    state,
    openButtonProps,
    openButtonRef,
    closeButtonProps,
    closeButtonRef,
  };
};

export default useToggleDialog;
