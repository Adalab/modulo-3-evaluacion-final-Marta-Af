export function fetchPersons() {
    return fetch('https://hp-api.onrender.com/api/characters')
      .then(response => response.json())
      .then(responseData => {
        return responseData.map(eachPerson => {
          return {
            id: eachPerson.id,
            name: eachPerson.name,
            species: eachPerson.species,
            house: eachPerson.house,
            image: eachPerson.image,
            alternate_names: eachPerson.alternate_names,
            gender: eachPerson.gender

          };
        });
      });
  }
  