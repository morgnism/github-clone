import classNames from 'classnames';
import { IconPropsDefaults } from '../icons-map';
import { IconSVG } from '../types';

export const Copy: React.FC<IconSVG> = ({
  className = IconPropsDefaults.className,
  color = IconPropsDefaults.color,
  size = IconPropsDefaults.size,
}) => (
  <svg
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    className={classNames([className, color])}
    focusable="false"
    aria-hidden="true"
  >
    <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>
    <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
  </svg>
);
