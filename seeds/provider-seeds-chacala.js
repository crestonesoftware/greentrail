const Provider = require("../models/Provider");

const providerData = [
  //eat
  {
    provider_name: "Café Palmar",
    service: "restaurant",
    community_id: 1,
    site_id: 3,
  },
  {
    provider_name: "Chac Mool",
    service: "restaurant",
    community_id: 1,
    site_id: 25,
  },
  {
    provider_name: "Lalaxtli",
    service: "restaurant",
    community_id: 1,
    site_id: 11,
  },
  {
    provider_name: "Las Ramadas de Alvaro",
    service: "restaurant",
    community_id: 1,
    site_id: 30,
  },
  {
    provider_name: "Palapa de Don Isidro",
    service: "restaurant",
    community_id: 1,
    site_id: 33,
  },
  {
    provider_name: "Restaurante Chico's",
    service: "restaurant",
    community_id: 1,
    site_id: 26,
  },
  {
    provider_name: "Restaurante Conny's",
    service: "restaurant",
    community_id: 1,
    site_id: 27,
  },
  {
    provider_name: "Restaurante Las Brisas",
    service: "restaurant",
    community_id: 1,
    site_id: 29,
  },
  {
    provider_name: "Surfer's Pizza",
    service: "restaurant",
    community_id: 1,
    site_id: 34,
  },
  {
    provider_name: "Tacos Kicha",
    service: "restaurant",
    community_id: 1,
    site_id: 35,
  },
  {
    provider_name: "Tapas Bar de Majahua",
    service: "restaurant",
    community_id: 1,
    site_id: 36,
  },
  {
    provider_name: "Taquería Acela",
    service: "restaurant",
    community_id: 1,
    site_id: 20,
  },
  // stay
  {
    provider_name: "Hotel Las Brisas",
    service: "accommodation",
    community_id: 1,
    site_id: 29,
  },
  {
    provider_name: "Bungalows Chacala Maria Jose",
    service: "accommodation",
    community_id: 1,
    site_id: 21,
  },
  {
    provider_name: "Casa Melina",
    service: "accommodation",
    community_id: 1,
    site_id: 38,
  },
  {
    provider_name: "Casa Alegria",
    service: "accommodation",
    community_id: 1,
    site_id: 42,
  },
  {
    provider_name: "Casa Caballito Del Mar",
    service: "accommodation",
    community_id: 1,
    site_id: 4,
  },
  {
    provider_name: "Casa Cantera",
    service: "accommodation",
    community_id: 1,
    site_id: 22,
  },
  {
    provider_name: "Casa Cascada de Flores",
    service: "accommodation",
    community_id: 1,
    site_id: 5,
  },
  {
    provider_name: "Casa del Caballo Sonador",
    service: "accommodation",
    community_id: 1,
    site_id: 23,
  },
  {
    provider_name: "Casa Estrella del Mar",
    service: "accommodation",
    community_id: 1,
    site_id: 6,
  },
  {
    provider_name: "Casa Guitarra",
    service: "accommodation",
    community_id: 1,
    site_id: 43,
  },
  {
    provider_name: "Casa Mágica",
    service: "accommodation",
    community_id: 1,
    site_id: 24,
  },
  {
    provider_name: "Casa Maya",
    service: "accommodation",
    community_id: 1,
    site_id: 41,
  },
  {
    provider_name: "Casa Monarca",
    service: "accommodation",
    community_id: 1,
    site_id: 8,
  },
  {
    provider_name: "Chacala Casitas",
    service: "accommodation",
    community_id: 1,
    site_id: 39,
  },
  {
    provider_name: "Fresh Breeze Inn",
    service: "accommodation",
    community_id: 1,
    site_id: 9,
  },
  {
    provider_name: "Hotel Paraíso Escondido",
    service: "accommodation",
    community_id: 1,
    site_id: 10,
  },
  {
    provider_name: "Quinta Mar y Selva",
    service: "accommodation",
    community_id: 1,
    site_id: 15,
  },
  {
    provider_name: "Villa Celeste",
    service: "accommodation",
    community_id: 1,
    site_id: 18,
  },
  {
    provider_name: "Villa Tutu",
    service: "accommodation",
    community_id: 1,
    site_id: 40,
  },
  {
    provider_name: "Villas Pura Chacala",
    service: "accommodation",
    community_id: 1,
    site_id: 19,
  },
  {
    provider_name: "Abarrotes Jorge II",
    service: "amenities",
    community_id: 1,
    site_id: 1,
    description: "Grocery Store",
  },
  {
    provider_name: "Abarrotes Sarahi",
    service: "amenities",
    community_id: 1,
    site_id: 2,
    description: "Grocery Store"
  },
  {
    provider_name: "La Roca",
    service: "amenities",
    community_id: 1,
    site_id: 28,
    description: "Grocery Store, ATM"
  },
  {
    provider_name: "Minisuper Rules",
    service: "amenities",
    community_id: 1,
    site_id: 12,
    description: "Grocery Store, ATM"
  },
  {
    provider_name: "Lavandería Nashelly",
    service: "amenities",
    community_id: 1,
    site_id: 32,
    description: "Laundry"
  },
  {
    provider_name: "Lavandería Naye",
    service: "amenities",
    community_id: 1,
    site_id: 31,
    description: "Laundry"
  },
  {
    provider_name: "Lalaxtli",
    service: "amenities",
    community_id: 1,
    site_id: 11,
    description: "Bakery, ATM"
  },
  {
    provider_name: "Lavandería Nashelly",
    service: "amenities",
    community_id: 1,
    site_id: 32,
    description: "Laundry"
  },
  {
    provider_name: "Trini Moya",
    service: "amenities",
    community_id: 1,
    site_id: 14,
    description: "Spanish Lessons"
  },
  {
    provider_name: "Iliana Becerra",
    service: "amenities",
    community_id: 1,
    site_id: 14,
    description: "Spanish Lessons"
  },
  {
    provider_name: "Marina Buendia",
    service: "amenities",
    community_id: 1,
    site_id: 14,
    description: "Cooking Lessons"
  },
  {
    provider_name: "Emilia Robinson",
    service: "amenities",
    community_id: 1,
    site_id: 7,
    description: "Yoga Classes"
  },
  {
    provider_name: "Jewls Gardner",
    service: "amenities",
    community_id: 1,
    site_id: 14,
    description: "Massage"
  },
  {
    provider_name: "Heather Riddle",
    service: "amenities",
    community_id: 1,
    site_id: 14,
    description: "Massage"
  },
  {
    provider_name: "Monroe Massage",
    service: "amenities",
    community_id: 1,
    site_id: 14,
    description: "Massage"
  },
];

const seedProvider = () => Provider.bulkCreate(providerData);

module.exports = seedProvider;
