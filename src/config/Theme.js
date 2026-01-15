const THEMES = {


  insightDarkAwards: {
    name: "Insight Dark Awards",
    primary: {
      from: "from-orange-500",
      to: "to-red-600",
      hover: "hover:from-orange-600 hover:to-red-700",
      text: "text-orange-500",
      bg: "bg-orange-600",
      border: "border-orange-400/30",
    },
    secondary: {
      from: "from-red-700",
      to: "to-rose-800",
      text: "text-red-400",
      bg: "bg-red-700",
      border: "border-red-500/30",
    },
    accent: {
      from: "from-amber-400",
      to: "to-orange-500",
      text: "text-amber-400",
      bg: "bg-amber-500",
      border: "border-amber-400/40",
    },
    gradient: {
      hero: "from-black via-slate-900 to-red-900",
      section1: "from-slate-950 to-slate-900",
      section2: "from-slate-900 to-red-950",
      section3: "from-red-950 to-orange-950",
      footer: "from-black via-slate-950 to-black",
    },
  },

insightCrimsonNight: {
  name: "Crimson Night",
  primary: {
    from: "from-red-600",
    to: "to-orange-600",
    hover: "hover:from-red-700 hover:to-orange-700",
    text: "text-orange-500",
    bg: "bg-red-600",
    border: "border-red-500/30",
  },
  secondary: {
    from: "from-black",
    to: "to-red-900",
    text: "text-red-400",
    bg: "bg-black",
    border: "border-red-700/30",
  },
  accent: {
    from: "from-amber-400",
    to: "to-yellow-500",
    text: "text-amber-400",
    bg: "bg-amber-500",
    border: "border-amber-400/40",
  },
  gradient: {
    hero: "from-black via-slate-900 to-red-900",
    section1: "from-slate-950 to-slate-900",
    section2: "from-slate-900 to-red-950",
    section3: "from-red-950 to-orange-950",
    footer: "from-black via-slate-950 to-black",
  },
},
insightMoltenEmber: {
  name: "Molten Ember",
  primary: {
    from: "from-amber-500",
    to: "to-red-700",
    hover: "hover:from-amber-600 hover:to-red-800",
    text: "text-amber-400",
    bg: "bg-red-700",
    border: "border-amber-500/30",
  },
  secondary: {
    from: "from-red-800",
    to: "to-black",
    text: "text-red-500",
    bg: "bg-red-800",
    border: "border-red-600/30",
  },
  accent: {
    from: "from-orange-400",
    to: "to-amber-500",
    text: "text-orange-400",
    bg: "bg-orange-500",
    border: "border-orange-400/40",
  },
  gradient: {
    hero: "from-black via-red-950 to-amber-900",
    section1: "from-slate-950 to-red-950",
    section2: "from-red-950 to-amber-950",
    section3: "from-amber-950 to-black",
    footer: "from-black to-black",
  },
},

insightInfernoBlack: {
  name: "Inferno Black",
  primary: {
    from: "from-orange-600",
    to: "to-red-700",
    hover: "hover:from-orange-700 hover:to-red-800",
    text: "text-orange-500",
    bg: "bg-orange-700",
    border: "border-orange-500/30",
  },
  secondary: {
    from: "from-neutral-900",
    to: "to-neutral-950",
    text: "text-neutral-400",
    bg: "bg-neutral-900",
    border: "border-neutral-700/30",
  },
  accent: {
    from: "from-red-500",
    to: "to-rose-600",
    text: "text-red-400",
    bg: "bg-red-600",
    border: "border-red-500/40",
  },
  gradient: {
    hero: "from-black via-neutral-900 to-red-950",
    section1: "from-neutral-950 to-neutral-900",
    section2: "from-neutral-900 to-red-950",
    section3: "from-red-950 to-black",
    footer: "from-black to-black",
  },
},


};

export const ACTIVE_THEME = THEMES.insightCrimsonNight;

export default THEMES;
