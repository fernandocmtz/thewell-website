export const SOCIAL = {
  instagram: "https://www.instagram.com/thewellbiblechurch/",
  youtube: "https://www.youtube.com/@thewellbiblechurch",
  youtubeSearch: "https://www.youtube.com/results?search_query=the+well+bible+church",
  location: "https://maps.app.goo.gl/4Ur1ZEJmcehZmVPY7?g_st=iw",
};

export const NAV = [
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Who We Are", href: "/about#who-we-are" },
      { label: "Kids", href: "/about#kids" },
      { label: "Small Groups", href: "/about#small-groups" },
      { label: "Location", href: "/about#location" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      {
        labe: "Weekly Resources",
        href: "/resources"
      },

      { label: "Kids Classes", href: "/resources#kids-classes" },
      { label: "Adult Classes", href: "/resources#adult-classes" },
    ],
  },
  { label: "Giving", href: "/giving" },
  { label: "Events", href: "/events" },
] as const;

/* Search index for the navbar search icon */
export const SEARCH_INDEX = [
  { title: "About Us", href: "/about" },
  { title: "Who We Are", href: "/about#who-we-are" },
  { title: "Kids", href: "/about#kids" },
  { title: "Small Groups", href: "/about#small-groups" },
  { title: "Location", href: "/about#location" },

  { title: "Resources", href: "/resources" },
  { title: "Kids Classes", href: "/resources#kids-classes" },
  { title: "Adult Classes", href: "/resources#adult-classes" },

  { title: "Giving", href: "/giving" },
  { title: "Events", href: "/events" },
] as const;