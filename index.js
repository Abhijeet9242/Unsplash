// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
// https://api.unsplash.com/photos/?client_id=MYWR1FgokO69ROjKxCU5ng5WDZNvO2Td4PefxNVNsBw

// `https://api.unsplash.com/search/photos/?page=${page}&query=${query}&per_page=16&client_id=oSepL4SgiY-kAVU0aUW_w3IdwJL9PlnDC-SWpXd7PSY`
var container = document.getElementById("container");

var page = 1;

async function fetchDta(query = "random") {
  //  var query = "random"
  //  console.log(page,query)
  let res = await fetch(
    `https://api.unsplash.com/search/photos/?page=${page}&query=${query}&per_page=16&client_id=MYWR1FgokO69ROjKxCU5ng5WDZNvO2Td4PefxNVNsBw`
  );
  let data = await res.json();
  //    console.log(data)
  //   console.log(data.results)
  data = data.results;
  showImages(data);
}

function showImages(data) {
  if (data.length === 0) {
    //    console.log("hii")
    container.innerHTML = "<h2>No Result Found</h2>";

    let hidebtn = document.getElementById("btnmore");
    hidebtn.style.display = "none";
  }
  // console.log(data)
  data.forEach((item) => {
    // console.log(item)
    // console.log(item.urls.small)
    let div = document.createElement("div");
    let img = document.createElement("img");

    img.src = item.urls.small;

    // for full size Image
    div.addEventListener("click", dlimg);

    function dlimg() {
      window.open(item.links.download, "_top");
    }

    div.append(img);
    container.append(div);
  });
}

//    search query
function searchquery() {
  container.innerHTML = null;
  var inpvalue = document.getElementById("ip-search").value;
  // console.log(inpvalue)
  fetchDta(inpvalue);
}

/* for add more item */
function addMore() {
  var inpvalue = document.getElementById("ip-search").value;
  page = page + 1;

  if (inpvalue.length === 0) {
    inpvalue = "random";
  }

  fetchDta(inpvalue);
}

fetchDta();
