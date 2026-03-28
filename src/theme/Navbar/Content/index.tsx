import React from 'react';
import { ErrorCauseBoundary, useThemeConfig } from '@docusaurus/theme-common';
import {
  splitNavbarItems,
  useNavbarMobileSidebar,
} from '@docusaurus/theme-common/internal';
import NavbarItem from '@theme/NavbarItem';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import SearchBar from '@theme/SearchBar';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import NavbarLogo from '@theme/Navbar/Logo';
import NavbarSearch from '@theme/Navbar/Search';

function useNavbarItems() {
  return useThemeConfig().navbar.items as any[];
}

function NavbarItems({ items }: { items: any[] }) {
  return (
    <>
      {items.map((item, i) => (
        <ErrorCauseBoundary
          key={i}
          onError={(error) =>
            new Error('A theme navbar item failed to render.', { cause: error })
          }
        >
          <NavbarItem {...item} />
        </ErrorCauseBoundary>
      ))}
    </>
  );
}

export default function NavbarContent(): React.ReactElement {
  const mobileSidebar = useNavbarMobileSidebar();
  const items = useNavbarItems();
  const [leftItems, rightItems] = splitNavbarItems(items);
  const searchBarItem = items.find((item) => item.type === 'search');

  return (
    <>
      {/* Top row: logo + right-side controls */}
      <div className="nb-top">
        <div className="nb-top__inner">
          <div className="nb-top__left">
            {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
            <NavbarLogo />
          </div>
          <div className="nb-top__right">
            <NavbarItems items={rightItems} />
            <NavbarColorModeToggle />
            {!searchBarItem && (
              <NavbarSearch>
                <SearchBar />
              </NavbarSearch>
            )}
          </div>
        </div>
      </div>

      {/* Bottom row: left nav items — hidden on mobile (sidebar handles them) */}
      <div className="nb-bottom">
        <div className="nb-bottom__inner">
          <NavbarItems items={leftItems} />
        </div>
      </div>
    </>
  );
}
