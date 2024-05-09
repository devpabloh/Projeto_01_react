// a partir do react 17, não é mais necessário fazer a importação do mesmo. 

export default function Button(props) {
    const { title } = props;
  return (
    <button>{title}</button>
  )
}
