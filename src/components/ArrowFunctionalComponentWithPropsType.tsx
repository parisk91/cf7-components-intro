// type  Props= {
//     title:string,
//     description:string,
// }

type A = {
    title:string,
}

type B = {
    description:string,
}

type MergedProps = A & B;

const ArrowFunctionalComponentWithProps =
    ({title, description} : MergedProps) => {
    return (
        <>
            <h1 className="text-center mt-12 font-bold">{title}</h1>
            <p className="text-gray-800 text-center font-bold mt-12">{description}</p>
        </>
        )
    }

    export default ArrowFunctionalComponentWithProps