import React from 'react'


function Tabledata() {
  //Columns defines table headings and properties to be placed into the body
  let columns = [
    {
      heading: 'Name',
      property: 'name'
    },
    {
      heading: 'Age',
      property: 'age'
    },
    {
      heading: 'Gender',
      property: 'gender'
    },
    {
      heading: 'Breed',
      property: 'breed'
    },
  ]

  //Data is the array of objects to be placed into the table
  let data = [
    {
      id:'1',
      name: 'Sabrina',
      age: '6',
      gender: 'Female',
      breed: 'Staffordshire'
    },
    {
      id:'2',
      name: 'Max',
      age: '2',
      gender: 'Male',
      breed: 'Boxer'
    }
  ]

  return (
    <div>
      <table>
        <tr>{columns.map((item, index) => {
          return (<th>{item.heading}</th>)
        }
        )}</tr>

        {data.map((item, index) => {
          return(<tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.gender}</td>
            <td>{item.breed}</td>
          </tr>);
        })}

      </table>
    </div>
  )
}

export default Tabledata;