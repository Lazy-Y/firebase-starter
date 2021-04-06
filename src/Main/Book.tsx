export type Props = {
    name: string,
    description: string,
}

const Book = ({ name, description }: Props) => {
    return <div>{`Book: ${name} | ${description}`}</div>
}
export default Book