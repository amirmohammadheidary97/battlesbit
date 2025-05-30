declare module 'react-slide-button' {
  import type * as React from 'react';

  type SlideButtonProps = {
    mainText?: string | React.ReactNode;
    overlayText?: string | React.ReactNode;
    onSlideDone?: () => void;
    reset?: number;
    caret?: string | React.ReactNode;
    customCaretWidth?: number;
    classList?: string;
    overlayClassList?: string;
    caretClassList?: string;
    delta?: number;
    minSlideWidth?: number;
    minSlideVelocity?: number;
  };

  const SlideButton: React.FC<SlideButtonProps>;
  export default SlideButton;
}
