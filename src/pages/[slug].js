import resources from "../data/resources.json";

export async function getStaticPaths() {
  const paths = resources.map((resource) => ({
    params: { slug: resource.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const resource = resources.find((r) => r.slug === params.slug);

  return { props: { resource } };
}

const ResourcePage = ({ resource }) => {
  return (
    <div>
      <h1>{resource.name}</h1>
      <img src={resource.image} alt={resource.alt} />
      <p>{resource.description}</p>
      <p>
        <strong>Category:</strong> {resource.category}
      </p>
      <p>
        <strong>Tags:</strong> {resource.tags}
      </p>
      <a href={resource.link}>Visit Resource</a>
    </div>
  );
};

export default ResourcePage;
