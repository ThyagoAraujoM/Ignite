interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
}

export default function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <strong>{props.repository?.name ?? "default"}</strong>
      <p>{props.repository?.description ?? "From Default React"}</p>
      <a href={props.repository?.html_url ?? ""}>Acessar repositório</a>
    </li>
  );
}
