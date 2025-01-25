import { NextResponse } from "next/server";

export async function GET() {
  const assetlinks = [
    {
      relation: ["delegate_permission/common.handle_all_urls"],
      target: {
        namespace: "android_app",
        package_name: "com.emmanuel_ck.handiehubexpo",
        sha256_cert_fingerprints: [process.env.NEXT_PUBLIC_FINGERPRINT_SHA256],
      },
    },
  ];

  return NextResponse.json(assetlinks, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
