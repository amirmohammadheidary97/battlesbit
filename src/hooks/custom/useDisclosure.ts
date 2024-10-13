import {useEffect, useState} from 'react';

type Props = {
  initialState?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
};

export const useDisclosure = (props?: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(Boolean(props?.initialState));

  useEffect(() => {
    if (isOpen !== props?.initialState && props?.initialState !== undefined) {
      setIsOpen(props?.initialState);
    }
  }, [props?.initialState, isOpen]);

  const onOpen = () => {
    setIsOpen(true);
    if (typeof props?.onOpen === 'function') {
      props?.onOpen();
    }
  };

  const onClose = () => {
    setIsOpen(false);
    if (typeof props?.onClose === 'function') {
      props?.onClose();
    }
  };

  const onToggle = () => (isOpen ? onClose() : onOpen());

  return {isOpen, onOpen, onClose, onToggle};
};
