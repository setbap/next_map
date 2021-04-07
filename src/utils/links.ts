import { EncyclopediaType } from "lib/encyclopedia";

const index = () => "/";

const map = () => "/map";

const landfills = () => "/landfills";

const about = () => "/about";

const contact_us = () => "/contact_us";

const encyclopedia = () => "/encyclopedia";

const encyclopediaItem = ({ item, type }: { item: string; type: string }) =>
  `/encyclopedia/${type}/${item}`;

const pagesLinks = {
  index,
  map,
  about,
  contact_us,
  encyclopedia,
  encyclopediaItem,
  landfills,
};

export { pagesLinks };
