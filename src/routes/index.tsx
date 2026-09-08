import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useState } from "react";

import { OpeningEnvelope } from "@/components/invitation/OpeningEnvelope";
import { HeroSection } from "@/components/invitation/HeroSection";
import { InvitationMessage } from "@/components/invitation/InvitationMessage";
import { EventDetails } from "@/components/invitation/EventDetails";
import { PujaSchedule } from "@/components/invitation/PujaSchedule";
import { BappaSection } from "@/components/invitation/BappaSection";
import { LocationSection } from "@/components/invitation/LocationSection";
import { GallerySection } from "@/components/invitation/GallerySection";
import { RSVPSection } from "@/components/invitation/RSVPSection";
import { FinalBlessing } from "@/components/invitation/FinalBlessing";

const title = "Ganpati Invitation | Ganpati Bappa Morya";
const description =
  "A sealed invitation to our Ganpati celebration — open the sacred seal to see the sthapana details, aarti schedule and venue.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [opened, setOpened] = useState(false);
  const handleOpened = useCallback(() => setOpened(true), []);

  return (
    <>
      <OpeningEnvelope onOpened={handleOpened} />
      <main
        aria-hidden={!opened}
        className={`transition-opacity duration-1000 ${opened ? "opacity-100" : "opacity-0"}`}
      >
        <HeroSection />
        <InvitationMessage />
        <EventDetails />
        <PujaSchedule />
        <BappaSection />
        <LocationSection />
        <GallerySection />
        <RSVPSection />
        <FinalBlessing />
      </main>
    </>
  );
}
