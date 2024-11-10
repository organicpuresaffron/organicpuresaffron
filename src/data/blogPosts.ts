export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Ancient History of Saffron",
    slug: "ancient-history-of-saffron",
    excerpt: "Discover the fascinating journey of saffron through time...",
    content: `
      Saffron, often called "red gold," has been cherished for over three millennia. This precious spice has been used in various civilizations, from ancient Persia to modern-day India.

      The earliest known cultivation of saffron dates back to Bronze Age Greece, where the spice was depicted in palace frescoes. These ancient artworks show saffron being gathered and used in religious ceremonies and medicinal preparations.

      In India, saffron has held a special place in Ayurvedic medicine and culinary traditions for thousands of years. The spice was particularly revered in Kashmir, where the climate and soil conditions proved perfect for saffron cultivation.

      Throughout history, saffron has been more valuable than gold by weight. It was used not only as a spice and medicine but also as a dye for royal garments and religious robes. The intense labor required to harvest saffron – with each flower producing only three stigmas – has contributed to its legendary status and high value.

      Today, saffron continues to be one of the world's most precious spices, carrying with it thousands of years of cultural and culinary heritage. Its unique flavor, aroma, and color make it an irreplaceable ingredient in countless traditional dishes across Asia and Europe.
    `,
    image: "https://images.unsplash.com/photo-1593261890590-6542c38c3486?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "March 15, 2024",
    author: "Dr. Priya Sharma"
  },
  {
    id: 2,
    title: "Culinary Secrets with Saffron",
    slug: "culinary-secrets-with-saffron",
    excerpt: "Learn how to enhance your dishes with the perfect amount...",
    content: `
      Saffron is more than just a spice – it's a culinary art form that can transform ordinary dishes into extraordinary experiences. Here's your guide to mastering this precious ingredient.

      The Golden Rule of Saffron
      Less is more when it comes to saffron. A few strands are often enough to impart the desired color and flavor. Too much can make your dish bitter and overwhelmingly medicinal.

      Preparation Techniques
      1. Blooming: Always bloom your saffron in warm (not hot) liquid for 20-30 minutes before using
      2. Grinding: For some dishes, grinding saffron with a pinch of sugar helps release more color and flavor
      3. Storage: Keep saffron in an airtight container away from light and heat

      Perfect Pairings
      - Rice dishes: Biryani, Pulao, Risotto
      - Seafood: Paella, Fish curry
      - Desserts: Kheer, Zarda, Saffron milk

      Remember, authentic saffron should have a sweet, floral aroma with slightly metallic notes. When added to warm water, it should slowly release its golden color without leaving any artificial dye behind.
    `,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "March 10, 2024",
    author: "Chef Rajesh Kumar"
  },
  {
    id: 3,
    title: "Health Benefits of Saffron",
    slug: "health-benefits-of-saffron",
    excerpt: "Explore the numerous health benefits this spice offers...",
    content: `
      Saffron has been used in traditional medicine for centuries, and modern science is now validating many of its health benefits. Let's explore the remarkable properties of this precious spice.

      Antioxidant Powerhouse
      Saffron contains several powerful antioxidants, including crocin, crocetin, and safranal. These compounds help protect your cells against oxidative stress and inflammation.

      Mental Health Benefits
      - Natural antidepressant properties
      - May improve mood and reduce anxiety
      - Potential memory-enhancing effects
      - Could help prevent neurodegenerative conditions

      Physical Health Benefits
      1. Heart Health
         - Helps reduce blood pressure
         - May lower cholesterol levels
         - Supports healthy arteries

      2. Eye Health
         - Protects against macular degeneration
         - May improve vision in adults with age-related issues

      3. Digestive Health
         - Aids in digestion
         - Reduces inflammation in the digestive system
         - May help prevent gastrointestinal disorders

      Recommended Daily Intake
      For general health benefits, 15-30mg of saffron per day is typically recommended. Always consult with a healthcare provider before starting any supplement regimen.
    `,
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "March 5, 2024",
    author: "Dr. Arun Patel"
  }
];