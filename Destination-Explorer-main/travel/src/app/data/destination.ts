
export interface Destination {
  id: number;
  name: string;
  country: string;
  image: string;
  description: string;
  longDescription: string;
  bestTime: string;
  budget: string;
  duration: string;
  rating: number;
  attractions: string[];
}

export const destinations: Destination[] = [
  {
    id: 1,
    name: "Bali",
    country: "Indonesia",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
    description:
      "Discover tropical beaches, green rice terraces, and beautiful temples.",
    longDescription:
      "Bali is a tropical paradise known for its beautiful beaches, peaceful temples, traditional culture, and lush green landscapes. It is perfect for adventure, relaxation, and exploring local traditions.",
    bestTime: "April - October",
    budget: "₹35,000 - ₹60,000",
    duration: "5 - 7 days",
    rating: 4.9,
    attractions: [
      "Ubud Rice Terraces",
      "Uluwatu Temple",
      "Nusa Penida",
      "Seminyak Beach",
    ],
  },
  {
    id: 2,
    name: "Swiss Alps",
    country: "Switzerland",
    image:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1200&q=80",
    description:
      "Experience dramatic mountains, scenic villages, and alpine lakes.",
    longDescription:
      "The Swiss Alps offer breathtaking mountain scenery, charming villages, clear lakes, and outdoor adventures. Visitors can enjoy hiking, cable cars, scenic train journeys, and winter sports.",
    bestTime: "June - September",
    budget: "₹1,20,000 - ₹2,00,000",
    duration: "6 - 8 days",
    rating: 4.9,
    attractions: [
      "Jungfraujoch",
      "Lauterbrunnen",
      "Lake Lucerne",
      "Matterhorn",
    ],
  },
  {
    id: 3,
    name: "Paris",
    country: "France",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    description:
      "Explore romantic streets, famous landmarks, art, and French cuisine.",
    longDescription:
      "Paris combines iconic architecture, world-famous museums, beautiful streets, and exceptional food. Explore historic landmarks, enjoy riverside walks, and experience the city's cafés and culture.",
    bestTime: "April - June",
    budget: "₹1,00,000 - ₹1,80,000",
    duration: "4 - 6 days",
    rating: 4.8,
    attractions: [
      "Eiffel Tower",
      "Louvre Museum",
      "Notre-Dame",
      "Montmartre",
    ],
  },
  {
    id: 4,
    name: "Kyoto",
    country: "Japan",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
    description:
      "Visit traditional temples, peaceful gardens, and historic streets.",
    longDescription:
      "Kyoto is famous for its traditional Japanese architecture, tranquil gardens, shrines, and seasonal beauty. It offers an opportunity to experience Japanese heritage, food, and local customs.",
    bestTime: "March - May",
    budget: "₹80,000 - ₹1,40,000",
    duration: "5 - 6 days",
    rating: 4.8,
    attractions: [
      "Fushimi Inari Shrine",
      "Arashiyama Bamboo Grove",
      "Kinkaku-ji",
      "Gion District",
    ],
  },
  {
    id: 5,
    name: "Santorini",
    country: "Greece",
    image:
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=1200&q=80",
    description:
      "Enjoy whitewashed buildings, blue domes, and stunning sea views.",
    longDescription:
      "Santorini is a Greek island celebrated for its white buildings, blue-domed churches, volcanic coastline, and sunsets. It is a memorable destination for scenic walks and coastal dining.",
    bestTime: "May - October",
    budget: "₹90,000 - ₹1,60,000",
    duration: "4 - 5 days",
    rating: 4.8,
    attractions: [
      "Oia Village",
      "Fira",
      "Red Beach",
      "Santorini Caldera",
    ],
  },
  {
    id: 6,
    name: "Manali",
    country: "India",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
    description:
      "Explore Himalayan landscapes, mountain roads, and adventure trails.",
    longDescription:
      "Manali is a popular Himalayan destination offering mountain views, rivers, forests, and outdoor activities. It is ideal for exploring nature, visiting nearby villages, and enjoying mountain adventures.",
    bestTime: "March - June",
    budget: "₹8,000 - ₹20,000",
    duration: "3 - 5 days",
    rating: 4.7,
    attractions: [
      "Solang Valley",
      "Hadimba Temple",
      "Old Manali",
      "Atal Tunnel",
    ],
  },
];
