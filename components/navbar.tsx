"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";

import Image from "next/image";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import Logo from "@/public/logo/blue-main.svg";
import { AccordionDropdown } from "./accordion";
import { itemsDropdown } from "./dropdown";
import { Button, useDisclosure } from "@nextui-org/react";

export const Navbar = () => {
  const pathname = usePathname();

  const { isOpen, onClose, onOpenChange } = useDisclosure();

  const handleNavbarToggle = () => {
    if (isOpen) {
      onClose();
    } else {
      onOpenChange();
    }
  };

  return (
    <NextUINavbar
      isMenuOpen={isOpen}
      onMenuOpenChange={onOpenChange}
      maxWidth="xl"
      position="sticky"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image
              className="min-h-44 min-w-44"
              src={Logo.src}
              alt="Logo"
              width={40}
              height={40}
            />
            <span className="text-lg flex lg:hidden font-bold text-primary">
              {siteConfig.name}
            </span>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem
              key={item.href}
              isActive={pathname === item.href}
            >
              {item.submenu ? (
                itemsDropdown(item.label, item.submenuItems, item.href)
              ) : (
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium"
                  )}
                  color="foreground"
                  href={item.href}
                >
                  <Button
                    // className={item.label == 'Registration' ? pathname == '/registration' ? "" : "border-pink-300 shadow-lg" : ""}
                    // variant={item.label == 'Registration' ? pathname == '/registration' ? 'light' : 'bordered' : 'light'}
                    variant="light"
                  >
                    {item.label}
                  </Button>
                </NextLink>
              )}
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-2 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem
              key={`${item}-${index}`}
              isActive={pathname === item.href}
            >
              {item.submenu ? (
                <AccordionDropdown
                  onClick={handleNavbarToggle}
                  label={item.label}
                  items={item.submenuItems}
                />
              ) : (
                <Link
                  className="px-2"
                  color={pathname === item.href ? "primary" : "foreground"}
                  href={item.href}
                  size="lg"
                  onClick={handleNavbarToggle}
                >
                  {item.label}
                </Link>
              )}
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
