/**
 * ─────────────────────────────────────────────
 *  EDIT EVERYTHING ABOUT THE EVENT RIGHT HERE
 * ─────────────────────────────────────────────
 */

import galleryOne from "@/assets/gallery-1.jpg";
import galleryTwo from "@/assets/gallery-2.jpg";
import galleryThree from "@/assets/gallery-3.jpg";
import galleryFour from "@/assets/gallery-4.jpg";

export const invitation = {
  hosts: "The Gurav Family",

  event: {
    title: "Ganpati Sthapana",
    date: "[DATE]",
    time: "[TIME]",
    venue: "[VENUE]",
  },

  schedule: [
    { name: "Ganpati Sthapana", time: "[TIME]" },
    { name: "Morning Aarti", time: "[TIME]" },
    { name: "Evening Aarti", time: "[TIME]" },
    { name: "Prasad", time: "[TIME]" },
  ],

  location: {
    name: "[VENUE NAME]",
    address: "[FULL ADDRESS]",
    // Paste a Google Maps link here
    mapsUrl: "https://maps.google.com/?q=[VENUE+ADDRESS]",
  },

  rsvp: {
    // Replace with a WhatsApp link (https://wa.me/9199...) or a form URL
    url: "https://wa.me/910000000000?text=We%20will%20join%20the%20Ganpati%20celebration!",
  },

  gallery: [
    { src: galleryOne, alt: "Ganpati mandap decorated with marigolds and silk drapes" },
    { src: galleryTwo, alt: "Brass diyas lit with marigold petals" },
    { src: galleryThree, alt: "Puja thali with modak and kumkum" },
    { src: galleryFour, alt: "Ganpati idol glowing between aarti lamps" },
  ],
} as const;
