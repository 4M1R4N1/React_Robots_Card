

const FilterPage = ({ changeList }) => {

    const changeHandler = (e) => {
        changeList(list => list.filter(el => el.name.toLowerCase().includes(e.target.value.toLowerCase())))        
        
    }

    return (
        <>
        <input type="text" placeholder="Search..." onChange={changeHandler} />
        </>
    );
}

export default FilterPage;