import { useLocation } from "react-router-dom"

export default function Contact() {
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const name = queryParams.get("name")

  return (
    <div>
      <h2>Hey {name} Contact us here...</h2>
      <p>Enim Lorem nostrud amet cupidatat excepteur magna ipsum Lorem magna id sint ipsum est. Adipisicing ad commodo eu excepteur Lorem laborum. Dolore sint culpa Lorem qui fugiat est tempor. Esse duis Lorem consectetur esse ea ea sunt id incididunt est excepteur incididunt. Non adipisicing exercitation exercitation deserunt cillum deserunt aliquip laboris laboris duis anim fugiat. Deserunt et in enim ex ullamco nostrud officia Lorem sint do labore reprehenderit.</p>
    </div>
  )
}
