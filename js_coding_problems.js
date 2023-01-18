
// iterating through an object
const myObject = { mark: "great guy", carrie: "hottie", paul: "jerky" };
for (let item in myObject) {
  console.log(`${item} is totally a ${myObject[item]}`);
}

// iterate through a complex object
async function newGetPicture() {
  const searchTerm = "cats";
  const res = await axios.get("https://api.giphy.com/v1/gifs/search", {
    params: {
      api_key: "D9lOp3hW5izRqR90GzV4OisTp2nCke7z",
      q: searchTerm,
      limit: 25,
    },
  });
  console.log(res);
  console.log(res.data.data);
  grabData(res.data);
  return res.data.data;
}

// I did this to extract the data
const myData = {};
function grabData(data) {
  Object.assign(myData, data);
}

// now write code here to iterate through it






// a trick to check for duplicates in an array using the confusion shorthand
function hasNoDuplicates(myArray) {
  return myArray.every(
    (item) => myArray.indexOf(item) === myArray.lastIndexOf(item)
  );
}

class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    alert("Hooray");
  }

  getSides() {
    console.log("Side 1 is ", this.side1);
    console.log("Side 2 is", this.side2);
    console.log("Side 3 is ", this.side3);
  }
}
