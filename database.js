// JSON.parse to Read the Data
// saveDatabase(HomeInventoryDatabase, "HomeInventory")



const loadDatabase = function (localStorageKey) {

    const databaseString = localStorage.getItem(localStorageKey)
    return JSON.parse(databaseString)
}

// // SAVING THE DATABASE

const HomeInventoryDatabase = loadDatabase("HomeInventory")

const myStuffArticle = document.querySelector("#myStuff")

const homeInventoryFragment = document.createDocumentFragment()

// // for (let table in HomeInventoryDatabase) {

// // const InvTable = HomeInventoryDatabase [table]

const populateDomForDataSet = (dataSet) => {
    const invTable = HomeInventoryDatabase[dataSet]
    invTable.forEach(item => {
      const sectionElement = document.createElement("section")
      for (let key in item) {
        const paragraphElement = document.createElement("p")
        paragraphElement.textContent = `${key}: ${item[key]}`
        sectionElement.appendChild(paragraphElement)
      }
      homeInventoryFragment.appendChild(sectionElement)
    })
//   // }  
  }
  
  populateDomForDataSet("furniture")

  myStuffArticle.appendChild(homeInventoryFragment)







// ________________________________

// // Define the database as an object
// const HomeInventoryDatabase = {}

// // Next, we're going to add some keys to our database object. One for each set of data. I want to store information about furniture, crafting items, and electronics that I have in my home.

// // Define the arrays (a.k.a. tables) in the database to store each type of items
// HomeInventoryDatabase.furniture = []
// HomeInventoryDatabase.crafts = []
// HomeInventoryDatabase.electronics = []

// // The ink well is a craft data item
// const vintageInkwell = {
//     name: "Vintage Ink Well",
//     location: "Writing desk",
//     description: "I enjoy this inkwell because it belonged to my grandfather and holds enough ink to survive weeks of writing."
//   }
  
//   // The writing desk is a furniture data item
//   const writingDesk = {
//     name: "Shaker Writing Desk",
//     location: "Bedroom",
//     description: "This antique desk is special because I found and purchased it with my wife at an Ohio Amish auction."
//   }

//   HomeInventoryDatabase.crafts.push(vintageInkwell)
//   HomeInventoryDatabase.furniture.push(writingDesk)

//   ________________________________

//   const saveDatabase = function (databaseObject, localStorageKey) {
//     /*
//         Convert the Object into a string.
//     */
//     const stringifiedDatabase = JSON.stringify(databaseObject)
//     console.log("json db:", stringifiedDatabase);

//     /*
//         Create a key in local storage, and store the string
//         version of your inventory database as the value
//     */
//     localStorage.setItem(localStorageKey, stringifiedDatabase)
// }
// saveDatabase(HomeInventoryDatabase,"Home Inventory Database")


// _____________________________
// DOM Component Creation Challenge

// const myStuffArticle = document.querySelector("#myStuff")

// const homeInventoryFragment = document.createDocumentFragment()

// for (let table in HomeInventoryDatabase) {
//     const invTable = HomeInventoryDatabase[table]


//  the above is not complete

// Advanced Challenge

