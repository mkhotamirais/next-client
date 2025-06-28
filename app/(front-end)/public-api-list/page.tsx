const publicApis = [
  { label: "dummyjson", url: "https://dummyjson.com" },
  { label: "fakestoreapi", url: "https://fakestoreapi.com" },
  { label: "jikananime", url: "https://api.jikan.moe/v4" },
  { label: "jsonplaceholder", url: "https://jsonplaceholder.typicode.com" },
  { label: "mediastack", url: "https://api.mediastack.com/v1/news" },
  { label: "newsapi", url: "https://newsapi.org/v2" },
  { label: "omdbapi", url: "https://www.omdbapi.com" },
  { label: "reqres", url: "https://reqres.in/api" },
  { label: "sistemtoko", url: "https://sistemtoko.com/public" },
  { label: "themoviedb", url: "https://api.themoviedb.org/3" },
];

export default function PublicApiList() {
  return (
    <section className="flex items-center justify-center max-w-sm mx-auto min-h-screen">
      <div>
        <h1 className="h1">Public Api List</h1>
        <ul>
          {publicApis.map((item, i) => (
            <li key={i}>
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:underline py-1 block">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
