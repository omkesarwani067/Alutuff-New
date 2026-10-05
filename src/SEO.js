import React from 'react';

const SITE_URL = 'https://alutuff.in';

export default function SEO() {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Alutuff',
    url: SITE_URL,
    logo: `${SITE_URL}/logo512.png`,
    image: `${SITE_URL}/alutuff-acp-sheets-manufacturer-supplier-india.jpg`,
    description: 'Alutuff manufactures aluminium composite panels and ACP sheets for facade, exterior, interior and signage applications across India.',
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Alutuff',
    url: SITE_URL,
  };

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(organization)}</script>
      <script type="application/ld+json">{JSON.stringify(website)}</script>
    </>
  );
}
