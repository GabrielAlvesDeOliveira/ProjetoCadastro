import Layout from "../components/Layout"

export default function Jsx(){

    function subtitulo(){
        return <h2>{"muito lega".toUpperCase()}</h2>
    }

    return(
        <Layout titulo="Entendendo o JSX">
            <div>
                {subtitulo()}
                <h1>JSX e um conceito central</h1>
            </div>
        </Layout>
    )
}