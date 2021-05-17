import React, { useState } from 'react';
import Link from 'next/link';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import ListAltIcon from '@material-ui/icons/ListAlt';

const Nav = () => {
  return (
    <BottomNavigation>
      <Link href={`/`}>
        <BottomNavigationAction showLabel label="SYSTEM LIST" icon={<ListAltIcon />} />
      </Link>
    </BottomNavigation>
  );
};

export default Nav;
