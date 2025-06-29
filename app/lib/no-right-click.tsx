'use client';

import React from 'react';

export default function NoRightClickWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="select-none"
      onContextMenu={(e) => e.preventDefault()}
    >
      {children}
    </div>
  );
}
