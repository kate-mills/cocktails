import React from "react";

const SearchForm = ({setSearchTerm}) => {

  // Holds value between renders.
  const searchValue = React.useRef('');

  // focus form input  on render
  React.useEffect(() => {
    searchValue.current.focus()
  }, []);
  
  // No page refresh
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  // Set value while user types input
  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  }

  return (
    <section className="section">
      <h2 className="section-title">search cocktails</h2>
      <form className="form search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input 
            type="text"
            name="name"
            id="name"
            onChange={searchCocktail}
            ref={searchValue}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
