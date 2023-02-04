export default function Rrr({data}){
  console.log("🚀 ~ Rrr ~ data", data);
  return <h3>oioioi - {data.brand} -oioioi</h3>
}


// This gets called on every request
export async function getServerSideProps() {
  console.log("🚀 ~ getServerSideProps ~ async");
  // Fetch data from external API
  // const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
  const res = await fetch(`https://random-data-api.com/api/v2/beers`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}