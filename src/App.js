import Header from "./componentes/Header";
import FeedBackItem from "./componentes/FeedBackItem";

function App(){

        //objeto de estilos:
        const HeaderStyles = {
            backgroundColor: '#3ba3ed',
            color:'white'
        }

    return (
        <div className="container">
            {/* props: atributicos de etiquetica de un componentico*/}
            <Header 
            bgColor={HeaderStyles.backgroundColor}
                color={HeaderStyles.color}/>
            <FeedBackItem/>
            <FeedBackItem/>
            <FeedBackItem/>
            <FeedBackItem/>
            
        </div>
    )
}

export default App;