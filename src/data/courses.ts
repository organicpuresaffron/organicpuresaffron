export interface Course {
    id: number;
    title: string;
    slug: string;
    description: string;
    duration: string;
    price: string;
    image: string;
    formLink: string;
    features: string[];
  }
  
  export const courses: Course[] = [
    {
      id: 1,
      title: "Mastering Saffron Cuisine",
      slug: "mastering-saffron-cuisine",
      description: "Learn the art of cooking with saffron from Michelin-starred chefs",
      duration: "6 weeks",
      price: "$299",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      formLink: "https://forms.google.com/your-form-link-1",
      features: [
        "Weekly live sessions with expert chefs",
        "Hands-on cooking workshops",
        "Premium saffron starter kit",
        "Certificate of completion"
      ]
    },
    {
      id: 2,
      title: "Saffron Farming Essentials",
      slug: "saffron-farming-essentials",
      description: "Complete guide to sustainable saffron cultivation",
      duration: "8 weeks",
      price: "$399",
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      formLink: "https://forms.google.com/your-form-link-2",
      features: [
        "Soil preparation techniques",
        "Cultivation best practices",
        "Harvest optimization",
        "Marketing strategies"
      ]
    },
    {
      id: 3,
      title: "Saffron Business Masterclass",
      slug: "saffron-business-masterclass",
      description: "Start and scale your saffron business",
      duration: "4 weeks",
      price: "$499",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      formLink: "https://forms.google.com/your-form-link-3",
      features: [
        "Market analysis",
        "Supply chain management",
        "Brand building",
        "E-commerce strategies"
      ]
    },
    {
      id: 4,
      title: "Saffron Quality Assessment",
      slug: "saffron-quality-assessment",
      description: "Learn professional saffron grading and testing",
      duration: "3 weeks",
      price: "$199",
      image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      formLink: "https://forms.google.com/your-form-link-4",
      features: [
        "ISO standards overview",
        "Laboratory testing methods",
        "Quality certification",
        "Authentication techniques"
      ]
    }
  ];