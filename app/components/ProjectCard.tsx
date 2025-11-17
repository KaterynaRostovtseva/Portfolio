export default function ProjectCard({
  title,
  description,
  tech = [],
  link,
  image,
  githubText, 
}: {
  title: string;
  description: string;
  tech?: string[];
  link: string;
  image?: string;
  githubText: string; 
}) {
  return (
    <div className="flex flex-col justify-between h-full bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md transition hover:shadow-xl ">
      {image && (
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-4"/>
      )}

      <div className="flex-1 flex flex-col">
        <h3 className="text-2xl font-semibold mb-2 text-blue-600">{title}</h3>
        <p className="text-default mb-4 flex-1">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((t) => (
            <span key={t} className="bg-blue-100 dark:bg-gray-800 text-blue-700 dark:text-blue-500 text-sm px-2 py-1 rounded">
              {t}
            </span>
          ))}
        </div>
      </div>

      <a href={link} target="_blank" rel="noopener noreferrer" className="mt-auto inline-block btn-outline">
        {githubText}
      </a>
    </div>
  );
}



