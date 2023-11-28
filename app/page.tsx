import VideoALaUne from "@/components/VideosALaUne";
import Vagues from "@/assets/motif_vagues.svg";
import Image from "next/image";
import LastVideos from "@/components/LastVideos";
import MatchsVideos from "@/components/MatchsVideos";
import CustomPlaylistVideos from "@/components/CustomPlaylistVideos";

export default function Home() {
  return (
    <main className="bg-black p-8 flex flex-col gap-4 min-h-screen">
      <VideoALaUne limit={3} sort="-date_published" />
      <div className="flex flex-col gap-4 bg-vagues">
        {/* <Image src={Vagues} alt="t" className="text-gray-300" /> */}
        <LastVideos limit={6} />
        <MatchsVideos />
        <CustomPlaylistVideos bannerSrc="/bandeau_ehf_champions_league.jpg" playlistId={59} backgroundColor="#001231" />
      </div>
    </main>
  )
}
