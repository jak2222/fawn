"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

const CAL_LINK = "jak-norwood-bdwdcp/30min";
const NAMESPACE = "30min";

export default function CalBooking() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: NAMESPACE });
      // Browser security blocks direct CSS injection into Cal's iframe.
      // Best we can do via the embed API: override Cal's CSS variables.
      // Cal reads these for typography in its booker — falling back to
      // Georgia (universally installed serif) gives the embed a closer
      // editorial feel to the rest of the site.
      const editorialFontStack =
        '"Lora", "DM Serif Display", Georgia, "Times New Roman", serif';

      const brandTheme = {
        "cal-brand": "#6E1E1E",
        "cal-brand-emphasis": "#8A2828",
        "cal-bg": "#F2EDE4",
        "cal-bg-emphasis": "#EAE3D4",
        "cal-bg-subtle": "#EFE9DC",
        "cal-bg-muted": "#EFE9DC",
        "cal-text": "#1F1B17",
        "cal-text-emphasis": "#1F1B17",
        "cal-text-subtle": "#5A5249",
        "cal-text-muted": "#7A7065",
        "cal-border": "rgba(31, 27, 23, 0.18)",
        "cal-border-subtle": "rgba(31, 27, 23, 0.10)",
        "cal-border-emphasis": "rgba(31, 27, 23, 0.35)",
        // Font overrides — Cal's tokens for body and display copy
        "cal-font-cal": editorialFontStack,
        "cal-font-sans": editorialFontStack,
        "cal-font-default": editorialFontStack,
      };

      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: brandTheme,
          dark: brandTheme,
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <Cal
      namespace={NAMESPACE}
      calLink={CAL_LINK}
      style={{
        width: "100%",
        height: "100%",
        minHeight: "680px",
        overflow: "scroll",
      }}
      config={{ layout: "month_view" }}
    />
  );
}
