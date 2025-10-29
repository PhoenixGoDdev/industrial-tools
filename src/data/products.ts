export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  featured?: boolean;
  latest?: boolean;
  specs?: {
    label: string;
    value: string;
  }[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: "power-tools",
    name: "Power Tools",
    description: "Professional grade power tools for every application",
    image: "category-power-tools.jpg",
  },
  {
    id: "abrasives",
    name: "Abrasives",
    description: "Cutting and grinding solutions for industrial use",
    image: "category-abrasives.jpg",
  },
  {
    id: "ladders",
    name: "Ladders & Access",
    description: "Safe and reliable access equipment",
    image: "category-ladders.jpg",
  },
];

export const products: Product[] = [
  {
    id: "drill-1",
    name: "18V Cordless Drill Driver",
    category: "power-tools",
    description: "Professional cordless drill with brushless motor, 2-speed transmission, and LED work light",
    image: "product-drill.jpg",
    featured: true,
    latest: true,
    specs: [
      { label: "Voltage", value: "18V" },
      { label: "Max Torque", value: "60 Nm" },
      { label: "Chuck Size", value: "13mm" },
      { label: "Battery", value: "5.0Ah Li-ion" },
    ],
  },
  {
    id: "saw-1",
    name: "190mm Circular Saw",
    category: "power-tools",
    description: "Powerful circular saw with precision cutting, laser guide, and dust extraction",
    image: "product-saw.jpg",
    featured: true,
    latest: true,
    specs: [
      { label: "Blade Size", value: "190mm" },
      { label: "Power", value: "1400W" },
      { label: "Max Cut Depth", value: "65mm" },
      { label: "Weight", value: "4.2kg" },
    ],
  },
  {
    id: "grinder-1",
    name: "125mm Angle Grinder",
    category: "power-tools",
    description: "Compact angle grinder with powerful motor and safety features for professional use",
    image: "product-grinder.jpg",
    featured: true,
    specs: [
      { label: "Disc Size", value: "125mm" },
      { label: "Power", value: "1200W" },
      { label: "Speed", value: "11000 RPM" },
      { label: "Weight", value: "2.5kg" },
    ],
  },
  {
    id: "drill-2",
    name: "Compact Impact Driver",
    category: "power-tools",
    description: "High-torque impact driver for demanding fastening applications",
    image: "product-drill.jpg",
    latest: true,
    specs: [
      { label: "Voltage", value: "18V" },
      { label: "Max Torque", value: "180 Nm" },
      { label: "Speed", value: "0-3200 RPM" },
      { label: "Weight", value: "1.3kg" },
    ],
  },
  {
    id: "saw-2",
    name: "Reciprocating Saw",
    category: "power-tools",
    description: "Versatile reciprocating saw for demolition and cutting applications",
    image: "product-saw.jpg",
    specs: [
      { label: "Stroke Length", value: "28mm" },
      { label: "Power", value: "1100W" },
      { label: "Speed", value: "0-2800 SPM" },
      { label: "Weight", value: "3.5kg" },
    ],
  },
  {
    id: "grinder-2",
    name: "230mm Angle Grinder",
    category: "power-tools",
    description: "Heavy-duty angle grinder for cutting and grinding large surfaces",
    image: "product-grinder.jpg",
    specs: [
      { label: "Disc Size", value: "230mm" },
      { label: "Power", value: "2200W" },
      { label: "Speed", value: "6600 RPM" },
      { label: "Weight", value: "5.1kg" },
    ],
  },
];
