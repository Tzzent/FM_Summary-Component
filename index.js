// const fetchData = fetch('./data.json').then(res => res.json).then()

const fetchData = async () => {
  const result = await fetch('./data.json');
  const data = await result.json();
  return data;
};

const main = async () => {
  const summaryContainer = document.querySelector('.cards');
  const data = await fetchData();

  data.map((d, idx) => {
    summaryContainer.innerHTML += `
       <div class='card ${d.category}'>
          <div class='category'>
            <img src='${d.icon} alt='${d.category}'/>
            <p class='title${idx + 1}'>${d.category}</p>
          </div>
          <div class='points'>
            <p><b>${d.score}</b> / 100</p>
          </div>
       </div>
       `;
  })
}

main();