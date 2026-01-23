import { type FC } from "react";

interface IntroSectionProps {
  title?: string;
  opening_crawl?: string;
  image_url?: string;
}

export const IntroSection: FC<IntroSectionProps> = () => {
  return <div>intro</div>;
};
