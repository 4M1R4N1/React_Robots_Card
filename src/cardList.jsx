import Card from "./card";

const CardList = ({ robotList }) => {    

    return (
        <div className="flex flex-wrap justify-center">
            {
                robotList.map((el, index) => (
                    <Card key={index} id={el.id} name={el.name} email={el.email} /> 
                ))
            }                       
        </div>      
    );
}

export default CardList;