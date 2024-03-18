const rides = [
  {
    id: "hooks-rapids",
    name: "Hooks Rapids",
    description: "A thrilling ride through the world of hooks",
    tags: ["water"],
  },
  {
    id: "components-roller-coaster",
    name: "Components Roller Coaster",
    description: "Get ready for a wild ride through the world of components",
    tags: ["roller-coaster"],
  },
  {
    id: "react-router-navigation-roller-coaster",
    name: "React Router Navigation Roller Coaster",
    description:
      "A roller coaster that navigates through the world of React Router",
    tags: ["roller-coaster"],
  },
  {
    id: "virtual-dom-escape-room",
    name: "Virtual DOM escape room",
    description: "Can you escape the virtual DOM?",
    tags: ["static"],
  },
  {
    id: "memoized-aqua-park",
    name: "Memoized aqua park",
    description: "A park full of memoized water rides",
    tags: ["water"],
  },
];

export const getRide = async (id) => {
  return rides.find((ride) => ride.id === id);
};

export const getRides = async (tag) => {
  if (tag === "all" || tag === undefined || tag === "" || tag === null) {
    return rides;
  }

  return rides.filter((ride) => ride.tags.includes(tag));
};
