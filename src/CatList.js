import faker from 'faker' ;



// const fakeDataHandler = (fakeData) => {
//     fakeData.map((cat) => {
//         cat["name"] = faker.name.firstName()
//         cat["price"] = faker.commerce.price()
//         cat["location"] = faker.address.cityName()
//     })

// }


// // i dont understand the fakeDataHandler
// const fakeDataHandler = (cat) => {
//     data.map((cat) => {
//         cat["name"] = faker.name.firstName()
//         cat["price"] = faker.commerce.price()

//     catsName.push(faker.name.firstName());
//     setCatsName(catsName);
      
//     catsPrice.push(faker.finance.amount(100, 500, 2, "£"));
//     setCatsPrice(catsPrice);
 
//     }) 
//     return data

// }



const CatList = ({cats, title, handleAddBasket}) => {
    // (handleDelete defined in home componend, is a function used as prop)
    // const cats = props.cats        if cats, title written above in stead of props: you can destructure the props directly by putting them in curly brackets, and say what properties you want from them. 
    // const title = props.title
    // const [modalOpen, setModalOpen]= useState(false);

    return (
        <div className="cat-list">
            <h2> { title } </h2>
           
                {cats.map((cat) => (
                <div className="cat-preview" key={cat.id}>
            

                    <h2>{ cat.title } </h2>
                    <p>Name: {faker.name.firstName()} </p>
                    <p>Location: {faker.address.cityName()}  </p>
                    <p> Price: £{faker.commerce.price()/4} </p>
                    <p>Id: {cat.id}</p>
                    <div className="IMG-wrapper"><img src={cat.url} /></div>
                    <button onClick={handleAddBasket}>add to basket</button>
            </div>
            ))}
     
        </div>
      );
}
 
export default CatList;