import data from './sections.json';

interface SectionModel {
  title: string,
  imageUrl: string,
  size: string,
  id: number,
  linkUrl: string,
}

export default data as SectionModel[];