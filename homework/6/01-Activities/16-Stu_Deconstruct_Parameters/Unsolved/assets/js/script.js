fetch(
  // Explain each parameter in comments below.
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// Parameter explanation.
//per_page = number results per page, chosed 10
//state = only get the issues that are open only,state of the issues to return, chosen open
//sort = what to sort results by the date they were created, ordered to sort them in. sorting order in descending or newest to oldest
