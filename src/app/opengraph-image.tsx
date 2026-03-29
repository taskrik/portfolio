import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Anastasios Krikonis - Senior Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const photoData = await readFile(
    join(process.cwd(), "public", "profile.jpeg")
  );
  const photoBase64 = `data:image/jpeg;base64,${photoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#06060e",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          padding: "60px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background accent glow */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(0, 229, 191, 0.08)",
            filter: "blur(100px)",
          }}
        />

        {/* Left content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
          }}
        >
          {/* Overline */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 24,
            }}
          >
            <div
              style={{
                width: 48,
                height: 2,
                background: "#00e5bf",
              }}
            />
            <span
              style={{
                color: "#00e5bf",
                fontSize: 16,
                letterSpacing: "0.15em",
                textTransform: "uppercase" as const,
              }}
            >
              Senior Software Engineer
            </span>
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              color: "#eaeaf0",
              lineHeight: 1,
              letterSpacing: "-0.02em",
              marginBottom: 4,
            }}
          >
            Anastasios
          </div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              color: "#00e5bf",
              lineHeight: 1,
              letterSpacing: "-0.02em",
              marginBottom: 32,
            }}
          >
            Krikonis
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 20,
              color: "#8888a0",
              maxWidth: 560,
              lineHeight: 1.5,
            }}
          >
            7+ years building production-grade web & mobile apps in Fintech &
            IoT. React, React Native, Node.js, TypeScript.
          </div>

          {/* Stats row */}
          <div
            style={{
              display: "flex",
              gap: 48,
              marginTop: 36,
              paddingTop: 24,
              borderTop: "1px solid rgba(30, 30, 50, 0.8)",
            }}
          >
            {[
              { value: "7+", label: "Years Engineering" },
              { value: "13+", label: "Years Professional" },
              { value: "5", label: "Companies" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <span
                  style={{
                    fontSize: 32,
                    fontWeight: 800,
                    color: "#00e5bf",
                  }}
                >
                  {stat.value}
                </span>
                <span style={{ fontSize: 13, color: "#55556a", marginTop: 4 }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Photo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: 40,
          }}
        >
          <div
            style={{
              width: 280,
              height: 350,
              borderRadius: 16,
              overflow: "hidden",
              border: "2px solid rgba(0, 229, 191, 0.2)",
              position: "relative",
              display: "flex",
            }}
          >
            <img
              src={photoBase64}
              alt=""
              width={280}
              height={350}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
