/*
 * In order to keep props tight on components, create a separate type for accessibility-related props.
 * This can be extended as needed.
 */
export type A11yProps = {
  id?: string;
  title?: string;
  tabIndex?: number;
  role?: React.AriaRole;
  autoFocus?: boolean;

  // ARIA
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  'aria-controls'?: string;
  'aria-expanded'?: boolean;
  'aria-pressed'?: boolean;
  'aria-haspopup'?: boolean | 'menu' | 'listbox' | 'dialog' | 'grid' | 'tree';
  'aria-hidden'?: boolean;
  'aria-live'?: 'off' | 'polite' | 'assertive';
  'aria-busy'?: boolean;
  'aria-current'?: boolean | 'page' | 'step' | 'location' | 'date' | 'time';
};
