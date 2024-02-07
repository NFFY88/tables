import { StylesConfig } from 'react-select'

const customSelectStyles: StylesConfig<any, boolean> = {
  control: (styles, { isFocused }) => ({
    ...styles,
    minHeight: '42px',
    borderRadius: '4px',
    border: isFocused
      ? '1px solid var(--color-input-border-focus)'
      : '1px solid var(--color-input-border)',
    cursor: 'pointer',
    fontSize: 'var(--gx-input-font-size-medium)',
    boxShadow: 'none',
    transition: 'var(--transition-duration-medium)',
    ':hover': {
      ...styles[':hover'],
      borderColor: 'var(--color-input-border-hover)',
    },
  }),
  placeholder: (styles) => ({
    ...styles,
    color: 'var(--color-text-gray)',
  }),

  indicatorSeparator: (styles) => ({
    ...styles,
    display: 'none',
  }),
  dropdownIndicator: (styles, { selectProps }) => ({
    ...styles,
    transition: 'var(--transition-duration-medium)',
    transform: selectProps.menuIsOpen ? 'rotate(180deg)' : undefined,
    color: 'var(--color-select-indicator)',
    ':hover': {
      ...styles[':hover'],
      color: 'var(--color-select-indicator)',
    },
    svg: {
      width: '14px',
      height: '14px',
    },
  }),
  container: (styles) => ({
    ...styles,
    transition: 'var(--transition-duration-medium)',
  }),
  menu: (styles) => ({
    ...styles,
    border: '1px solid var(--color-input-border)',
    boxShadow: 'var(--shadow-select-menu)',
    borderRadius: '4px',
    backgroundColor: 'var(--color-white)',
    padding: '0 14px',
    transition: 'var(--transition-duration-medium)',
  }),
  option: (styles, { isSelected, isFocused }) => ({
    ...styles,
    padding: ' 14px 0',
    color: isSelected || isFocused ? 'var(--color-text-black)' : 'var(--color-text-gray)',
    fontWeight: isSelected ? 'var(--font-weight-bold)' : 'var(--font-weight-regular)',
    transition: 'var(--transition-duration-medium)',
    backgroundColor: 'var(--color-white)',
    cursor: 'pointer',
    ':not(:last-of-type)': {
      borderBottom: '1px solid var(--color-input-border)',
    },
    ':hover': {
      ...styles[':hover'],
      color: 'var(--color-text-black)',
    },
  }),
  menuPortal: (styles) => ({
    ...styles,
    zIndex: 10,
  }),
}

export default customSelectStyles
