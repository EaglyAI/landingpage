import { useEffect } from 'react';

const BRAND_NAME = 'Eagly AI';

const INDUSTRY_LABELS: Record<string, string> = {
  plumbing: 'plumbing',
  plumber: 'plumbing',
  plumbers: 'plumbing',
  hvac: 'HVAC',
  electrical: 'electrical',
  electrician: 'electrical',
  electricians: 'electrical',
  roofing: 'roofing',
  roofer: 'roofing',
  cleaning: 'cleaning',
  landscaping: 'landscaping',
  lawncare: 'lawn care',
  'lawn-care': 'lawn care',
  pestcontrol: 'pest control',
  'pest-control': 'pest control',
  locksmith: 'locksmith',
  towing: 'towing',
  'garage-door': 'garage door',
  'appliance-repair': 'appliance repair',
  painting: 'painting',
  remodeling: 'remodeling',
  movers: 'moving',
  moving: 'moving',
  'junk-removal': 'junk removal',
  'pool-service': 'pool service',
  'auto-detailing': 'auto detailing',
};

function normalizeSegment(segment: string): string {
  return segment.toLowerCase().replace(/\s+/g, '-');
}

function toIndustryLabel(pathname: string): string | null {
  const segments = pathname.split('/').filter(Boolean);

  if (segments.length === 0) {
    return null;
  }

  const industrySegment = segments[0] === 'industries' ? segments[1] : segments[0];
  if (!industrySegment) {
    return null;
  }

  const normalized = normalizeSegment(industrySegment);
  return INDUSTRY_LABELS[normalized] ?? null;
}

function ensureDescriptionTag(): HTMLMetaElement {
  let tag = document.querySelector<HTMLMetaElement>('meta[name="description"]');

  if (!tag) {
    tag = document.createElement('meta');
    tag.name = 'description';
    document.head.appendChild(tag);
  }

  return tag;
}

function setIndustryMetadata(pathname: string) {
  const industry = toIndustryLabel(pathname);

  if (!industry) {
    document.title = `${BRAND_NAME} | AI receptionist & automation for home service teams`;
    ensureDescriptionTag().content =
      'Eagly AI gives home service companies a 24/7 AI receptionist, smart scheduling, and automation that helps teams book and close more jobs.';
    return;
  }

  const title = `${BRAND_NAME} | AI for ${industry} businesses | automation for ${industry} companies | AI receptionist for ${industry}`;
  const description =
    `Get AI for ${industry} businesses with automation for ${industry} companies and an AI receptionist for ${industry}. ` +
    `Eagly AI helps ${industry} teams answer faster, book more jobs, and streamline operations.`;

  document.title = title;
  ensureDescriptionTag().content = description;
}

export function useIndustryMetadata() {
  useEffect(() => {
    const updateMetadata = () => setIndustryMetadata(window.location.pathname);

    updateMetadata();
    window.addEventListener('popstate', updateMetadata);

    return () => window.removeEventListener('popstate', updateMetadata);
  }, []);
}
