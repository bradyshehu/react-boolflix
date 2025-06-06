export default function Card({ content }) {
  return (
    <div className="col-4" key={content.id}>
      <div className="card">
        <ul>
          <li>{content.title}</li>
          <li>{content.ogTitle}</li>
          <li>{content.ogLanguage}</li>
          <li>{content.rating}</li>
        </ul>
      </div>
    </div>
  );
}
