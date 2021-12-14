interface RepositoryIntemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
}

export default function RepositoryItem(props: RepositoryIntemProps) {
  return (
    <li>
      <strong>{props.repository?.name ?? "default"}</strong>
      <p>{props.repository?.description ?? "From Default React"}</p>
      <a href={props.repository?.html_url ?? ""}>Acessar repositório</a>
    </li>
  );
}
