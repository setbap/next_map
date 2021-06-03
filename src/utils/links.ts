const index = () => "/";

const map = () => "/map";

const landfills = () => "/landfill";

const contact_us = () => "/contact_us";

const encyclopedia = () => "/encyclopedia";

const tutorial = () => "/tutorial";

const landfillsItem = ({ city }: { city: string }) => `/landfill/${city}`;

const encyclopediaItem = ({ item, type }: { item: string; type: string }) =>
  `/encyclopedia/${type}/${item}`;

const tutorialItem = ({ slug }: { slug: string }) => `/tutorial/${slug}`;
const recycle = () => `/recycle`;

const pagesLinks = {
  recycle,
  index,
  map,
  contact_us,
  encyclopedia,
  tutorial,
  encyclopediaItem,
  landfills,
  landfillsItem,
  tutorialItem,
};

export { pagesLinks };
