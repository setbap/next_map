const index = () => "/";

const map = () => "/map";

const landfills = () => "/landfill";

const about = () => "/about";

const contact_us = () => "/contact_us";

const encyclopedia = () => "/encyclopedia";

const tutorial = () => "/tutorial";

const encyclopediaItem = ({ item, type }: { item: string; type: string }) =>
  `/encyclopedia/${type}/${item}`;

const tutorialItem = ({ slug }: { slug: string }) => `/tutorial/${slug}`;

const pagesLinks = {
  index,
  map,
  about,
  contact_us,
  encyclopedia,
  tutorial,
  encyclopediaItem,
  landfills,
  tutorialItem,
};

export { pagesLinks };
