function About() {
  return (
    <div className="min-h-screen px-6 py-12 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>

      <p className="mb-4">
        My name is Juniper Farr, and I'm a 21 year old web and UI/UX designer.
        Currently, I am studying Digital Media at the University of Central Florida.
        Outside of web design and development, I also have a passion for graphic design and accessibility in UI.
      </p>

      <h3 className="text-2xl font-semibold mt-8 mb-4">Skills</h3>
      <ul className="list-disc list-inside">
        <li>Figma</li>
        <li>JavaScript</li>
        <li>React/React Native</li>
        <li>HTML & CSS</li>
        <li>Adobe Creative Cloud</li>
        <li>PHP</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-8 mb-4">Interests</h3>
      <p>
        Within work, my strong suits involve UI/UX design and graphic design.
        Outside of work, I often enjoy film photography, making music, and vinyl/dvd collecting. 
      </p>
    </div>
  );
}

export default About;