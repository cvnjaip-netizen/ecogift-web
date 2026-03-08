export function makeMetadata(title: string, description: string, path = "/") {
  const siteUrl = "https://www.ecogiftchile.cl";
  return {
    title,
    description,
    alternates: { canonical: `${siteUrl}${path}` },
    openGraph: {
      title,
      description,
      url: `${siteUrl}${path}`,
      siteName: "EcoGift Chile",
      locale: "es_CL",
      type: "website"
    }
  };
}
