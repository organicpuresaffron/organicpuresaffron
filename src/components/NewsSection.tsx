import React from 'react';
import { Link } from 'react-router-dom';
import { Newspaper } from 'lucide-react';

export const newsArticles = [
  {
      id: 1,
      source: "SECTOR 360",
      slug: "union-minister-interacts-with-startups",
      title: "Union Minister of State for Animal Husbandry, Dairying and Fisheries, Shri ParshottamRupala interacted with Startups at Swarrnim University",
      date: "November 23, 2023",
      content: "Ahmedabad, November 23, 2023: In a moment of honour for the Swarrnim Startup and Innovation University hosted the Honourable Union Minister of State for Animal Husbandry, Dairying and Fisheries, Shri ParshottamRupala.The minister visited the university campus in Gandhinagar and interacted with students, just a day after inaugurating the International Fisheries Conclave at Science City in Ahmedabad. The president of the Swarrnim university Shri Rishabh Jain and Vice President Shri Adi Jain, felicitated the Honourable Minister. Swarrnim Startup and Innovation University is the first university in India which is dedicated to nurturing and promoting startups. As part of the visit, the honourable minister interacted with startups, and also rewarded two startups with recognition from the university. The minister appreciated the university’s initiatives to promote innovations to create a conducive atmosphere to let startups grow and flourish. Shri Rupala was particularly impressed with a startup that encouraged saffron cultivation here. Saffron, which is typically cultivated in cooler climates and is usually found in Kashmir in India, has been cultivated here. The startup – Aeroponics Saffron Farming – was founded in December 2021 by Sahil Ninama and Mayank Dabhi. It was incubated at Swarrnim Startup and Innovation University earlier this year. The honourable minister interacted with around nine startups at the university in the fields of agriculture, waste management, electric mobility and urban parking solutions, among others. The honourable minister along with the President of Swarrnim Start & Innovation University, Shri Rishabh Jain handed over the reward of Rs 5 lakh each to two startups – OPS Enterprise and Wet Coal. During his address at the university, Shri Rupala hailed and appreciated the saffron cultivation project by students of Swarrnim Startup & Innovation University and personally studied and understood how the cultivation is taking place in a laboratory set up. “I have personally visited Kashmir and I am well versed with the process of cultivating saffron which is truly a laborious job. However, I never thought it would ever be cultivated in Gujarat. But I am proud and fortunate to be able to witness this innovation from students of Swarrnim Startup and Innovation University who managed to cultivate saffron here. I’ve remained a teacher at heart and witnessing this miracle is a different joy indeed,” he said. Appreciating the Honourable Prime Minister Narendra Modi’s vision of promoting and encouraging innovations among students. “The time is such that our Chandrayaan successfully lands on the moon! This is the only time and is indeed the right time. Both Gujarat and India are blessed with the wealth of the youth and its talent and also a great visionary leader, who is a guiding light to make such innovations possible. I also appreciate this unique experiment of Swarrnim Startup and Innovation University to bring a vast range of subjects under the umbrella of a single university and I congratulate the management for such unique efforts,” the minister further went on to say. During his address, the Honourable Minister also emphasized our Indian culture, joint family concept and motivated the faculties by quoting the classical examples. He also gave valuable insights for new initiatives that can be taken by the university during his interaction with university officials.",
      image: "news1.webp"
  },
  {
    id: 2,
    source: "GUJARATHEADLINE",
    slug: "the-two-year-old-startup-cultivated-high-quality-saffron-in-gujarat-without-use-of-soil-or-water",
    title: "The two-year old startup cultivated high quality saffron in Gujarat without use of soil or water",
    date: "November 8, 2023",
    content: "In a breakthrough innovation, a startup from Gandhinagar, incubated at the Swarrnim Incubation Center of Swarrnim Startup and Innovation University, has successfully developed saffron farming in Gujarat through Aeroponics. Swarrnim Startup and Innovation University is the first university in India dedicated to nurturing and promoting startups \n \n.Saffron, which is typically cultivated in cooler climates like Kashmir, has now been successfully grown in Gandhinagar. The startup, Aeroponics Saffron Farming, was founded in December 2021 by Sahil Ninama and Mayank Dabhi, and was incubated at Swarrnim Incubation Center earlier this year. “Saffron is traditionally cultivated once a year in Jammu and Kashmir, but using aeroponics, we have successfully grown saffron in a 10x10 feet area on our university campus. The key advantage is that the crop can be cultivated four times a year instead of just once. Additionally, we have reduced the saffron production process by a quarter,” explained Sahil Ninama, co-founder of Aeroponics Saffron Farming. The startup uses aeroponics, a method in which soil and water are not required, and instead, an artificial climate is created to grow the crops. “We’ve cultivated saffron with an investment of Rs 3 lakh, and using this method, we can yield 500-600 grams of saffron from 100 kg of saffron bulbs, without any deterioration in quality,” said Mayank Dabhi, co-founder. So far, the startup has received Rs 1.46 lakh in funding, jointly contributed by the state government and the university, for the saffron cultivation initiative. The startup aims to expand its saffron production and retail it in the market. “Our mission at Swarrnim is to nurture ideas and transform them into innovations that can address pressing socio-economic challenges. This saffron cultivation innovation can help introduce indigenous agricultural crops of India to the global market, benefiting farmers economically,” said Mr. Adi Jain, Vice President of Swarrnim Startup and Innovation University.",
    image: "news2.jpg"
  },
  {
    id: 3,
    source: "DIVYA BHASKAR",
    slug: "saffron-cultivation-in-gujarat-aeroponics-saffron-farming-incubate-at-swarnim-incubation-center",
    title: "Saffron Cultivation in Gujarat: Aeroponics Saffron Farming at Swarnim Startup and Innovation University, Crop Can Be Harvested Four Times a Year",
    date: "A Year Ago",
    content: "A Gandhinagar-based startup incubated at Swarnim Startup and Innovation University's Swarnim Incubation Center has successfully developed a new method of saffron cultivation in Gujarat through a novel experiment with the help of aeroponics. It is worth mentioning that, tone.For More refer this link :\n https://www.divyabhaskar.co.in/local/gujarat/ahmedabad/news/aeroponics-saffron-farming-incubate-at-swarnim-incubation-center-132117233.html",
    image: "news3.jpg"
  },
  {
    id: 4,
    source: "SWARRNIM UNIVERSITY",
    slug: "cultivating-innovation-the-spark-of-a-saffron-revolution-in-gujarat",
    title: "Cultivating Innovation: The Spark of a Saffron Revolution in Gujarat",
    date: "A Year Ago",
    content: "A saffron revolution is unfolding through Aeroponics – a groundbreaking farming technique. Unlike traditional methods, this startup at Swarrnim University, founded in December 2021, employs Aeroponics for cultivating saffron. Sahil Ninama and Mayank Dabhi, the innovative minds behind this venture, have turned a 10×10 feet area on the university campus into a saffron haven. They have challenged the notion that saffron can only thrive in specific climates. With the right mindset, the sky's the limit and saffron is their start. Aeroponics Colours A Saffron World Aeroponics is a cutting-edge farming technique. This has redefined traditional saffron cultivation. Unlike conventional methods, it has eliminated the need for soil. Instead it utilizes an air-rich environment for plant growth. In Aeroponics Saffron Farming at Swarrnim, saffron bulbs are suspended in a nutrient-rich mist, nurturing optimal nutrient absorption. This revolutionary approach enhances efficiency, allowing year-round cultivation and four harvests annually. The artificial climate created defies geographical limitations and significantly reduces resource requirements. This sustainable and innovative adaptation of Aeroponics is at the forefront of transforming saffron farming – a pioneering model for agricultural advancements. Year-Round Saffron Cultivation Saffron is a once-a-year delicacy, primarily grown in regions like Kashmir. With Aeroponics, this startup has achieved extraordinary. They’ve managed to cultivate saffron four times a year. The method involves creating an artificial climate, eliminating the need for soil and traditional watering. This innovation multiplies the yield and revolutionizes saffron production. It reduces the time and resources required for the cultivation. Swarrnim Incubation Center: Nurturing Agricultural Innovation Incubated at Swarrnim's Incubation Center, this startup embodies the university's commitment to innovation. The centre provides a nurturing environment for ideation, experimentation, and implementation, allowing entrepreneurial ideas to flourish. Visit of Hon'ble Shri. Parshottam Rupala The saffron initiative gained recognition with the esteemed visit of Hon'ble Shri. Parshottam Rupala. His commendation of the project reflects the potential impact on agriculture in Gujarat. Swarrnim's commitment to supporting groundbreaking projects aligns with the government's vision for agricultural innovation. This validates the startup's efforts and highlights the collaborative ecosystem at Swarrnim University. Saffron Farming Beyond Boundaries Beyond the university campus, Aeroponics Saffron Farming envisions cultivating saffron in wastelands and unused spaces across Gujarat. The versatility of Aeroponics allows for adaptive and sustainable farming practices. It potentially transforms arid landscapes into thriving saffron fields. The startup's vision extends to making Gujarat a significant contributor to saffron production on a global scale. Investment and Funding for Agricultural Innovation Agricultural innovation often requires financial support. This startup has received commendable funding. With an investment of Rs 3 lakh, the team successfully cultivated saffron. They’ve further demonstrated the efficiency and cost-effectiveness of the Aeroponics method. The funding, contributed by the state government and the university, emphasizes the collaborative efforts to boost innovation in agriculture. Quality Assurance through Testing The commitment to quality is evident as the cultivated saffron undergoes rigorous testing for Safranal, crocin, and procrocin content. This quality assurance ensures that the saffron meets the highest standards \n\n\n.This makes it market-ready. Future Prospects: Scaling Saffron Production With a successful pilot project, the startup aims to expand saffron production and enter the retail market. This expansion aligns with the broader vision of taking indigenous agricultural crops from Gujarat to the global market. Swarrnim's Vice President, Mr. Adi Jain, believes that this innovation is a transformative force for Indian agriculture. It helps farmers to elevate the country's agricultural exports. Agricultural Transformation: A Saffron Legacy The Aeroponics Saffron Farming initiative at Swarrnim University represents the promise of technological advancement. This symbolizes the potential for transforming the agricultural landscape. This saffron revolution challenges traditional farming norms and sets the stage for a new era of agricultural innovation. Swarrnim's role in nurturing such transformative initiatives solidifies its position as a hub for groundbreaking ideas. These ideas have the power to reshape industries and benefit communities. The saffron legacy born at Swarrnim is a testament to the university's commitment to fostering innovation, entrepreneurship, and sustainable agricultural practices.",
    image: "news4.png"
  },
  {
    id: 5,
    source: "NAVJEEVAN EXPRESS",
    slug: "swarrnim-incubation-center-innovates-saffron-farming-in-gujarat-through-aeroponics",
    title: "Swarrnim Incubation Center innovates Saffron farming in Gujarat through Aeroponics",
    date: "November 8, 2023",
    content: "In a breakthrough innovation, a startup from Gandhinagar, incubated at the Swarrnim Incubation Center of Swarrnim Startup and Innovation University has successfully developed saffron farming in Gujarat through Aeroponics. Saffron, which is typically cultivated in cooler climates and is usually found in Kashmir in India, has been cultivated here. The startup – Aeroponics Saffron Farming – was founded in December 2021 by Sahil Ninama and Mayank Dabhi. It was incubated at Swarrnim Incubation Center of Swarrnim Startup and Innovation University earlier this year.Going forward, we plan to cultivate saffron in waste land as well as unused places in Gujarat. The method used is aeroponics in which soil and water are not required and instead an artificial climate is created. We have successfully cultivated saffron with an investment of Rs 3 lakh. Using this method, we can get a yield of 500-600 gram saffron using 100 kg of saffron bulbs. Interestingly, there is no quality deterioration in the new crop as well,” Mayank Dabhi, co-founder of the firm said. The crop is also sent for product testing for Safranal, crocin and procrocin content. So far, the startup has received Rs 1.46 lakh funding jointly contributed by the state government and the university for the cultivation of saffron. The startup aims to expand its saffron production and retail it in the market. “At Swarrnim, our sole aim is to nurture ideas and develop them into prototypes and innovations that can help address stinging socio-economic issues. This innovation of saffron cultivation can help take indigenous agriculture crops of India to the world and help farmers earn better. Through education, research, and innovation, our vision at SSIU is to drive up the spirit of entrepreneurship amongst students and help them tap into their creative minds and enable them to develop, promote and utilise innovations to build a better society,” said Adi Jain, Vice President, Swarrnim Startup and Innovation University.",
    image: "news5.jpg"
  },
  {
    id: 6,
    source: "SWARRNIM UNIVERSITY",
    slug: "shri-parshottam-rupala-applauding-the-aeroponic-saffron-farming-innovation-at-swarrnim-university",
    title: "Shri Parshottam rupala applauding the Aeroponic Saffron Farming innovation at Swarrnim university",
    date: "November 8, 2023",
    content: "Let's take a moment to applaud each and every one of you here today. Your energy, your passion, and your commitment to growth are what make this space truly inspiring. The fact that you're here, pushing boundaries and striving for excellence, speaks volumes about your dedication to making a difference. You are the visionaries, the innovators, and the changemakers of tomorrow. So let's give yourselves a round of applause—for the courage to start, the resilience to keep going, and the belief in your potential to shape the future. \nRefer the link : https://www.youtube.com/watch?v=_XI05AnGn8o",
    image: "news6.png"
  }
];

export default function NewsSection() {
  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gray-900 mb-4">In the News</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <Link 
              key={article.id} 
              to={`/news/${article.slug}`} 
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center mb-4">
                <Newspaper className="h-6 w-6 text-orange-600" />
                <span className="ml-2 text-sm text-gray-600">{article.source}</span>
              </div>
              <h3 className="text-xl font-serif text-gray-900 mb-3">{article.title}</h3>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{article.date}</span>
                <span className="text-orange-600 hover:text-orange-700 font-medium">
                  Read More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}