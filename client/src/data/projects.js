// Cabin & Co
import cabin_co_1 from '../assets/Images/COMMERCIAL/CABIN & CO/H1_Interactive LightMix copy.jpg'
import cabin_co_2 from '../assets/Images/COMMERCIAL/CABIN & CO/H2_Interactive LightMix copy 2.jpg'
import cabin_co_3 from '../assets/Images/COMMERCIAL/CABIN & CO/H3_Interactive LightMix copy.jpg'

// S Pal
import spal_1 from '../assets/Images/COMMERCIAL/S PAL BUSINESS PARK OFFICE GURGAON/CONFRENCE.jpg'
import spal_2 from '../assets/Images/COMMERCIAL/S PAL BUSINESS PARK OFFICE GURGAON/V1.jpg'
import spal_3 from '../assets/Images/COMMERCIAL/S PAL BUSINESS PARK OFFICE GURGAON/V2.jpg'

// Primark
import primark_1 from '../assets/Images/COMMERCIAL/primark office bhopal/C6_Interactive LightMix.jpg'
import primark_2 from '../assets/Images/COMMERCIAL/primark office bhopal/t1_Interactive LightMix.jpg'
import primark_3 from '../assets/Images/COMMERCIAL/primark office bhopal/t2_Interactive LightMix.jpg'

// Hotel (Only 1)
import hotel_1 from '../assets/Images/HOSPITALITY/SUNEL GUPTA HOTEL BADAUN/K3_Interactive LightMix copy.jpg'

// Farm House (Only 1)
import farm_house_1 from '../assets/Images/RESIDENCE/FARM HOUSE/c4_Interactive LightMix.jpg'

// Farm House Interior
import farm_house_int_1 from '../assets/Images/RESIDENCE/FARM HOUSE INTERIOR/C2_Interactive LightMix.jpg'
import farm_house_int_2 from '../assets/Images/RESIDENCE/FARM HOUSE INTERIOR/1.jpg'
import farm_house_int_3 from '../assets/Images/RESIDENCE/FARM HOUSE INTERIOR/2.jpg'

// Looks Salon
import looks_salon_1 from '../assets/Images/RETAIL/LOOKS SALON/1.jpg'
import looks_salon_2 from '../assets/Images/RETAIL/LOOKS SALON/2.jpg'
import looks_salon_3 from '../assets/Images/RETAIL/LOOKS SALON/3.jpg'

export const PROJECTS = [
  {
    id: 1,
    title: 'CABIN & CO',
    location: 'New Delhi',
    category: 'Commercial',
    type: 'Workspace',
    size: '15,000 Sq. Ft.',
    status: 'Completed in 2021',
    description: 'Cabin & Co is a modern co-working space designed to foster creativity and collaboration. The design integrates biophilic elements with brutalist concrete finishes, offering a seamless transition between private focused zones and open collaborative areas.',
    images: [cabin_co_1, cabin_co_2, cabin_co_3],
    offset: false,
  },
  {
    id: 2,
    title: 'S PAL BUSINESS PARK',
    location: 'Gurgaon',
    category: 'Commercial',
    type: 'Business Park',
    size: '2.5 Acres',
    status: 'Under Construction',
    description: 'A state-of-the-art business park designed for modern enterprises. The architectural language focuses on sustainability and energy efficiency, creating a monumental presence while maintaining harmony with its urban context.',
    images: [spal_1, spal_2, spal_3],
    offset: true,
  },
  {
    id: 3,
    title: 'PRIMARK OFFICE',
    location: 'Bhopal',
    category: 'Commercial',
    type: 'Office Interior',
    size: '8,000 Sq. Ft.',
    status: 'Completed in 2022',
    description: 'An elegant workspace reflecting the core values of the organization. The interiors feature sleek lines, warm wooden accents, and a dynamic spatial arrangement to enhance productivity and well-being.',
    images: [primark_1, primark_2, primark_3],
    offset: false,
  },
  {
    id: 4,
    title: 'SUNEL GUPTA HOTEL',
    location: 'Badaun',
    category: 'Hospitality',
    type: 'Institutional',
    size: '1.2 Acres',
    status: 'Design Phase',
    description: 'A boutique hospitality project aiming to redefine luxury in Badaun. The design emphasizes natural light, locally sourced materials, and a contemporary aesthetic that pays homage to regional heritage.',
    images: [hotel_1],
    offset: true,
  },
  {
    id: 5,
    title: 'FARM HOUSE',
    location: 'Bijwasan, New Delhi',
    category: 'Residential',
    type: 'Farmhouse',
    size: '2.5 Acres.',
    status: 'Completed in 2012',
    description: 'Rooted with sound architectural principles and a love for environment, this luxurious residential space depicts a Contemporary sense of style. The project seamlessly blurs the boundaries of exterior and interior retaining the natural aspects of the site responsive to its surroundings. It is a luxurious hideaway showcasing traditional wisdom with new innovations.',
    images: [farm_house_1],
    offset: false,
  },
  {
    id: 6,
    title: 'FARM HOUSE INTERIOR',
    location: 'Bijwasan, New Delhi',
    category: 'Residential',
    type: 'Interior Design',
    size: '12,000 Sq. Ft.',
    status: 'Completed in 2012',
    description: 'The interior of the farmhouse is a continuation of its architectural philosophy. Featuring bespoke furniture, curated art, and a minimalist material palette, the space exudes warmth, tranquility, and understated luxury.',
    images: [farm_house_int_1, farm_house_int_2, farm_house_int_3],
    offset: true,
  },
  {
    id: 7,
    title: 'LOOKS SALON',
    location: 'New Delhi',
    category: 'Retail',
    type: 'Beauty & Wellness',
    size: '3,000 Sq. Ft.',
    status: 'Completed in 2023',
    description: 'A high-end salon designed to provide an immersive and relaxing experience. The space utilizes custom lighting, mirrored surfaces, and a monolithic aesthetic to elevate the standard of beauty retail environments.',
    images: [looks_salon_1, looks_salon_2, looks_salon_3],
    offset: false,
  },
]
