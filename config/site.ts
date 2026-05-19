export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Construct Carnival",
  serial: "1.0",
  description:
    "Construct Carnival 1.0 is a nationwide festival for students studying Civil Engineering, Building Engineering and Construction Management, Urban and Regional Planning, and Architecture.",
  origin: "https://constructcarnival.com",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    // {
    //   label: "About",
    //   href: "/about",
    //   submenu: true,
    //   submenuItems: [
    //     {
    //       label: "About Construct Carnival",
    //       href: "/about",
    //     },
    //     {
    //       label: "About BECM",
    //       href: "/about-becm",
    //     },
    //   ],
    // },
    {
      label: "Events",
      href: "/events",
    },
    {
      label: "Workshop",
      href: "/workshop",
    },
    {
      label: "Registration",
      href: "/registration",
    },

    {
      label: "Committee",
      href: "/committee/organizing",
      submenu: false,
      submenuItems: [
        {
          label: "Organizing Committee",
          href: "/committee/organizing",
        },
        {
          label: "Technical Committee",
          href: "/committee/technical",
        },
      ],
    },
    // {
    //   label: "Program Schedule",
    //   href: "/program_schedule",
    // },
    {
      label: "Schedule",
      href: "/important_dates",
    },
    {
      label: "Alumni",
      href: "/alumni",
    },
    {
      label: "Sponsors",
      href: "/sponsors",
    },

    {
      label: "Memories",
      href: "/memories",
    },
    // {
    //   label: "Archive",
    //   href: "/archive",
    // },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    // {
    //   label: "About",
    //   href: "/about",
    //   submenu: true,
    //   submenuItems: [
    //     {
    //       label: "About Construct Carnival",
    //       href: "/about",
    //     },
    //     {
    //       label: "About BECM",
    //       href: "/about-becm",
    //     },
    //   ],
    // },
    {
      label: "Workshop",
      href: "/workshop",
    },
    {
      label: "Events",
      href: "/events",
    },
    {
      label: "Registration",
      href: "/registration",
    },
    {
      label: "Committee",
      href: "/committee/organizing",
      submenu: false,
      submenuItems: [
        {
          label: "Organizing Committee",
          href: "/committee/organizing",
        },
        {
          label: "Technical Committee",
          href: "/committee/technical",
        },
      ],
    },

    // {
    //   label: "Program Schedule",
    //   href: "/program_schedule",
    // },
    {
      label: "Schedule",
      href: "/important_dates",
    },
    {
      label: "Alumni",
      href: "/alumni",
    },
    {
      label: "Sponsors",
      href: "/sponsors",
    },

    {
      label: "Memories",
      href: "/memories",
    },
    // {
    //   label: "Archive",
    //   href: "/archive",
    // },
    {
      label: "Contact",
      href: "/contact",
    },
  ],

  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
