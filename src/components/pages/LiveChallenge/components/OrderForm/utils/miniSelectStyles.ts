export const miniSelectSlotProps = {
  formControlProps: {
    sx: {
      '.MuiInputBase-root': {
        height: 'unset',
        borderRadius: '0.2rem',
      },
      '.MuiSelect-select': {
        paddingTop: '0.125rem',
        paddingBottom: '0.125rem',
        paddingRight: '1.5rem !important',
        fontSize: '10px',
        fontWeight: '700',
      },
      '.MuiList-root': {
        '.MuiButtonBase-root': {
          fontSize: '10px',
        },
      },
      '.MuiSvgIcon-root': {
        right: '0px',
      },
    },
  },
  selectProps: {
    MenuProps: {
      MenuListProps: {
        sx: {
          py: 0,
          li: {
            padding: 0.5,
            fontSize: '10px',
            lineHeight: '11px',
            minHeight: 'unset !important',
            height: '2rem !important',
          },
        },
      },
    },
  },
};
