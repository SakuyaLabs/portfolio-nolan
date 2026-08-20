import { ImageResponse } from "next/og";

export const alt = "Nolan";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * OGP画像。next/ogのデフォルトフォントは日本語グリフを持たないため、英語のみで構成する
 * （①〜⑤と共通方針）。
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0B0B14",
          backgroundImage:
            "radial-gradient(circle at 78% 22%, rgba(124,92,255,0.35), transparent 55%), radial-gradient(circle at 10% 90%, rgba(124,92,255,0.2), transparent 45%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 6,
            color: "#8C70FF",
            textTransform: "uppercase",
          }}
        >
          Nolan
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 64,
            fontWeight: 700,
            color: "#F4F3FF",
            lineHeight: 1.25,
            maxWidth: 900,
          }}
        >
          Autonomy is not given. It is taken.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 24,
            color: "#6F6A87",
          }}
        >
          Engineering careers at a SaaS startup
        </div>
      </div>
    ),
    { ...size },
  );
}
