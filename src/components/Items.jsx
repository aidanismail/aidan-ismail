function Items({ title, company, period, desc, tags }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 border-b border-stone-400 pb-8 mb-8 last:border-0">
      {/* LEFT SIDE: Title, Company, Date */}
      <div className="md:w-1/3 shrink-0 wrap-break-word">
        <h3 className="text-lg font-bold text-sky-700 leading-tight">
          {title}
        </h3>
        <p className="text-stone-800 font-medium mt-1">{company}</p>
        <p className="text-sm text-stone-700 mt-2 font-mono">{period}</p>
      </div>

      {/* RIGHT SIDE: Description & Tags */}
      <div className="md:w-2/3 flex flex-col justify-between">
        <p className="text-black leading-relaxed mb-4 text-justify">
          {desc}
        </p>

        {/* Tags Section */}
        <div className="flex flex-wrap gap-2 mt-auto md:justify-end">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs font-medium text-stone-600 bg-stone-100 border border-stone-300 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Items;
