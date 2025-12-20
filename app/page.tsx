import axios from "axios";

export default async function Home() {

  const response = await axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}/api/events/dsds`);
  const postData = await response.data;

  return (
    <div key={1}>
      {JSON.stringify(postData)}
      hi from here
    </div>
  );
}
