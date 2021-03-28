const axios = require('axios')

function getstayName(searchValue) {
  return axios.get(`https://en.wikipedia.org/w/api.php?&origin=*&action=query&list=search&srsearch=${searchValue}&format=json`)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err)
    })
}

module.exports = {
  getStayName,
  getStaySummary,
  getStayReviews

}
