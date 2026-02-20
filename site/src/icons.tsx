import React from 'react';

const icon = (...paths: Array<React.ReactElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ verticalAlign: '-0.125em' }}
  >
    {paths}
  </svg>
);

// Feather-style icons
export const UserIcon = icon(
  <path key="a" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />,
  <circle key="b" cx="12" cy="7" r="4" />
);

export const MailIcon = icon(
  <rect key="a" x="2" y="4" width="20" height="16" rx="2" />,
  <path key="b" d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
);

export const CalendarIcon = icon(
  <rect key="a" x="3" y="4" width="18" height="18" rx="2" />,
  <path key="b" d="M16 2v4" />,
  <path key="c" d="M8 2v4" />,
  <path key="d" d="M3 10h18" />
);

export const PhoneIcon = icon(
  <path
    key="a"
    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
  />
);

export const LockIcon = icon(
  <rect key="a" x="3" y="11" width="18" height="11" rx="2" />,
  <path key="b" d="M7 11V7a5 5 0 0 1 10 0v4" />
);

export const UsersIcon = icon(
  <path key="a" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />,
  <circle key="b" cx="9" cy="7" r="4" />,
  <path key="c" d="M22 21v-2a4 4 0 0 0-3-3.87" />,
  <path key="d" d="M16 3.13a4 4 0 0 1 0 7.75" />
);

export const MapPinIcon = icon(
  <path key="a" d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />,
  <circle key="b" cx="12" cy="10" r="3" />
);

export const HomeIcon = icon(
  <path key="a" d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />,
  <path key="b" d="M9 22V12h6v10" />
);

export const MapIcon = icon(
  <path key="a" d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3z" />,
  <path key="b" d="M9 3v15" />,
  <path key="c" d="M15 6v15" />
);

export const HashIcon = icon(
  <path key="a" d="M4 9h16" />,
  <path key="b" d="M4 15h16" />,
  <path key="c" d="M10 3 8 21" />,
  <path key="d" d="M16 3 14 21" />
);
