import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          letterSpacing: "-.02em",
          fontWeight: 700,
          background: "white",
        }}
      >
        <div
          style={{
            left: 42,
            top: 42,
            position: "absolute",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              display: "flex",
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                background:
                  "linear-gradient(to bottom right, #60a5fa, #a855f7)",
                display: "flex",
                borderRadius: 7,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: 16,
                  height: 16,
                  background: "white",
                  borderRadius: 3,
                  display: "flex",
                  opacity: 0.5,
                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom right, #60a5fa, #a855f7)",
                borderRadius: 7,
                opacity: 0.5,
                filter: "blur(4px)",
              }}
            />
          </div>

          <span
            style={{
              marginLeft: 8,
              fontSize: 20,
            }}
          >
            tarkui.com
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            padding: "20px 50px",
            margin: "0 42px",
            fontSize: 40,
            width: "auto",
            maxWidth: 550,
            textAlign: "center",
            backgroundColor: "black",
            color: "white",
            lineHeight: 1.4,
          }}
        >
          美 UI components with Ark UI and Tailwind
        </div>
      </div>
    ),
    {
      width: 800,
      height: 400,
    }
  );
}
