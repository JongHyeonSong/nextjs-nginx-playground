export default function Rrr({data}){
  console.log("🚀 ~ Rrr ~ data", data);
  return <h3>oioioi - {data.brand} -oioioi</h3>
}


// This gets called on every request
// export async function getServerSideProps() {
//   console.log("🚀 ~ getServerSideProps ~ async");
//   // Fetch data from external API
//   // const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
//   const res = await fetch(`https://random-data-api.com/api/v2/beers`)
//   const data = await res.json()

//   // Pass data to the page via props
//   return { props: { data } }
// }

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(`https://random-data-api.com/api/v2/beers`)
  const data = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      data,
    },
  }
}