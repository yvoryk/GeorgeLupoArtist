const exhibitionsList = [
  {
    year: "2024-2025",
    title: "Quintessentially We Exhibit",
    location: "Cultural Council of Palm Beach County",
    details: "“Portrait of Paris Naked on the Beach”",
  },
  {
    year: "October - November 2024",
    title: "Critical Vision - One Man Show",
    location: "Art Around Town, Broward Art Guild, Northwest Regional Library, Coral Springs, Florida",
  },
  {
    year: "May - June 2024",
    title: "Critical Vision - One Man Show",
    location: "Art Around Town, Broward Art Guild, West Regional Library, Plantation, Florida",
  },
  {
    year: "2023 - Present",
    title: "Member of the Broward Art Guild",
    location: "Fort Lauderdale, Florida",
    details: "Numerous paintings and photographs exhibited",
  },
  {
    year: "2021",
    title: "31st Annual All Florida Juried Arts Show",
    location: "The Arts Council of Martin County",
    details: "“Matrix 143”",
  },
  {
    year: "2015 - 2020",
    title: "Member of the Artist’s Guild of the Boca Raton Museum of Art",
    location: "Boca Raton, Florida",
    details: "Received several awards for paintings and photographs.",
  },
];

const Exhibitions = () => {
  return (
    <section className='w-full flex-center flex-col py-10 px-6'>
      <h1 className='head_text text-center mb-6'>
        Awards & Exhibitions
        <br className='max-md:hidden' />
        <span className='orange_gradient text-center'> Achievements</span>
      </h1>

      <p className='desc text-center max-w-2xl mb-6'>
        A collection of exhibitions and recognitions showcasing my work over the years.
      </p>

      <div className='w-full max-w-3xl'>
        {exhibitionsList.map((item, index) => (
          <div key={index} className='bg-gray-100 p-4 mb-4 rounded-lg shadow-md'>
            <h2 className='text-xl font-semibold'>{item.year}</h2>
            <p className='text-lg text-gray-700'>{item.title}</p>
            <p className='text-gray-600 italic'>{item.location}</p>
            {item.details && <p className='text-gray-500'>{item.details}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Exhibitions;
