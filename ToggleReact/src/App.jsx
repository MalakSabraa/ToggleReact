import Card from './components/Card';

const cards = [
  {
    header: "React",
    text: "React is a JavaScript library for building UIs.",
    image: "/reactLogo.png"
  },
  {
    header: "Tailwind",
    text: "Tailwind is a utility-first CSS framework.",
    image: "/TailwindLogo.png",
  },
  {
    header: "Why use Custom Hooks?",
    text: "Custom hooks make your logic reusable.",
    image: "costumHook.png",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">React Cards</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((item, idx) => (
          <Card
            key={idx}
            text={item.text}
            header={item.header}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;