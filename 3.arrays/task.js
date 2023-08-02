
function compareArrays(arr1, arr2) {

  return (arr1.length === arr2.length) && arr1.every((element, index) => element === arr2);

}



function getUsersNamesInAgeRange(users, gender) {
  return users.filter(user => user.gender === gender).map(user => user.age).reduce((acc, item, index, filteredUsersAges) => acc + item / filteredUsersAges.length, 0);
}