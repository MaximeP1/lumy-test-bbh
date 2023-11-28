import { getMostViewedVideos } from "@/lib/utils";
import CarrouselVideos from "./CarrouselVideos";

interface Props {
  limit: number;
  title?: string;
}

export default async function MostViewedVideos({ limit, title }: Props) {
  const videos = await getMostViewedVideos(limit);

  return <CarrouselVideos videos={videos} title={title ?? "Les plus regardées"} size="sm" withLabels />
} 