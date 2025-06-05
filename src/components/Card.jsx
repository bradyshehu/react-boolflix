export default function Card({ content }) {
  return (
    <div className="col-4">
      <div className="card">
        <ul>
          <li>{content?.title ?? content.name}</li>
          <li>{content?.original_title ?? content.original_name}</li>
          <li>{content.original_language}</li>
          <li>{content.vote_average}</li>
        </ul>
      </div>
    </div>
  );
}
