export interface Service {
    image: string;
    title: string;
    description: string[];
  }
  
  export const services: Service[] = [
    {
      image: "https://img.freepik.com/free-psd/orange-elegant-corporate-card_1435-1096.jpg?t=st=1746873752~exp=1746877352~hmac=41d4421499bc7b39bb029d7bdcf08c2a2a83dcac298059711fd11c7a18ae65e9&w=826",
      title: "Business Cards",
      description: [
        "Professional appearance",
        "Custom designs",
        "High-quality finish",
        "Matte or glossy options"
      ]
    },
    
    {
      image: "https://img.freepik.com/free-vector/set-banners-with-abstract-geometric-shapes_23-2147919423.jpg",
      title: "Flex Printing",
      description: [
        "Weatherproof",
        "Large format",
        "Bold visuals",
        "Ideal for hoardings"
      ]
    },
    {
      image: "https://img.freepik.com/free-vector/hand-drawn-colorful-wedding-invitation-template_23-2148394115.jpg",
      title: "Wedding Cards",
      description: [
        "Custom designs",
        "Premium paper",
        "Elegant prints",
        "Quick turnaround"
      ]
    },
    {
      image: "https://img.freepik.com/free-vector/vintage-screen-printing-badges-set_225004-855.jpg",
      title: "Screen Printing",
      description: [
        "Durable ink",
        "Great for fabric",
        "High contrast",
        "Bulk options"
      ]
    }
  ];