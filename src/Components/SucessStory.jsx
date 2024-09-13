import React from 'react';

const posts = [
  {
    id: 1,
    title: "MS Dhoni: The Captain Cool",
    href: "#",
    description:
      "Mahendra Singh Dhoni, often referred to as MS Dhoni, is one of the most iconic and successful captains in cricket history. Hailing from the small town of Ranchi, Jharkhand, Dhoni's rise to international cricket stardom is a story of resilience, determination, and an unshakable calm under pressure. His journey from being a small-town boy to leading India to multiple world titles is nothing short of inspirational.Known for his cool-headed demeanor, Dhoni earned the nickname Captain Cool for his ability to remain composed even in the most tense and high-pressure situations. His leadership on the field redefined what it meant to be a captain. He was not just a tactician but also a mentor who nurtured young talents and instilled confidence in his teammates. This calm approach often worked to his advantage, as he made calculated decisions, leading India to victory in some of the most challenging scenarios. One of the key moments in Dhoni’s career came in 2007 when he was appointed as the captain of India’s limited-overs team. Under his leadership, India won the inaugural ICC T20 World Cup in 2007, defeating arch-rivals Pakistan in a thrilling final. This victory marked the beginning of Dhoni’s legacy as a captain who could lead his team to glory on the biggest stages.Dhoni’s crowning achievement came in 2011 when he led India to victory in the ICC Cricket World Cup, ending a 28-year wait for the title. His iconic six to seal the victory against Sri Lanka in the final remains etched in the memories of cricket fans around the world. Dhoni’s leadership was characterized by his ability to remain unfazed under pressure and his knack for making bold, game-changing decisions. Apart from his captaincy, Dhoni was also a formidable wicketkeeper-batsman. He was known for his unorthodox batting style and ability to finish matches with his explosive hitting. His ability to assess the game situation and pace his innings accordingly made him one of the most feared finishers in the game. Throughout his career, Dhoni led India to numerous other titles, including the ICC Champions Trophy in 2013, making him the only captain to win all three major ICC trophies. His leadership extended beyond international cricket, as he also captained the Chennai Super Kings (CSK) in the Indian Premier League (IPL), leading them to multiple championships.",
    date: "Jul 7, 2023",
    datetime: "2023-07-07",
    category: { title: "Cricket", href: "#" },
    author: {
      name: "Rahul Dravid",
      role: "Former Indian Cricketer & Coach",
      href: "#",
      imageUrl:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUS...",
    },
  },
  // Add more posts as needed
];

const SucessStory = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-full mx-auto py-10 px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Success Stories
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Explore the inspiring journeys of some of the most iconic sports personalities.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-10">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col shadow-lg rounded-lg p-6 bg-white"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
                <img src="" alt="" />
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  alt=""
                  src={post.author.imageUrl}
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
              <div className="flex justify-end mt-4">
    
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SucessStory;
