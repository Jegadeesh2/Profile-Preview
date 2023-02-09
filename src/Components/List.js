const List = ({lists, deleteUser}) => {

  return (
    <>
      <h2>The {lists.length} Richest People in the World</h2>
        {lists.map((list) => {
          const {id,name,image,age,netWorth} = list
          return(
      <article key={id} className="list-container">
        <img className='image' src={image} alt="Person Image"/>
        <div className='description'>
        <h3>{name} {"( "+age+" )"}</h3>
        <h4>Net Worth : {netWorth}</h4>
        <button type='button' className='delete btn' onClick = {()=> deleteUser(id)}>Delete</button>
        </div>
      </article>
          )
          })}
    </>
  )
}

export default List