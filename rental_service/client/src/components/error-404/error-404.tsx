import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <section className="not-found-page">
      <div className="container">
        <h1 className="not-found-page__title">404 - Page Not Found</h1>
        <p className="not-found-page__description">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Link to="/" className="not-found-page__link">
          Go back to homepage
        </Link>
      </div>
    </section>
  );
}

export { NotFoundPage };