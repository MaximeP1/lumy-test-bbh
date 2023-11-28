'use client';

import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import Image from "next/image";
import logoBBH from "@/assets/logo_bbh.svg"

export default function Navmenu() {
  return (
    <Navbar maxWidth="full" className="py-2 px-6 bg-black">
      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarItem isActive>
          <Link href="#" color="foreground">
            Accueil
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" color="foreground">
            Playlists
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" color="foreground">
            Direct
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Image
            src={logoBBH}
            alt="Logo BBH"
          />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} href="#" variant="flat">
            bbh.bzh &gt;
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}